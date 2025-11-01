import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import Button from '../components/common/Button';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGeneratorPage: React.FC = () => {
    const [prompt, setPrompt] = useState('A high-quality, realistic product image of a souvenir mug with traditional Nigerian patterns, on a clean, white background with soft lilac lighting. Styled for e-commerce.');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateImage = async () => {
        if (!prompt) {
            setError('Please enter a prompt.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            const response = await ai.models.generateImages({
                model: 'imagen-4.0-generate-001',
                prompt: prompt,
                config: {
                  numberOfImages: 1,
                  outputMimeType: 'image/jpeg',
                  aspectRatio: '1:1',
                },
            });

            if (response.generatedImages && response.generatedImages.length > 0) {
                const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
                const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
                setGeneratedImage(imageUrl);
            } else {
                setError('Image generation failed. No image was returned from the API.');
            }
        } catch (e) {
            console.error(e);
            const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
            setError(`An error occurred during image generation: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-serif font-bold text-center mb-4">Product Image Generator</h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
                    Generate high-quality, realistic product images for your souvenirs. Describe the item, background, and lighting to get the perfect shot for your e-commerce store.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
                <div className="space-y-4">
                    <div>
                        <label htmlFor="prompt" className="block text-lg font-medium mb-2">Image Description Prompt</label>
                        <textarea
                            id="prompt"
                            rows={4}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., A hand-painted mug with Nigerian Adire-inspired designs..."
                            className="input-field w-full"
                        />
                    </div>
                    <Button onClick={handleGenerateImage} isLoading={isLoading} disabled={isLoading} className="w-full text-lg py-4">
                        {isLoading ? 'Generating...' : 'Generate Image'}
                    </Button>
                </div>

                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

                <div className="mt-8 min-h-[512px] flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <AnimatePresence>
                        {generatedImage && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="p-4"
                            >
                                <h2 className="text-2xl font-serif font-semibold text-center mb-4">Generated Image</h2>
                                <img src={generatedImage} alt="Generated souvenir" className="mx-auto rounded-lg shadow-md max-w-full h-auto" style={{ maxWidth: '512px' }} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                     {!isLoading && !generatedImage && (
                        <div className="text-center text-gray-500">
                            <p>Your generated image will appear here.</p>
                        </div>
                     )}
                </div>
            </motion.div>
        </div>
    );
};

// Add a helper class to your CSS or a style tag if you don't have one
const style = document.createElement('style');
style.innerHTML = `
  .input-field {
    width: 100%;
    padding: 0.75rem 1rem;
    border-width: 1px;
    border-color: #D1D5DB; /* gray-300 */
    border-radius: 0.375rem; /* rounded-md */
    background-color: #F9FAFB; /* gray-50 */
    color: #111827; /* gray-900 */
  }
  .dark .input-field {
    border-color: #4B5563; /* dark:border-gray-600 */
    background-color: #374151; /* dark:bg-gray-700 */
    color: #F9FAFB; /* dark:text-gray-50 */
  }
  .input-field:focus {
    outline: none;
    --tw-ring-color: #C8A2C8; /* ring-primary */
    box-shadow: 0 0 0 2px var(--tw-ring-color);
    border-color: #C8A2C8;
  }
`;
document.head.appendChild(style);

export default ImageGeneratorPage;
