import {
  FaTeeth,
  FaTeethOpen,
  FaSmile,
  FaStar,
  FaHeart,
  FaChild,
  FaTooth,
  FaCertificate,
  FaCogs,
  FaMagic,
  FaAmbulance,
  FaXRay,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

export const clinicInfo = {
  name: 'Gomathi Dental Clinic',
  tagline: 'Smile • Sparkle • Shine',
  doctor: {
    name: 'Dr. N. Venkatesh',
    qualification: 'BDS',
    registration: 'Reg. No. 34462',
    council: 'Tamil Nadu Dental Council',
  },
  address: {
    street: '289, Thiruvengadam Road',
    area: 'Kakkan Nagar',
    city: 'Sankarankovil',
    pincode: '627756',
    state: 'Tamil Nadu',
    full: '289, Thiruvengadam Road, Kakkan Nagar, Sankarankovil – 627756, Tamil Nadu',
  },
  phones: ['90438 16020', '75980 42020'],
  whatsapp: '9043816020',
  hours: {
    weekday: 'Mon – Sat: 9:30 AM – 1:00 PM, 4:30 PM – 8:30 PM',
    sunday: 'Sunday: Closed',
    emergency: 'Emergency: Available on call',
  },
  email: '',
};

export const services = [
  {
    id: 1,
    name: 'Teeth Alignment',
    description: 'Straighten your smile with braces & clear aligners. Custom treatment plans for all ages.',
    icon: FaTeeth,
    image: '/images/services/teeth-alignment.jpg',
  },
  {
    id: 2,
    name: 'Root Canal Treatment',
    description: 'Pain-free RCT to save infected teeth. Advanced techniques ensure comfort & lasting results.',
    icon: FaTeethOpen,
    image: '/images/services/root-canal.jpg',
  },
  {
    id: 3,
    name: 'Tooth Filling',
    description: 'Natural-looking composite fillings to restore cavities. Match your tooth color perfectly.',
    icon: MdOutlineHealthAndSafety,
    image: '/images/services/tooth-filling.jpg',
  },
  {
    id: 4,
    name: 'Teeth Cleaning',
    description: 'Professional scaling & polishing. Remove plaque, stains & keep your gums healthy.',
    icon: FaTeeth,
    image: '/images/services/teeth-cleaning.jpg',
  },
  {
    id: 5,
    name: 'Dentures',
    description: 'Custom-fit removable & fixed dentures. Regain your smile and chewing confidence.',
    icon: FaSmile,
    image: '/images/services/dentures.jpg',
  },
  {
    id: 6,
    name: 'Teeth Whitening',
    description: 'Professional bleaching for a brighter, whiter smile. Safe, effective & long-lasting.',
    icon: FaStar,
    image: '/images/services/teeth-whitening.jpg',
  },
  {
    id: 7,
    name: 'Gum Disease Treatment',
    description: 'Complete periodontal care. Treat gingivitis & periodontitis with modern techniques.',
    icon: FaHeart,
    image: '/images/services/gum-disease.jpg',
  },
  {
    id: 8,
    name: "Children's Dental Care",
    description: 'Gentle, friendly dental care for kids. Specialized pediatric treatments in a fun environment.',
    icon: FaChild,
    image: '/images/services/childrens-care.jpg',
  },
  {
    id: 9,
    name: 'Dental Implants',
    description: 'Permanent tooth replacement with titanium implants. Look, feel & function like natural teeth.',
    icon: FaTooth,
    image: '/images/services/dental-implants.jpg',
  },
];

export const features = [
  {
    id: 1,
    title: 'RVG Digital X-Ray',
    description: 'Instant digital imaging with 90% less radiation. Accurate diagnosis in seconds.',
    icon: FaXRay,
  },
  {
    id: 2,
    title: 'Government Approved',
    description: 'Fully licensed under Tamil Nadu Dental Council. Reg. No. 34462. Trusted & verified.',
    icon: FaCertificate,
  },
  {
    id: 3,
    title: 'Modern Equipment',
    description: 'State-of-the-art dental chairs, sterilization units & advanced treatment tools.',
    icon: FaCogs,
  },
  {
    id: 4,
    title: 'Painless Treatment',
    description: 'Advanced anesthesia & sedation techniques. Comfortable, anxiety-free procedures.',
    icon: FaMagic,
  },
  {
    id: 5,
    title: 'Emergency Care',
    description: '24/7 emergency dental support. Call us anytime for urgent dental needs.',
    icon: FaAmbulance,
  },
  {
    id: 6,
    title: 'Child Friendly',
    description: 'Specialized kids\' dental zone. Gentle care, fun environment, patient dentists.',
    icon: FaChild,
  },
];

export const timeline = [
  { year: '2010', description: 'Founded Gomathi Dental Clinic in Sankarankovil' },
  { year: '2015', description: 'Upgraded to RVG Digital X-Ray & Modern Equipment' },
  { year: '2024', description: '10,000+ Happy Patients & Counting' },
];

export const treatmentOptions = [
  'Select a treatment',
  'Teeth Alignment',
  'Root Canal Treatment',
  'Tooth Filling',
  'Teeth Cleaning',
  'Dentures',
  'Teeth Whitening',
  'Gum Disease Treatment',
  "Children's Dental Care",
  'Dental Implants',
  'General Checkup',
];

export const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book Appointment', href: '#appointment' },
];

export const footerServices = [
  'Teeth Alignment',
  'Root Canal Treatment',
  'Tooth Filling',
  'Teeth Cleaning',
  'Teeth Whitening',
  'Dental Implants',
  'Gum Treatment',
  "Kids Dental Care",
  'Dentures',
];

export const contactInfo = [
  { icon: FaMapMarkerAlt, text: clinicInfo.address.full },
  { icon: FaPhone, text: clinicInfo.phones[0], href: `tel:${clinicInfo.phones[0].replace(/\s/g, '')}` },
  { icon: FaPhone, text: clinicInfo.phones[1], href: `tel:${clinicInfo.phones[1].replace(/\s/g, '')}` },
  { icon: FaClock, text: clinicInfo.hours.weekday },
];
