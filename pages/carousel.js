import React from "react"
import { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/reviews/r1.jpg" onDragStart={handleDragStart} />,
  <img src="/reviews/r2.jpg" onDragStart={handleDragStart} />,
  <img src="/reviews/r3.jpg" onDragStart={handleDragStart} />,
  <img src="/reviews/r4.jpg" onDragStart={handleDragStart} />,
  <img src="/reviews/r5.jpg" onDragStart={handleDragStart} />,
  <img src="/reviews/r6.jpg" onDragStart={handleDragStart} />,
];

const Gallery = () => {
  // const [isShowingEnlarged, setIsShowingEnlarged] = useState(false)
  
  return (
    <div>


      <AliceCarousel
        mouseTracking
        autoPlay={true}
        infinite={true}
        autoPlayInterval={3000}
        items={items} 
        disableButtonsControls={true}
        />
    </div>
  );
}
 export default Gallery



// const AliceCarousel = (props) => {
//   if props.autoPlay == true {
//     eveyr 5 seconds new image
//   }
//   return (
//         <img />
//   );
// }
//  export default Gallery