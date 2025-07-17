export const products = [
     { id: 1, name: 'Branded Ceramic Mug', price: '$12.99', image: 'https://via.placeholder.com/300x200?text=Mug', description: 'Durable ceramic mug with custom logo printing.' },
     { id: 2, name: 'Custom Leather Notebook', price: '$15.99', image: 'https://via.placeholder.com/300x200?text=Notebook', description: 'Premium notebook with embossed branding.' },
     { id: 3, name: 'Engraved Metal Pen', price: '$8.99', image: 'https://via.placeholder.com/300x200?text=Pen', description: 'Elegant pen with laser-engraved logo.' },
     { id: 4, name: 'Branded USB Flash Drive', price: '$19.99', image: 'https://via.placeholder.com/300x200?text=USB', description: 'High-speed USB with custom design.' },
     { id: 5, name: 'Eco-Friendly Water Bottle', price: '$24.99', image: 'https://via.placeholder.com/300x200?text=Water+Bottle', description: 'Stainless steel bottle with logo engraving.' },
     { id: 6, name: 'Custom Tote Bag', price: '$14.99', image: 'https://via.placeholder.com/300x200?text=Tote+Bag', description: 'Reusable tote with vibrant full-color print.' },
     { id: 7, name: 'Branded Keychain', price: '$6.99', image: 'https://via.placeholder.com/300x200?text=Keychain', description: 'Compact keychain with custom emblem.' },
     { id: 8, name: 'Personalized Desk Organizer', price: '$29.99', image: 'https://via.placeholder.com/300x200?text=Desk+Organizer', description: 'Sleek organizer with branded accents.' },
];

export const testimonials = [
     { id: 1, name: 'Jane Doe', company: 'TechCorp', text: 'The custom gift sets were a hit at our annual conference. Professional and timely!', date: 'Jul 10, 2025', rating: 5 },
     { id: 2, name: 'John Smith', company: 'GrowEasy', text: 'High-quality branding on our pens and notebooks. Our clients loved them!', date: 'Jul 12, 2025', rating: 4 },
     { id: 3, name: 'Emily Brown', company: 'EventPlanners', text: 'Perfect giveaways for our product launch. The branded mugs were a crowd favorite!', date: 'Jul 14, 2025', rating: 5 },
     { id: 4, name: 'Michael Lee', company: 'StartupHub', text: 'The USB drives with our logo were a great touch for our investors.', date: 'Jul 13, 2025', rating: 4 },
     { id: 5, name: 'Sarah Wilson', company: 'WeddingsRUs', text: 'Custom tote bags made our wedding favors unforgettable. Highly recommend!', date: 'Jul 11, 2025', rating: 5 },
     { id: 6, name: 'David Kim', company: 'MarketPros', text: 'Fast delivery and excellent quality on our branded keychains.', date: 'Jul 9, 2025', rating: 4 },
];
export const productData = {
     1: {
          id: 1,
          name: "Premium Branded T-Shirt",
          price: 7500,
          originalPrice: 9000,
          currency: "₦",
          category: "Apparel",
          rating: 4.8,
          reviewCount: 124,
          availability: "In Stock",
          images: [
               "https://via.placeholder.com/600x600?text=T-Shirt+Front",
               "https://via.placeholder.com/600x600?text=T-Shirt+Back",
               "https://via.placeholder.com/600x600?text=T-Shirt+Side",
               "https://via.placeholder.com/600x600?text=T-Shirt+Detail"
          ],
          description: "Premium quality cotton t-shirt perfect for corporate branding and promotional events. Made from 100% organic cotton with superior comfort and durability. Ideal for team uniforms, event giveaways, and brand merchandise.",
          features: [
               "100% organic cotton material",
               "Pre-shrunk for consistent fit",
               "Reinforced collar and seams",
               "Available in multiple colors",
               "Professional screen printing",
               "Machine washable"
          ],
          specifications: {
               "Material": "100% Organic Cotton",
               "Weight": "180 GSM",
               "Fit": "Regular Fit",
               "Care": "Machine wash cold",
               "Origin": "Made in Nigeria",
               "Sizes": "XS, S, M, L, XL, XXL"
          },
          colors: ["Black", "White", "Navy", "Gray", "Red"],
          sizes: ["XS", "S", "M", "L", "XL", "XXL"],
          brandingOptions: ["Screen Print", "Embroidery", "Heat Transfer"]
     }
};

export const relatedProducts = [
     {
          id: 2,
          name: "Custom Mug",
          price: "₦3,000",
          image: "https://via.placeholder.com/300x200?text=Mug",
          rating: 4.6
     },
     {
          id: 4,
          name: "Custom Cap",
          price: "₦5,000",
          image: "https://via.placeholder.com/300x200?text=Cap",
          rating: 4.7
     },
     {
          id: 5,
          name: "Branded Notebook",
          price: "₦4,000",
          image: "https://via.placeholder.com/300x200?text=Notebook",
          rating: 4.5
     },
     {
          id: 7,
          name: "Tote Bag",
          price: "₦8,000",
          image: "https://via.placeholder.com/300x200?text=Tote+Bag",
          rating: 4.8
     }
];

export const reviews = [
     {
          id: 1,
          name: "Adebayo Johnson",
          rating: 5,
          date: "2 weeks ago",
          text: "Excellent quality t-shirts! We ordered 50 pieces for our company event and everyone loved them. The printing quality is outstanding.",
          verified: true
     },
     {
          id: 2,
          name: "Fatima Ahmed",
          rating: 4,
          date: "1 month ago",
          text: "Great material and comfortable fit. The branding came out perfectly. Will definitely order again for our next campaign.",
          verified: true
     },
     {
          id: 3,
          name: "Chidi Okafor",
          rating: 5,
          date: "3 weeks ago",
          text: "Fast delivery and professional service. The t-shirts exceeded our expectations. Highly recommended for corporate branding.",
          verified: true
     }
];
export const contactMethods = [
     {
          id: 1,
          icon: "📧",
          title: "Email Us",
          primary: "hello@company.com",
          secondary: "support@company.com",
          description: "Send us an email anytime. We typically respond within 24 hours."
     },
     {
          id: 2,
          icon: "📞",
          title: "Call Us",
          primary: "+234 (0) 123 456 7890",
          secondary: "+234 (0) 987 654 3210",
          description: "Speak directly with our team during business hours."
     },
     {
          id: 3,
          icon: "📍",
          title: "Visit Us",
          primary: "123 Business District",
          secondary: "Lagos, Nigeria",
          description: "Come visit our office for in-person consultations."
     },
     {
          id: 4,
          icon: "💬",
          title: "Live Chat",
          primary: "Available 9 AM - 6 PM",
          secondary: "Monday to Friday",
          description: "Get instant answers through our live chat support."
     }
];

export const socialMedia = [
     { name: "Facebook", icon: "📘", url: "#", followers: "2.5K" },
     { name: "Instagram", icon: "📷", url: "#", followers: "1.8K" },
     { name: "LinkedIn", icon: "💼", url: "#", followers: "3.2K" },
     { name: "Twitter", icon: "🐦", url: "#", followers: "1.5K" }
];

export const faqs = [
     {
          id: 1,
          question: "How quickly do you respond to inquiries?",
          answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
     },
     {
          id: 2,
          question: "What information should I include in my inquiry?",
          answer: "Please include details about your project, timeline, budget range, and any specific requirements. The more information you provide, the better we can assist you."
     },
     {
          id: 3,
          question: "Do you offer free consultations?",
          answer: "Yes, we offer free initial consultations to discuss your project needs and provide recommendations. Contact us to schedule your consultation."
     },
     {
          id: 4,
          question: "What are your business hours?",
          answer: "We're open Monday to Friday, 9:00 AM to 6:00 PM (WAT). We're closed on weekends and public holidays."
     },
     {
          id: 5,
          question: "Can I visit your office?",
          answer: "Absolutely! We welcome office visits. Please schedule an appointment in advance to ensure someone is available to meet with you."
     },
     {
          id: 6,
          question: "Do you work with international clients?",
          answer: "Yes, we work with clients across West Africa and internationally. We can arrange shipping and handle international projects."
     }
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

// Map configuration
export const mapContainerStyle = {
     width: '100%',
     height: '400px',
     borderRadius: '16px'
};

// Business location coordinates (Lagos, Nigeria - Victoria Island area)
export const center = {
     lat: 6.4281,
     lng: 3.4219
};

export const mapOptions = {
     zoom: 15,
     disableDefaultUI: false,
     zoomControl: true,
     streetViewControl: true,
     mapTypeControl: true,
     fullscreenControl: true,
     styles: [
          {
               featureType: "poi",
               elementType: "labels",
               stylers: [{ visibility: "off" }]
          }
     ]
};
