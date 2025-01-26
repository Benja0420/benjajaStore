import { useState } from 'react';

const images = [
  'https://placehold.co/300x200?text=Hola\nMundo1',
  'https://placehold.co/300x200?text=Hola\nMundo2',
  'https://placehold.co/300x200?text=Hola\nMundo3'
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <div className="flex items-center space-x-4">
        <button
          onClick={prevImage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          ⬅️
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-80 h-52 object-cover rounded shadow-lg"
        />
        <button
          onClick={nextImage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          ➡️
        </button>
      </div>
    </div>
  );
}

export default Home;