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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300"
            onClick={onClose}
            style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
            <div
                className="absolute top-4 right-4 flex gap-2 z-20"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleZoomOut}
                    className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Zoom out"
                    title="Zoom out"
                >
                    <ZoomOut className="w-5 h-5" />
                </button>
                <button
                    onClick={handleZoomIn}
                    className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Zoom in"
                    title="Zoom in"
                >
                    <ZoomIn className="w-5 h-5" />
                </button>
                <button
                    onClick={handleDownload}
                    className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Download image"
                    title="Download image"
                >
                    <Download className="w-5 h-5" />
                </button>
                <button
                    onClick={onClose}
                    className="p-3 bg-white/10 hover:bg-red-500/80 backdrop-blur-sm text-white rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Close image preview"
                    title="Close (Esc)"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            <div
                className="relative flex items-center justify-center w-full h-full p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                    </div>
                )}

                <img
                    src={selectedImage}
                    alt={altText}
                    onLoad={() => setLoaded(true)}
                    style={{
                        transform: `scale(${scale})`,
                        maxWidth: '90vw',
                        maxHeight: '85vh',
                        opacity: loaded ? 1 : 0,
                        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
                    }}
                    className="object-contain rounded-lg shadow-2xl cursor-zoom-in"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleZoomIn();
                    }}
                />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                {Math.round(scale * 100)}%
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
            `}</style>
        </div>
    );
};

export default ImagePreview;