import  { useState } from 'react';

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
        <div>
          <button onClick={prevImage}>⬅️</button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <button onClick={nextImage}>➡️</button>
        </div>
      );
    }


export default Home