import React from "react"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from '../styles/Home.module.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/photos/p1.jpg" onDragStart={handleDragStart} />,
  <img src="/photos/p2.jpg" onDragStart={handleDragStart} />,
  <img src="/photos/p3.jpg" onDragStart={handleDragStart} />,
  <img src="/photos/p4.jpg" onDragStart={handleDragStart} />,
  <img src="/photos/p5.jpg" onDragStart={handleDragStart} />,
  <img src="/photos/p6.jpg" onDragStart={handleDragStart} />,
  <img src="/photos/p7.jpg" onDragStart={handleDragStart} />,
  <img src="/photos/p8.jpg" onDragStart={handleDragStart} />,
  <img src="/photos/p9.jpg" onDragStart={handleDragStart} />,
  
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