import React, {useCallback, useState} from "react";
import {GoogleMap, InfoWindow, LoadScript, Marker} from "@react-google-maps/api";
import {center, mapContainerStyle, mapOptions} from "../libs/data.js";

const MapSection = () => {
     const [map, setMap] = useState(null);
     const [showInfoWindow, setShowInfoWindow] = useState(false);




     const onLoad = useCallback(function callback(map) {
          setMap(map);
     }, []);

     const onUnmount = useCallback(function callback(map) {
          setMap(null);
     }, []);

     const handleMarkerClick = () => {
          setShowInfoWindow(!showInfoWindow);
     };
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
                        {/* Interactive Google Map */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                             <LoadScript googleMapsApiKey="AIzaSyCsIxQ-fyrN_cOw46dFVWGMBKfI93LoVi8">
                                  <GoogleMap
                                      mapContainerStyle={mapContainerStyle}
                                      center={center}
                                      zoom={mapOptions.zoom}
                                      onLoad={onLoad}
                                      onUnmount={onUnmount}
                                      options={mapOptions}
                                  >
                                       <Marker
                                           position={center}
                                           onClick={handleMarkerClick}
                                           title="Everything Souvenirs Office"
                                       />

                                       {showInfoWindow && (
                                           <InfoWindow
                                               position={center}
                                               onCloseClick={() => setShowInfoWindow(false)}
                                           >
                                                <div className="p-2">
                                                     <h3 className="font-bold text-lg mb-2">Everything Souvenirs</h3>
                                                     <p className="text-sm text-gray-600 mb-1">123 Business District</p>
                                                     <p className="text-sm text-gray-600 mb-2">Victoria Island, Lagos,
                                                          Nigeria</p>
                                                     <p className="text-sm text-blue-600">📞 +234 (0) 123 456 7890</p>
                                                     <p className="text-sm text-blue-600">📧 hello@company.com</p>
                                                </div>
                                           </InfoWindow>
                                       )}
                                  </GoogleMap>
                             </LoadScript>
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
                                                 123 Business District<br/>
                                                 Victoria Island, Lagos<br/>
                                                 Nigeria
                                            </p>
                                       </div>
                                  </div>

                                  <div className="flex items-start">
                                       <div className="text-2xl mr-4 mt-1">🚗</div>
                                       <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Parking</h4>
                                            <p className="text-slate-600">
                                                 Free parking available in our building garage. Visitor parking on
                                                 levels 1-2.
                                            </p>
                                       </div>
                                  </div>

                                  <div className="flex items-start">
                                       <div className="text-2xl mr-4 mt-1">🚌</div>
                                       <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Public Transport</h4>
                                            <p className="text-slate-600">
                                                 5-minute walk from Tafawa Balewa Square BRT station. Multiple bus
                                                 routes available.
                                            </p>
                                       </div>
                                  </div>

                                  <div className="flex items-start">
                                       <div className="text-2xl mr-4 mt-1">🏢</div>
                                       <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Building Info</h4>
                                            <p className="text-slate-600">
                                                 Located on the 5th floor of the Business Plaza. Reception will direct
                                                 you to our office.
                                            </p>
                                       </div>
                                  </div>

                                  <div className="flex items-start">
                                       <div className="text-2xl mr-4 mt-1">🕒</div>
                                       <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                                            <p className="text-slate-600">
                                                 Monday - Friday: 9:00 AM - 6:00 PM<br/>
                                                 Saturday - Sunday: Closed
                                            </p>
                                       </div>
                                  </div>

                                  <div
                                      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl">
                                       <h4 className="font-bold mb-2">📱 Get Directions</h4>
                                       <p className="text-purple-100 text-sm mb-4">
                                            Click the marker on the map for more details or use your preferred
                                            navigation app.
                                       </p>
                                       <div className="flex space-x-3">
                                            <a
                                                href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors"
                                            >
                                                 Google Maps
                                            </a>
                                            <a
                                                href={`https://waze.com/ul?ll=${center.lat},${center.lng}&navigate=yes`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors"
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
     )
}

export default MapSection;