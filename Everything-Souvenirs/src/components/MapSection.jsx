import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { center } from "../libs/data.js";

const mapContainerStyle = {
     height: "400px",
     width: "100%",
     borderRadius: "1rem",
};

const markerIcon = new Icon({
     iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
     iconSize: [25, 41],
     iconAnchor: [12, 41],
});

const MapSection = () => {
     return (
         <section className="py-20 px-6 bg-white">
              <div className="max-w-6xl mx-auto">
                   <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Find Our Office</h2>
                        <p className="text-xl text-slate-600">
                             Located in the heart of Lagos business district, easily accessible by public transport
                        </p>
                   </div>

                   <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Leaflet Map */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                             <MapContainer
                                 center={center}
                                 zoom={15}
                                 scrollWheelZoom={false}
                                 style={mapContainerStyle}
                             >
                                  <TileLayer
                                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                  />
                                  <Marker position={center} icon={markerIcon}>
                                       <Popup>
                                            <div className="text-sm">
                                                 <h3 className="font-bold text-lg mb-2">Everything Souvenirs</h3>
                                                 <p className="text-gray-600 mb-1">123 Business District</p>
                                                 <p className="text-gray-600 mb-2">Victoria Island, Lagos, Nigeria</p>
                                                 <p className="text-blue-600">📞 +234 (0) 123 456 7890</p>
                                                 <p className="text-blue-600">📧 hello@company.com</p>
                                            </div>
                                       </Popup>
                                  </Marker>
                             </MapContainer>
                        </div>

                        {/* Location Details */}
                        <div>
                             <h3 className="text-3xl font-bold text-slate-900 mb-6">Location Details</h3>
                             <div className="space-y-6">
                                  <div className="flex items-start">
                                       <div className="text-2xl mr-4 mt-1">📍</div>
                                       <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                                            <p className="text-slate-600">
                                                 123 Business District<br />
                                                 Victoria Island, Lagos<br />
                                                 Nigeria
                                            </p>
                                       </div>
                                  </div>

                                  <div className="flex items-start">
                                       <div className="text-2xl mr-4 mt-1">🚗</div>
                                       <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Parking</h4>
                                            <p className="text-slate-600">
                                                 Free parking available in our building garage. Visitor parking on levels 1-2.
                                            </p>
                                       </div>
                                  </div>

                                  <div className="flex items-start">
                                       <div className="text-2xl mr-4 mt-1">🚌</div>
                                       <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Public Transport</h4>
                                            <p className="text-slate-600">
                                                 5-minute walk from Tafawa Balewa Square BRT station. Multiple bus routes available.
                                            </p>
                                       </div>
                                  </div>

                                  <div className="flex items-start">
                                       <div className="text-2xl mr-4 mt-1">🏢</div>
                                       <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Building Info</h4>
                                            <p className="text-slate-600">
                                                 Located on the 5th floor of the Business Plaza. Reception will direct you to our office.
                                            </p>
                                       </div>
                                  </div>

                                  <div className="flex items-start">
                                       <div className="text-2xl mr-4 mt-1">🕒</div>
                                       <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                                            <p className="text-slate-600">
                                                 Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                 Saturday - Sunday: Closed
                                            </p>
                                       </div>
                                  </div>

                                  <div className="bg-gradient-to-r from-indigo-600 to-indigo-600 text-white p-6 rounded-xl">
                                       <h4 className="font-bold mb-2">📱 Get Directions</h4>
                                       <p className="text-indigo-100 text-sm mb-4">
                                            Click the marker on the map for more details or use your preferred navigation app.
                                       </p>
                                       <div className="flex space-x-3">
                                            <a
                                                href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-colors"
                                            >
                                                 Google Maps
                                            </a>
                                            <a
                                                href={`https://waze.com/ul?ll=${center.lat},${center.lng}&navigate=yes`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-colors"
                                            >
                                                 Waze
                                            </a>
                                       </div>
                                  </div>
                             </div>
                        </div>
                   </div>
              </div>
         </section>
     );
};

export default MapSection;
