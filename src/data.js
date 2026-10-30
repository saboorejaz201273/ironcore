// ===== EDIT YOUR CONTENT HERE =====
const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const BRAND = 'IRONCORE FITNESS'
export const CONTACT = {
  phone: '+92 300 1234567',
  email: 'hello@ironcorefitness.example',
  address: 'Main Boulevard, Lahore, Pakistan',
  hours: [['Monday–Friday', '6:00 AM – 11:00 PM'], ['Saturday–Sunday', '8:00 AM – 10:00 PM']],
}
export const SOCIALS = [
  { name: 'Instagram', href: 'https://instagram.com/' },
  { name: 'Facebook', href: 'https://facebook.com/' },
  { name: 'YouTube', href: 'https://youtube.com/' },
]
export const NAV = [
  ['home', 'Home'], ['about', 'About'], ['services', 'Services'], ['membership', 'Membership'],
  ['trainers', 'Trainers'], ['testimonials', 'Testimonials'], ['contact', 'Contact'],
]
export const IMAGES = {
  hero: u('photo-1534438327276-14e5300c3a48', 1800),
  about: u('photo-1571019613454-1cb2f99b2d8b', 1000),
}
export const STATS = [['1,200+', 'Active Members'], ['15+', 'Expert Trainers'], ['10+', 'Years of Experience']]
export const BENEFITS = [
  ['Expert Guidance', 'Learn from experienced fitness professionals.', 'Award'],
  ['Modern Equipment', 'Train with quality equipment in a comfortable environment.', 'Dumbbell'],
  ['Supportive Community', 'Stay motivated alongside people who share your goals.', 'Users'],
]
export const SERVICES = [
  { title: 'Personal Training', img: u('photo-1581009146145-b5ef050c2e1e'), text: 'Personalized workout programs, one-on-one coaching, and expert guidance tailored to individual fitness goals.' },
  { title: 'Weight Training', img: u('photo-1540497077202-7c8a3999166f'), text: 'Build muscle, improve technique, and develop strength using free weights and resistance machines.' },
  { title: 'Cardio Training', img: u('photo-1576678927484-cc907957088c'), text: 'Improve endurance and cardiovascular fitness with treadmills, cycling, and other cardio equipment.' },
  { title: 'Strength & Conditioning', img: u('photo-1526506118085-60ce8714f8c5'), text: 'Develop power, mobility, stamina, and functional strength through structured training sessions.' },
  { title: 'Group Fitness Classes', img: u('photo-1549060279-7e168fcee0c2'), text: 'Stay motivated through energetic group workouts, instructor-led sessions, and community training.' },
]
export const PLANS = [
  { name: 'Basic', price: 4000, features: ['Access to gym equipment', 'Cardio area access', 'Basic locker facilities', 'Standard workout guidance', 'Flexible gym access during regular hours'] },
  { name: 'Pro', price: 7000, popular: true, features: ['Everything in the Basic Plan', 'Group fitness classes', 'Personalized workout plan', 'Monthly fitness progress review', 'Priority class booking'] },
  { name: 'Elite', price: 12000, features: ['Everything in the Pro Plan', 'Personal training sessions', 'Advanced fitness assessment', 'Nutrition guidance', 'Priority trainer scheduling'] },
]
export const TRAINERS = [
  { name: 'Alex Morgan', specialty: 'Strength Training', years: 8, img: u('photo-1567013127542-490d757e51fc', 700) },
  { name: 'Sarah Johnson', specialty: 'Personal Training', years: 6, img: u('photo-1594381898411-846e7d193883', 700) },
  { name: 'Daniel Carter', specialty: 'Weightlifting & Conditioning', years: 10, img: u('photo-1583454110551-21f2fa2afe61', 700) },
  { name: 'Emily Davis', specialty: 'Group Fitness & Cardio', years: 5, img: u('photo-1518611012118-696072aa579a', 700) },
]
export const TESTIMONIALS = [
  { name: 'Michael R.', text: 'The trainers helped me build a consistent routine and improve my strength. The environment keeps me motivated every time I walk in.' },
  { name: 'Ayesha K.', text: 'I used to feel nervous about joining a gym, but the team made me feel welcome. The group classes are energetic, enjoyable, and challenging.' },
  { name: 'Hamza A.', text: "The equipment, coaching, and supportive atmosphere make a real difference. I've become much more consistent with my workouts." },
]
export const INTERESTS = ['Basic', 'Pro', 'Elite', 'Personal Training', 'General Inquiry']
