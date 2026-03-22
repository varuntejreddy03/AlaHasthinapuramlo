import { useRef, useState, useEffect } from 'react'

export default function VideoPlayer({ src, autoplay = false, muted: initMuted = true, style = {} }) {
  const videoRef  = useRef(null)
  const [playing, setPlaying]   = useState(false)
  const [muted,   setMuted]     = useState(initMuted)
  const [progress, setProgress] = useState(0)
  const [loading,  setLoading]  = useState(false)
  const [showCtrl, setShowCtrl] = useState(true) // always show on mobile

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (autoplay) v.play().then(() => setPlaying(true)).catch(() => {})
    const onTime    = () => setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0)
    const onWaiting = () => setLoading(true)
    const onPlaying = () => { setLoading(false); setPlaying(true) }
    const onPause   = () => setPlaying(false)
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('waiting',    onWaiting)
    v.addEventListener('playing',    onPlaying)
    v.addEventListener('pause',      onPause)
    return () => {
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('waiting',    onWaiting)
      v.removeEventListener('playing',    onPlaying)
      v.removeEventListener('pause',      onPause)
    }
  }, [autoplay])

  function togglePlay(e) {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.paused ? v.play() : v.pause()
  }

  function toggleMute(e) {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  function seekTo(e) {
    e.stopPropagation()
    const v = videoRef.current
    if (!v || !v.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
    v.currentTime = (x / rect.width) * v.duration
  }

  return (
    <div
      style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', background: '#111', ...style }}
      onMouseEnter={() => setShowCtrl(true)}
      onMouseLeave={() => playing && setShowCtrl(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', cursor: 'pointer' }}
      />

      {/* Spinner */}
      {loading && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.25)', pointerEvents: 'none' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: '#F9A825', animation: 'vp-spin 0.8s linear infinite' }} />
        </div>
      )}

      {/* Play/Pause — small, centered, always visible when paused */}
      {(!playing || showCtrl) && !loading && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: playing ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.32)',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'rgba(255,255,255,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
          }}>
            {playing
              ? <svg width="14" height="14" viewBox="0 0 24 24" fill="#1B5E20"><rect x="5" y="3" width="4" height="18"/><rect x="15" y="3" width="4" height="18"/></svg>
              : <svg width="14" height="14" viewBox="0 0 24 24" fill="#1B5E20"><polygon points="6,3 20,12 6,21"/></svg>
            }
          </div>
        </div>
      )}

      {/* Mute/Unmute — SVG icon, always visible, bottom-right above progress */}
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        style={{
          position: 'absolute', bottom: 12, right: 8,
          width: 28, height: 28, borderRadius: '50%',
          background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)',
          cursor: 'pointer', zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 0,
        }}
      >
        {muted
          ? /* muted speaker */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="white" stroke="none"/>
              <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          : /* speaker with waves */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="white" stroke="none"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
        }
      </button>

      {/* Progress bar — tap to seek */}
      <div
        onClick={seekTo}
        onTouchEnd={seekTo}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.2)', cursor: 'pointer', zIndex: 10 }}
      >
        <div style={{ height: '100%', width: `${progress}%`, background: '#F9A825', transition: 'width 0.1s linear' }} />
      </div>

      <style>{`@keyframes vp-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
