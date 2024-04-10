import { useEffect, useRef, useState } from 'react';

interface ImageData {
  imgUrl: string;
}

interface SliderProps {
  images: ImageData[];
}

export const Carrucel: React.FC<SliderProps> = ({ images }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll<HTMLLIElement>("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === images.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  return (
      <div className="slider-container">
        <div className='leftArrow arrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow arrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className="container-images">
          <ul ref={listRef}>
            {images.map((item, index) => (
              <li key={index}>
                <img className='imagesList' src={item.imgUrl} alt={`Slide ${index}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};