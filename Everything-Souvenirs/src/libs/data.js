import {
     FaFacebook,
     FaTwitter,
     FaInstagram,
     FaLinkedin,
     FaLinkedinIn,
     FaHandshake,
     FaBullseye,
     FaHeart, FaRocket, FaLaptop, FaAward, FaGlobeAfrica, FaSmile, FaComments, FaMapMarkerAlt, FaPhone, FaEnvelope,
     FaTshirt, FaMugHot, FaPen, FaBriefcase, FaKey
} from 'react-icons/fa';
import notebook from '../assets/notebook.jpg';
import mug from '../assets/mug.jpg';
import waterBottle from '../assets/water-bottle.jpg';
import tote from '../assets/tote.jpg';
import smoothie_blender from '../assets/smoothie-blender.png';
import {AiFillStar} from "react-icons/ai";
import {MdLightbulb} from "react-icons/md";
import {GiSprout} from "react-icons/gi";
import {BiPackage} from "react-icons/bi";

const penLink = "https://media.istockphoto.com/id/2165562671/photo/black-fountain-pen-in-elegant-case.jpg?s=2048x2048&w=is&k=20&c=hx90obWjsy5J1iDbOUaKpSc9jRrYE_XTq-kXY6Mi1Yg="
const flashLink = "https://images.unsplash.com/photo-1642084962115-61172e7f8b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VVNCJTIwRmxhc2glMjBEcml2ZXxlbnwwfHwwfHx8MA%3D%3D"
const keyChainLink = "https://www.brandedgifts.ng/wp-content/uploads/2023/04/branded-metallic-keyholder-with-opener-400x400.jpg"



export const products = [
     { id: 1, name: 'Branded Ceramic Mug', price: '₦6,500', image: mug, description: 'Durable ceramic mug with custom logo printing.' },
     { id: 2, name: 'Custom Leather Notebook', price: '₦9,200', image: notebook, description: 'Premium notebook with embossed branding.' },
     { id: 3, name: 'Engraved Metal Pen', price: '₦4,800', image: penLink, description: 'Elegant pen with laser-engraved logo.' },
     { id: 4, name: 'Branded USB Flash Drive', price: '₦11,000', image: flashLink, description: 'High-speed USB with custom design.' },
     { id: 5, name: 'Eco-Friendly Water Bottle', price: '₦14,000', image: waterBottle, description: 'Stainless steel bottle with logo engraving.' },
     { id: 6, name: 'Custom Tote Bag', price: '₦8,300', image: tote, description: 'Reusable tote with vibrant full-color print.' },
     { id: 7, name: 'Branded Key Holder', price: '₦3,900', image: keyChainLink, description: 'Branded metallic key holder with opener.' },
     { id: 1, name: 'Rechargeable Smoothie Blender', price: '₦20,200', image: smoothie_blender, description: 'Portable rechargeable smoothie blender available in different colors.' },
];

export const testimonials = [
     { id: 1, name: 'Ngozi Okeke', company: 'NaijaTech', text: 'The custom gift sets were a hit at our end-of-year party. Well packaged and timely!', date: 'Jul 10, 2025', rating: 5 },
     { id: 2, name: 'Tunde Ajayi', company: 'GreenMarket', text: 'Quality branding on our pens and notebooks. Our customers loved them!', date: 'Jul 12, 2025', rating: 4 },
     { id: 3, name: 'Chioma Eze', company: 'LagosEvents', text: 'Perfect giveaways for our product launch. The branded mugs stood out!', date: 'Jul 14, 2025', rating: 5 },
     { id: 4, name: 'Ibrahim Musa', company: 'StartupLab', text: 'The USB drives with our logo were a great touch for our pitch deck.', date: 'Jul 13, 2025', rating: 4 },
     { id: 5, name: 'Amina Bello', company: 'WeddingNaija', text: 'Custom tote bags made our wedding favors so memorable. Thank you!', date: 'Jul 11, 2025', rating: 5 },
     { id: 6, name: 'Segun Adebayo', company: 'MarketKing', text: 'Quick delivery and solid quality on our branded keychains.', date: 'Jul 9, 2025', rating: 4 },
     { id: 7, name: 'Zainab Yusuf', company: 'CreativeNaija', text: 'The branded water bottles were amazing for our retreat. We love the eco design!', date: 'Jul 15, 2025', rating: 5 },
     { id: 8, name: 'Chuka Nwosu', company: 'Innovate NG', text: 'The desk organizers were a hit. Very sleek and well branded.', date: 'Jul 8, 2025', rating: 4 },
     { id: 9, name: 'Olamide Akin', company: 'DesignHub', text: 'The wireless chargers with our logo were very well received.', date: 'Jul 16, 2025', rating: 5 },
     { id: 10, name: 'Ifunanya Nwachukwu', company: 'FinanceNaija', text: 'The hoodies with our branding were perfect for team bonding.', date: 'Jul 17, 2025', rating: 4 },
     { id: 11, name: 'Hauwa Sule', company: 'HealthWise NG', text: 'The eco bottles worked great for our fitness campaign. Thanks!', date: 'Jul 18, 2025', rating: 5 },
     { id: 12, name: 'Daniel Etim', company: 'EduNaija', text: 'The branded notebooks were perfect for our workshops. Good service too!', date: 'Jul 19, 2025', rating: 4 },
];

export const productData = {
     1: {id: 1, name: "Premium Branded T-Shirt", price: 7500, originalPrice: 9000, currency: "₦", category: "Apparel", rating: 4.8, reviewCount: 124, availability: "In Stock",
          images: ["https://via.placeholder.com/600x600?text=T-Shirt+Front","https://via.placeholder.com/600x600?text=T-Shirt+Back", "https://via.placeholder.com/600x600?text=T-Shirt+Side", "https://via.placeholder.com/600x600?text=T-Shirt+Detail"],
          description: "Premium quality cotton t-shirt perfect for corporate branding and promotional events. Made from 100% organic cotton with superior comfort and durability. Ideal for team uniforms, event giveaways, and brand merchandise.",
          features: ["100% organic cotton material", "Pre-shrunk for consistent fit", "Reinforced collar and seams", "Available in multiple colors", "Professional screen printing", "Machine washable"],
          specifications: {"Material": "100% Organic Cotton", "Weight": "180 GSM", "Fit": "Regular Fit", "Care": "Machine wash cold", "Origin": "Made in Nigeria", "Sizes": "XS, S, M, L, XL, XXL"},
          colors: ["Black", "White", "Navy", "Gray", "Red"],
          sizes: ["XS", "S", "M", "L", "XL", "XXL"],
          brandingOptions: ["Screen Print", "Embroidery", "Heat Transfer"]
     }
};

export const relatedProducts = [
     { id: 2, name: "Custom Mug", price: "₦3,000", image: "https://via.placeholder.com/300x200?text=Mug", rating: 4.6 },
     { id: 4, name: "Custom Cap", price: "₦5,000", image: "https://via.placeholder.com/300x200?text=Cap", rating: 4.7 },
     { id: 5, name: "Branded Notebook", price: "₦4,000", image: "https://via.placeholder.com/300x200?text=Notebook", rating: 4.5 },
     { id: 7, name: "Tote Bag", price: "₦8,000", image: "https://via.placeholder.com/300x200?text=Tote+Bag", rating: 4.8 },
];

export const reviews = [
     {id: 1, name: 'Sarah Johnson', company: 'TechCorp Ltd', rating: 5,text: 'Amazing quality branded merchandise! Our employees love the custom t-shirts and mugs. Fast delivery and excellent customer service.', date: 'Jul 17, 2025',},
     {id: 2, name: 'Michael Chen', company: 'StartupHub', rating: 5, text: 'Perfect for our company event giveaways. The USB drives were a huge hit with attendees. Will definitely order again!', date: 'Jul 10, 2025',},
     {id: 3, name: 'Emily Rodriguez', company: 'Creative Agency', rating: 4, text: 'Great selection of products and customization options. The tote bags turned out exactly as we envisioned for our brand.', date: 'Jul 12, 2025',},
     {id: 4, name: 'David Okeke', company: 'EventMasters', rating: 5, text: 'The branded caps were a hit at our conference. High-quality and beautifully designed!', date: 'Jul 15, 2025',},
     {id: 5, name: 'Aisha Bello', company: 'WeddingPlanners', rating: 4, text: 'The water bottles made perfect wedding favors. The customization process was seamless!', date: 'Jul 11, 2025',},
     {id: 6, name: 'Chidi Nwosu', company: 'MarketPros', rating: 5, text: 'Outstanding service and quality. The notebooks elevated our corporate gifts!', date: 'Jul 9, 2025',},
];

export const contactMethods = [
     {id: 1, icon: FaEnvelope, color: "text-blue-600", title: "Email Us", description: "Send us an email anytime. We typically respond within 24 hours.",},
     {id: 2, icon: FaPhone, color: "text-green-600", title: "Call Us", description: "Speak directly with our team during business hours.",},
     {id: 3, icon: FaMapMarkerAlt, color: "text-red-600", title: "Visit Us", description: "Come visit our office for in-person consultations.",},
     {id: 4, icon: FaComments, color: "text-purple-600", title: "Live Chat", description: "Get instant answers through our live chat support.",},
];
export const socialMedia = [
     { name: "Facebook", icon: FaFacebook, url: "#", followers: "2.5K" },
     { name: "Instagram", icon: FaInstagram, url: "#", followers: "1.8K" },
     { name: "LinkedIn", icon: FaLinkedinIn, url: "#", followers: "3.2K" },
     { name: "Twitter", icon: FaTwitter, url: "#", followers: "1.5K" }
];


export const faqs = [
     {id: 1, question: "How quickly do you respond to inquiries?", answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."},
     {id: 2, question: "What information should I include in my inquiry?", answer: "Please include details about your project, timeline, budget range, and any specific requirements. The more information you provide, the better we can assist you."},
     {id: 3, question: "Do you offer free consultations?", answer: "Yes, we offer free initial consultations to discuss your project needs and provide recommendations. Contact us to schedule your consultation."},
     {id: 4, question: "What are your business hours?", answer: "We're open Monday to Friday, 9:00 AM to 6:00 PM (WAT). We're closed on weekends and public holidays."},
     {id: 5, question: "Can I visit your office?", answer: "Absolutely! We welcome office visits. Please schedule an appointment in advance to ensure someone is available to meet with you."},
     {id: 6, question: "Do you work with international clients?", answer: "Yes, we work with clients across West Africa and internationally. We can arrange shipping and handle international projects."}
];

export const businessHours = [
     { day: "Monday", hours: "9:00 AM - 6:00 PM", open: true },
     { day: "Tuesday", hours: "9:00 AM - 6:00 PM", open: true },
     { day: "Wednesday", hours: "9:00 AM - 6:00 PM", open: true },
     { day: "Thursday", hours: "9:00 AM - 6:00 PM", open: true },
     { day: "Friday", hours: "9:00 AM - 6:00 PM", open: true },
     { day: "Saturday", hours: "Closed", open: false },
     { day: "Sunday", hours: "Closed", open: false }
];

export const mapContainerStyle = {
     width: '100%',
     height: '400px',
     borderRadius: '16px'
};

export const center = {
     lat: 6.4281,
     lng: 3.4219
};

export const mapOptions = {
     zoom: 15, disableDefaultUI: false, zoomControl: true, streetViewControl: true, mapTypeControl: true, fullscreenControl: true,
     styles: [{featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }]}]
};
export const socialLinks = [
     { name: 'Facebook', href: 'https://facebook.com', icon: FaFacebook, color: 'text-blue-600' },
     { name: 'Twitter', href: 'https://twitter.com', icon: FaTwitter, color: 'text-sky-500' },
     { name: 'Instagram', href: 'https://www.instagram.com/everythingsouvenirsandgifts?igsh=MW8zbmU3NWJjNWpmZQ==', icon: FaInstagram, color: 'text-pink-500' },
     { name: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedin, color: 'text-blue-700' },
];

export const categories = [
     { name: 'All', icon: FaBriefcase, count: 97, description: 'View all products' },
     { name: 'Apparel', icon: FaTshirt, count: 15, description: 'T-shirts, caps, and clothing' },
     { name: 'Drinkware', icon: FaMugHot, count: 10, description: 'Mugs, bottles, and tumblers' },
     { name: 'Tech', icon: FaLaptop, count: 18, description: 'USB drives, power banks, accessories' },
     { name: 'Office', icon: FaPen, count: 22, description: 'Notebooks, pens, desk accessories' },
     { name: 'Bags', icon: FaBriefcase, count: 12, description: 'Tote bags, backpacks, pouches' },
     { name: 'Accessories', icon: FaKey, count: 20, description: 'Keychains, lanyards, badges' },
];


export const values = [
     {id: 1, icon: AiFillStar, color: "text-yellow-400", title: "Excellence in Gifting", description: "We meticulously curate and craft every branded gift, ensuring unparalleled quality and a lasting impression.",},
     {id: 2, icon: FaHandshake, color: "text-blue-500", title: "Collaborative Partnership", description: "We work hand-in-hand with our clients, transforming their brand vision into tangible, memorable gift experiences.",},
     {id: 3, icon: MdLightbulb, color: "text-yellow-400", title: "Creative Innovation", description: "We constantly explore novel ideas and cutting-edge techniques to bring fresh, impactful branded gift solutions to life.",},
     {id: 4, icon: FaBullseye, color: "text-red-500", title: "Reliable Delivery", description: "Our commitment to timely and accurate delivery ensures your branded gifts arrive perfectly, every time.",},
     {id: 5, icon: GiSprout, color: "text-green-600", title: "Sustainable Practices", description: "We champion eco-friendly materials and ethical sourcing, ensuring our gifts leave a positive impact on both recipients and the planet.",},
     {id: 6, icon: FaHeart, color: "text-red-500", title: "Passion for Brands", description: "Our deep passion for helping brands connect with their audience through thoughtful, personalized gifts drives everything we do.",},
];

export const team = [
     {id: 1, name: "Adebayo Ogundimu", role: "Chief Gifting Strategist", bio: "With over 15 years in brand engagement and corporate gifting, Adebayo founded the company with a vision to help businesses forge deeper connections through memorable branded gifts.", image: "https://via.placeholder.com/300x300?text=AO", expertise: ["Brand Storytelling", "Gift Curation", "Client Experience"]},
     {id: 2, name: "Fatima Al-Hassan", role: "Lead Gift Designer", bio: "Fatima leads our creative team with her exceptional eye for aesthetics and innovative approach to transforming brands into beautiful, tangible gifts.", image: "https://via.placeholder.com/300x300?text=FA", expertise: ["Gift Packaging Design", "Brand Visuals", "Product Customization"]},
     {id: 3, name: "Chinedu Okoro", role: "Logistics & Fulfillment Manager", bio: "Chinedu ensures the seamless journey of every branded gift, from production to timely delivery, managing our supply chain with precision.", image: "https://via.placeholder.com/300x300?text=CO", expertise: ["Supply Chain Optimization", "Quality Control", "Global Shipping"]},
     {id: 4, name: "Aisha Bello", role: "Client Success Lead", bio: "Aisha is dedicated to ensuring every client's gifting campaign is a resounding success, from initial concept to recipient delight.", image: "https://via.placeholder.com/300x300?text=AB", expertise: ["Client Relationship Management", "Project Coordination", "Post-Campaign Support"]}
];


export const milestones = [
     {year: "2018", title: "Founded with a Gifting Vision", description: "Began our journey with a passion for transforming corporate branding through thoughtful, high-quality gifts.", icon: FaRocket,},
     {year: "2019", title: "100+ Branded Campaigns", description: "Successfully executed over 100 unique branded gifting campaigns for diverse clients.", icon: FaBullseye,},
     {year: "2020", title: "Digital Gifting Platform Launch", description: "Introduced our intuitive online platform, simplifying the process of custom branded gift orders.", icon: FaLaptop,},
     {year: "2021", title: "Awarded for Gifting Excellence", description: "Recognized as a leader in innovative branded gifting solutions by the industry.", icon: FaAward,},
     {year: "2022", title: "Expanded Global Reach", description: "Extended our gifting and fulfillment capabilities to serve clients across West Africa and beyond.", icon: FaGlobeAfrica,},
     {year: "2023", title: "Sustainable Gifting Initiative", description: "Launched our curated collection of eco-friendly and ethically sourced branded gifts.", icon: GiSprout,},
];

export const achievements = [
     { number: "500+", label: "Brands Elevated", icon: FaSmile },
     { number: "50,000+", label: "Memorable Gifts Delivered", icon: BiPackage },
     { number: "6", label: "Years of Gifting Expertise", icon: AiFillStar },
     { number: "15+", label: "Industry Accolades", icon: FaAward }
];
