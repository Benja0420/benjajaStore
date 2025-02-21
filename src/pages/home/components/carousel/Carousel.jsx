import { useState } from 'react';

const images = [
    'https://placehold.co/1700x200?text=Hola\nMundo1',
    'https://placehold.co/1700x200?text=Hola\nMundo2',
    'https://placehold.co/1700x200?text=Hola\nMundo3'
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="flex items-center space-x-4 relative pt-4">
            <button
                onClick={prevImage}
                className="absolute left-10 text-2xl"
            >
                ⬅️
            </button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-52 object-cover rounded shadow-lg"
            />
            <button
                onClick={nextImage}
                className="absolute right-10 text-2xl"
            >
                ➡️
            </button>
        </div>
    );
}
export default Carousel;