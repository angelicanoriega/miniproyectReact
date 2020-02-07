import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgA from '../img/1.jpg';
import imgB from '../img/2.jpg';
import imgC from '../img/3.png';

class banner extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay swipeable={false} showThumbs={false} showStatus={false} showIndicators={false}>
                <img src={imgA} alt="img" />
                <img src={imgB} alt="img" />
                <img src={imgC} alt="img" />
            </Carousel>
        );
    }
  }
   
export default banner;
