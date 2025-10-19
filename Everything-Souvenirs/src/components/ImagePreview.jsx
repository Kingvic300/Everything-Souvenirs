import React, { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, Download } from "lucide-react";

const ImagePreview = ({ selectedImage, onClose, altText = "Image preview" }) => {
    const [scale, setScale] = useState(1);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        document.body.style.overflow = selectedImage ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedImage]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "+") setScale(prev => Math.min(prev + 0.2, 3));
            if (e.key === "-") setScale(prev => Math.max(prev - 0.2, 0.5));
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    useEffect(() => {
        setScale(1);
        setLoaded(false);
    }, [selectedImage]);

    const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 3));
    const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = selectedImage;
        link.download = 'product-image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!selectedImage) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300 p-4"
            onClick={onClose}
            style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
            <div
                className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'scaleIn 0.3s ease-out' }}
            >
                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-800">Product Image</h3>

                    <div className="flex gap-2">
                        <button
                            onClick={handleZoomOut}
                            className="p-2 hover:bg-slate-200 text-slate-700 rounded-lg transition-all duration-200"
                            aria-label="Zoom out"
                            title="Zoom out"
                        >
                            <ZoomOut className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleZoomIn}
                            className="p-2 hover:bg-slate-200 text-slate-700 rounded-lg transition-all duration-200"
                            aria-label="Zoom in"
                            title="Zoom in"
                        >
                            <ZoomIn className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleDownload}
                            className="p-2 hover:bg-slate-200 text-slate-700 rounded-lg transition-all duration-200"
                            aria-label="Download image"
                            title="Download image"
                        >
                            <Download className="w-5 h-5" />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-red-100 hover:text-red-600 text-slate-700 rounded-lg transition-all duration-200"
                            aria-label="Close image preview"
                            title="Close (Esc)"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative bg-slate-50 flex items-center justify-center p-8" style={{ minHeight: '400px', maxHeight: '70vh' }}>
                    {!loaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-slate-300 border-t-slate-700 rounded-full animate-spin"></div>
                        </div>
                    )}

                    <img
                        src={selectedImage}
                        alt={altText}
                        onLoad={() => setLoaded(true)}
                        style={{
                            transform: `scale(${scale})`,
                            maxWidth: '100%',
                            maxHeight: '60vh',
                            opacity: loaded ? 1 : 0,
                            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
                        }}
                        className="object-contain rounded-lg cursor-zoom-in"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleZoomIn();
                        }}
                    />
                </div>

                <div className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-slate-50 to-slate-100 border-t border-slate-200">
                    <div className="bg-slate-200 px-4 py-1.5 rounded-full text-slate-700 text-sm font-medium">
                        Zoom: {Math.round(scale * 100)}%
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes scaleIn {
                    from {
                        transform: scale(0.95);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default ImagePreview;