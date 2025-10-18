import React, { useEffect } from "react";
import { X, Maximize2 } from "lucide-react";

const ImagePreview = ({ selectedImage, onClose, altText = "Image preview" }) => {
    useEffect(() => {
        document.body.style.overflow = selectedImage ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedImage]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!selectedImage) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="relative flex items-center justify-center w-full max-w-5xl px-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white hover:text-indigo-300 transition-colors z-10"
                    aria-label="Close image preview"
                >
                    <X className="w-8 h-8" />
                </button>

                <img
                    src={selectedImage}
                    alt={altText}
                    className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-slate-700 transition-transform duration-300"
                />
            </div>
        </div>
    );
};

export default ImagePreview;