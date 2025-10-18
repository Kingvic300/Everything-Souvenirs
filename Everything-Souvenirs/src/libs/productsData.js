import Tshirt from "../assets/T-shirt.jpg";
import powerBank from "../assets/powerBank.jpg";
import notebook from '../assets/notebook.jpg';
import mug from '../assets/mug.jpg';
import waterBottle from '../assets/water-bottle.jpg';
import tote from '../assets/tote.jpg';
import cap from "../assets/cap.avif";
import pen from "../assets/Engraved Metal Pen.jpg";
import smoothieBlender from '../assets/smoothie-blender.png';

const flashLink = "https://images.unsplash.com/photo-1642084962115-61172e7f8b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VVNCJTIwRmxhc2glMjBEcml2ZXxlbnwwfHwwfHx8MA%3D%3D";
const keyChainLink = "https://www.brandedgifts.ng/wp-content/uploads/2023/04/branded-metallic-keyholder-with-opener-400x400.jpg";
const lanyard = "https://images.pexels.com/photos/7676416/pexels-photo-7676416.jpeg?auto=compress&cs=tinysrgb&w=600";
const badge = "https://images.pexels.com/photos/6956357/pexels-photo-6956357.jpeg?auto=compress&cs=tinysrgb&w=600";
const hoodie = "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600";
const polo = "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600";
const tumbler = "https://images.pexels.com/photos/5946072/pexels-photo-5946072.jpeg?auto=compress&cs=tinysrgb&w=600";
const coaster = "https://images.pexels.com/photos/6280488/pexels-photo-6280488.jpeg?auto=compress&cs=tinysrgb&w=600";
const mousepad = "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600";
const phonestand = "https://images.pexels.com/photos/6069100/pexels-photo-6069100.jpeg?auto=compress&cs=tinysrgb&w=600";
const wirelessCharger = "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600";
const earbuds = "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600";
const backpack = "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600";
const duffel = "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600";
const gymSack = "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600";
const planner = "https://images.pexels.com/photos/6372588/pexels-photo-6372588.jpeg?auto=compress&cs=tinysrgb&w=600";
const stickyNotes = "https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=600";
const deskOrganizer = "https://images.pexels.com/photos/7047485/pexels-photo-7047485.jpeg?auto=compress&cs=tinysrgb&w=600";
const wallet = "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600";
const umbrella = "https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&w=600";
const sunglasses = "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600";
const watch = "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600";

export const products = [
    {
        id: 1,
        name: 'Branded T-Shirt',
        basePrice: '₦3,500',
        image: Tshirt,
        category: 'Apparel',
        description: 'Premium cotton t-shirt with custom branding',
        customizationOptions: ['Screen Printing', 'Embroidery', 'Heat Transfer'],
        minOrder: 50,
        leadTime: '7-10 days'
    },
    {
        id: 2,
        name: 'Custom Mug',
        basePrice: '₦3,000',
        image: mug,
        category: 'Drinkware',
        description: 'Ceramic mug perfect for office branding',
        customizationOptions: ['Logo Printing', 'Color Customization', 'Text Engraving'],
        minOrder: 25,
        leadTime: '5-7 days'
    },
    {
        id: 3,
        name: 'Key Holder',
        basePrice: '₦1,500',
        image: keyChainLink,
        category: 'Accessories',
        description: 'Durable key holder with logo engraving',
        customizationOptions: ['Laser Engraving', 'Color Options', 'Shape Customization'],
        minOrder: 100,
        leadTime: '3-5 days'
    },
    {
        id: 4,
        name: 'Custom Cap',
        basePrice: '₦5,000',
        image: cap,
        category: 'Apparel',
        description: 'Adjustable cap with embroidered logo',
        customizationOptions: ['Embroidery', 'Patch Application', 'Color Selection'],
        minOrder: 30,
        leadTime: '7-10 days'
    },
    {
        id: 5,
        name: 'Branded Notebook',
        basePrice: '₦4,000',
        image: notebook,
        category: 'Office',
        description: 'Professional notebook for corporate gifts',
        customizationOptions: ['Cover Printing', 'Foil Stamping', 'Custom Pages'],
        minOrder: 50,
        leadTime: '5-7 days'
    },
    {
        id: 6,
        name: 'USB Flash Drive',
        basePrice: '₦6,000',
        image: flashLink,
        category: 'Tech',
        description: '16GB USB drive with custom logo',
        customizationOptions: ['Laser Engraving', 'Color Options', 'Custom Shape'],
        minOrder: 25,
        leadTime: '7-10 days'
    },
    {
        id: 7,
        name: 'Tote Bag',
        basePrice: '₦8,000',
        image: tote,
        category: 'Bags',
        description: 'Eco-friendly tote bag with custom printing',
        customizationOptions: ['Screen Printing', 'Heat Transfer', 'Embroidery'],
        minOrder: 50,
        leadTime: '7-10 days'
    },
    {
        id: 8,
        name: 'Water Bottle',
        basePrice: '₦5,500',
        image: waterBottle,
        category: 'Drinkware',
        description: 'Stainless steel water bottle with logo',
        customizationOptions: ['Laser Engraving', 'Color Options', 'Custom Labels'],
        minOrder: 25,
        leadTime: '5-7 days'
    },
    {
        id: 9,
        name: 'Power Bank',
        basePrice: '₦12,000',
        image: powerBank,
        category: 'Tech',
        description: 'High-capacity power bank with branding',
        customizationOptions: ['Logo Printing', 'Color Selection', 'Custom Packaging'],
        minOrder: 20,
        leadTime: '10-14 days'
    },
    {
        id: 10,
        name: 'Engraved Metal Pen',
        basePrice: '₦2,500',
        image: pen,
        category: 'Office',
        description: 'Elegant metal pen with laser engraving',
        customizationOptions: ['Laser Engraving', 'Gift Box', 'Color Options'],
        minOrder: 100,
        leadTime: '5-7 days'
    },
    {
        id: 11,
        name: 'Smoothie Blender',
        basePrice: '₦18,000',
        image: smoothieBlender,
        category: 'Tech',
        description: 'Portable rechargeable smoothie blender',
        customizationOptions: ['Logo Printing', 'Color Options', 'Custom Packaging'],
        minOrder: 10,
        leadTime: '10-14 days'
    },
    {
        id: 12,
        name: 'Branded Lanyard',
        basePrice: '₦800',
        image: lanyard,
        category: 'Accessories',
        description: 'Custom printed lanyard for ID badges',
        customizationOptions: ['Screen Printing', 'Woven Design', 'Color Selection'],
        minOrder: 200,
        leadTime: '5-7 days'
    },
    {
        id: 13,
        name: 'ID Badge',
        basePrice: '₦1,200',
        image: badge,
        category: 'Accessories',
        description: 'Professional ID badge with custom design',
        customizationOptions: ['Full Color Print', 'Magnetic Clip', 'Plastic or Metal'],
        minOrder: 100,
        leadTime: '3-5 days'
    },
    {
        id: 14,
        name: 'Custom Hoodie',
        basePrice: '₦8,500',
        image: hoodie,
        category: 'Apparel',
        description: 'Comfortable hoodie with embroidered logo',
        customizationOptions: ['Embroidery', 'Screen Print', 'Color Selection'],
        minOrder: 20,
        leadTime: '10-14 days'
    },
    {
        id: 15,
        name: 'Polo Shirt',
        basePrice: '₦5,500',
        image: polo,
        category: 'Apparel',
        description: 'Professional polo shirt with embroidery',
        customizationOptions: ['Embroidery', 'Screen Print', 'Multiple Colors'],
        minOrder: 30,
        leadTime: '7-10 days'
    },
    {
        id: 16,
        name: 'Insulated Tumbler',
        basePrice: '₦6,500',
        image: tumbler,
        category: 'Drinkware',
        description: 'Double-wall insulated tumbler with lid',
        customizationOptions: ['Laser Engraving', 'Full Wrap Print', 'Color Options'],
        minOrder: 25,
        leadTime: '7-10 days'
    },
    {
        id: 17,
        name: 'Cork Coaster Set',
        basePrice: '₦2,000',
        image: coaster,
        category: 'Drinkware',
        description: 'Set of 4 cork coasters with custom print',
        customizationOptions: ['UV Print', 'Laser Engraving', 'Custom Shapes'],
        minOrder: 50,
        leadTime: '5-7 days'
    },
    {
        id: 18,
        name: 'Desk Mousepad',
        basePrice: '₦3,500',
        image: mousepad,
        category: 'Office',
        description: 'Large desk mousepad with full-color print',
        customizationOptions: ['Full Color Print', 'Non-slip Base', 'Custom Sizes'],
        minOrder: 50,
        leadTime: '5-7 days'
    },
    {
        id: 19,
        name: 'Phone Stand',
        basePrice: '₦4,000',
        image: phonestand,
        category: 'Tech',
        description: 'Adjustable phone stand with logo',
        customizationOptions: ['Laser Engraving', 'Color Options', 'Material Choice'],
        minOrder: 50,
        leadTime: '7-10 days'
    },
    {
        id: 20,
        name: 'Wireless Charger',
        basePrice: '₦9,000',
        image: wirelessCharger,
        category: 'Tech',
        description: 'Qi wireless charger with custom branding',
        customizationOptions: ['Logo Print', 'UV Print', 'Packaging'],
        minOrder: 20,
        leadTime: '10-14 days'
    },
    {
        id: 21,
        name: 'Bluetooth Earbuds',
        basePrice: '₦15,000',
        image: earbuds,
        category: 'Tech',
        description: 'Wireless earbuds with charging case',
        customizationOptions: ['Logo Engraving', 'Custom Case', 'Packaging'],
        minOrder: 10,
        leadTime: '14-21 days'
    },
    {
        id: 22,
        name: 'Laptop Backpack',
        basePrice: '₦12,000',
        image: backpack,
        category: 'Bags',
        description: 'Durable laptop backpack with logo',
        customizationOptions: ['Embroidery', 'Screen Print', 'Color Options'],
        minOrder: 20,
        leadTime: '10-14 days'
    },
    {
        id: 23,
        name: 'Duffel Bag',
        basePrice: '₦15,000',
        image: duffel,
        category: 'Bags',
        description: 'Spacious duffel bag for sports and travel',
        customizationOptions: ['Embroidery', 'Screen Print', 'Material Choice'],
        minOrder: 15,
        leadTime: '10-14 days'
    },
    {
        id: 24,
        name: 'Drawstring Gym Sack',
        basePrice: '₦3,500',
        image: gymSack,
        category: 'Bags',
        description: 'Lightweight drawstring bag',
        customizationOptions: ['Screen Print', 'Heat Transfer', 'Color Options'],
        minOrder: 100,
        leadTime: '5-7 days'
    },
    {
        id: 25,
        name: 'Yearly Planner',
        basePrice: '₦5,500',
        image: planner,
        category: 'Office',
        description: 'Professional yearly planner with custom cover',
        customizationOptions: ['Cover Print', 'Foil Stamping', 'Custom Layout'],
        minOrder: 30,
        leadTime: '10-14 days'
    },
    {
        id: 26,
        name: 'Sticky Notes Set',
        basePrice: '₦1,800',
        image: stickyNotes,
        category: 'Office',
        description: 'Custom sticky notes in various sizes',
        customizationOptions: ['Header Print', 'Full Color', 'Custom Shapes'],
        minOrder: 100,
        leadTime: '5-7 days'
    },
    {
        id: 27,
        name: 'Desk Organizer',
        basePrice: '₦6,000',
        image: deskOrganizer,
        category: 'Office',
        description: 'Multi-compartment desk organizer',
        customizationOptions: ['Laser Engraving', 'UV Print', 'Material Options'],
        minOrder: 25,
        leadTime: '7-10 days'
    },
    {
        id: 28,
        name: 'Leather Wallet',
        basePrice: '₦7,500',
        image: wallet,
        category: 'Accessories',
        description: 'Premium leather wallet with embossing',
        customizationOptions: ['Embossing', 'Foil Stamping', 'Color Options'],
        minOrder: 20,
        leadTime: '10-14 days'
    },
    {
        id: 29,
        name: 'Branded Umbrella',
        basePrice: '₦8,500',
        image: umbrella,
        category: 'Accessories',
        description: 'Automatic umbrella with logo print',
        customizationOptions: ['Panel Print', 'Handle Print', 'Color Options'],
        minOrder: 25,
        leadTime: '10-14 days'
    },
    {
        id: 30,
        name: 'Sunglasses',
        basePrice: '₦4,500',
        image: sunglasses,
        category: 'Accessories',
        description: 'Stylish sunglasses with logo on arms',
        customizationOptions: ['Arm Print', 'Lens Tint', 'Case Branding'],
        minOrder: 50,
        leadTime: '7-10 days'
    },
    {
        id: 31,
        name: 'Smart Watch',
        basePrice: '₦25,000',
        image: watch,
        category: 'Tech',
        description: 'Fitness smart watch with custom packaging',
        customizationOptions: ['Watch Face', 'Strap Color', 'Packaging'],
        minOrder: 10,
        leadTime: '14-21 days'
    },
];
