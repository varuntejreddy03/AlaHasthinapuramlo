export const PHONE = '+919876543210'
export const WA_NUMBER = '919876543210'
export const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`

export const waOrder = (dish) =>
  `${WA_BASE}${encodeURIComponent(`Hi! I would like to order ${dish} from Ala Hasthinapuramlo. My address is: `)}`

export const MENU = {
  chicken: [
    { id: 1, name: 'Chicken Pulav', telugu: 'చికెన్ పులావ్', desc: 'Slow-cooked basmati with tender chicken pieces', price: 180, spice: 2, veg: false, emoji: '🍗' },
    { id: 2, name: 'Chicken Fry Pulav', telugu: 'చికెన్ ఫ్రై పులావ్', desc: 'Crispy fried chicken tossed in aromatic rice', price: 200, spice: 3, veg: false, emoji: '🍗' },
    { id: 3, name: 'Special Chicken Pulav', telugu: 'స్పెషల్ చికెన్ పులావ్', desc: "Chef's secret masala blend, extra generous", price: 230, spice: 3, veg: false, emoji: '🍗' },
  ],
  mutton: [
    { id: 4, name: 'Mutton Pulav', telugu: 'మటన్ పులావ్', desc: 'Fall-off-the-bone mutton with whole spices', price: 250, spice: 2, veg: false, emoji: '🐑' },
    { id: 5, name: 'Mutton Keema Pulav', telugu: 'మటన్ కీమా పులావ్', desc: 'Minced mutton slow-cooked to perfection', price: 240, spice: 3, veg: false, emoji: '🐑' },
  ],
  egg: [
    { id: 6, name: 'Egg Pulav', telugu: 'గుడ్డు పులావ్', desc: 'Boiled eggs in fragrant Andhra-style rice', price: 150, spice: 2, veg: false, emoji: '🥚' },
    { id: 7, name: 'Egg Bhurji Pulav', telugu: 'ఎగ్ భుర్జీ పులావ్', desc: 'Scrambled egg masala mixed through hot rice', price: 160, spice: 2, veg: false, emoji: '🥚' },
  ],
  veg: [
    { id: 8, name: 'Veg Pulav', telugu: 'వెజ్ పులావ్', desc: 'Fresh vegetables with whole spices', price: 120, spice: 1, veg: true, emoji: '🌿' },
    { id: 9, name: 'Paneer Pulav', telugu: 'పనీర్ పులావ్', desc: 'Soft paneer cubes in golden saffron rice', price: 160, spice: 1, veg: true, emoji: '🌿' },
  ],
  sides: [
    { id: 10, name: 'Raita', telugu: 'రాయితా', desc: 'Cool yogurt with fresh herbs', price: 30, spice: 0, veg: true, emoji: '🥗' },
    { id: 11, name: 'Mirchi Ka Salan', telugu: 'మిర్చి కా సలన్', desc: 'Spicy green chilli curry', price: 40, spice: 3, veg: true, emoji: '🌶️' },
    { id: 12, name: 'Bagara Rice', telugu: 'బగారా రైస్', desc: 'Tempered basmati with whole spices', price: 60, spice: 1, veg: true, emoji: '🍚' },
    { id: 13, name: 'Boiled Egg (2pc)', telugu: 'ఉడికించిన గుడ్లు', desc: 'Two perfectly boiled eggs', price: 30, spice: 0, veg: false, emoji: '🥚' },
  ],
  drinks: [
    { id: 14, name: 'Chaas (Buttermilk)', telugu: 'మజ్జిగ', desc: 'Chilled spiced buttermilk', price: 30, spice: 0, veg: true, emoji: '🥤' },
    { id: 15, name: 'Cold Water Bottle', telugu: 'చల్లని నీళ్ళు', desc: 'Chilled mineral water', price: 20, spice: 0, veg: true, emoji: '💧' },
  ],
}

export const FEATURED = [
  { id: 1, name: 'Chicken Pulav', telugu: 'చికెన్ పులావ్', price: 180, emoji: '🍗', veg: false },
  { id: 4, name: 'Mutton Pulav',  telugu: 'మటన్ పులావ్',  price: 250, emoji: '🐑', veg: false },
  { id: 8, name: 'Veg Pulav',     telugu: 'వెజ్ పులావ్',   price: 120, emoji: '🌿', veg: true  },
  { id: 6, name: 'Egg Pulav',     telugu: 'గుడ్డు పులావ్', price: 150, emoji: '🥚', veg: false },
]

export const REVIEWS = [
  { name: 'Srikanth R.', stars: 5, date: 'Nov 2024', text: 'పులావ్ చాలా బాగుంది! ఇంటికి డెలివరీ కూడా సూపర్ ఫాస్ట్!', lang: 'te' },
  { name: 'Priya M.', stars: 5, date: 'Oct 2024', text: 'Best chicken pulav in Hastina Puram area. Fresh and spicy. Ordering every week now!', lang: 'en' },
  { name: 'Mohammed A.', stars: 5, date: 'Oct 2024', text: 'Value for money. ₹180 chicken pulav is filling and tasty. No more Swiggy for me!', lang: 'en' },
  { name: 'Lakshmi D.', stars: 5, date: 'Sep 2024', text: 'పరిమళం చాలా బావుంటుంది, రుచి అద్భుతం. మా ఫ్యామిలీ అందరికీ ఇష్టం!', lang: 'te' },
  { name: 'Ramesh K.', stars: 5, date: 'Sep 2024', text: 'Authentic Andhra taste! Reminds me of home-cooked food. Highly recommended!', lang: 'en' },
  { name: 'Sunitha V.', stars: 4, date: 'Aug 2024', text: 'చాలా రుచిగా ఉంది. ప్రతి వారం ఆర్డర్ చేస్తున్నాం. ధన్యవాదాలు!', lang: 'te' },
]

export const CATEGORIES = [
  { key: 'chicken', label: 'Chicken', emoji: '🍗' },
  { key: 'mutton', label: 'Mutton', emoji: '🐑' },
  { key: 'egg', label: 'Egg', emoji: '🥚' },
  { key: 'veg', label: 'Veg', emoji: '🌿' },
  { key: 'sides', label: 'Sides', emoji: '🥗' },
  { key: 'drinks', label: 'Drinks', emoji: '🥤' },
]
