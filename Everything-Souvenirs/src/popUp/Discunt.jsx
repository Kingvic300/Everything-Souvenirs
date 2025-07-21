import React, { useEffect, useState } from 'react';

const Discount = () => {
     const [show, setShow] = useState(false);

     useEffect(() => {
          const now = new Date().getTime();
          const lastShown = localStorage.getItem('promoLastShown');

          // Show popup if it's been over 1 hour or never shown
          if (!lastShown || now - parseInt(lastShown) > 3600000) {
               setShow(true);
               localStorage.setItem('promoLastShown', now.toString());

               // Auto-hide after 20 seconds
               const hideTimer = setTimeout(() => setShow(false), 20000);
               return () => clearTimeout(hideTimer);
          }
     }, []);

     if (!show) return null;

     return (
         <div className="fixed bottom-4 left-4 right-4 z-50">
              <div className="max-w-4xl mx-auto animate-bounce-slow">
                   <div className="grid md:grid-cols-3 gap-2 text-center text-sm font-medium">
                        <div className="bg-emerald-50 text-amber-700 py-2 px-3 border-l-2 border-emerald-300 rounded">
                             💰 20% off $100+ — <span className="font-semibold">Use: BRAND20</span>
                        </div>
                        <div className="bg-blue-50 text-blue-700 py-2 px-3 border-l-2 border-blue-300 rounded">
                             🚚 Free Shipping over $50!
                        </div>
                        <div className="bg-emerald-50 text-emerald-700 py-2 px-3 border-l-2 border-emerald-300 rounded">
                             🎁 15% Off Gift Sets — <span className="font-semibold">Use: GIFT15</span>
                        </div>
                   </div>
              </div>
         </div>
     );
};

export default Discount;
