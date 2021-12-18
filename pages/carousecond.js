import React from "react"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/photos/p1.jpeg" onDragStart={handleDragStart} />,
  <img src="/photos/p2.jpeg" onDragStart={handleDragStart} />,
  <img src="/photos/p3.jpeg" onDragStart={handleDragStart} />,
  <img src="/photos/p4.jpeg" onDragStart={handleDragStart} />,
  <img src="/photos/p5.jpeg" onDragStart={handleDragStart} />,
  <img src="/photos/p6.jpeg" onDragStart={handleDragStart} />,
  <img src="/photos/p7.jpeg" onDragStart={handleDragStart} />,
  <img src="/photos/p8.jpeg" onDragStart={handleDragStart} />,
  <img src="/photos/p9.jpeg" onDragStart={handleDragStart} />,
];

const Galleryy = () => {
  return (
        <AliceCarousel
          mouseTracking
          autoPlay={true}
          infinite={true}
          autoPlayInterval={3000}
          items={items} 
          disableButtonsControls={true}
          disableDotsControls={true}
          />
  );
}
 export default Galleryy