import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import firstSlide from '../img/firstSlide.png';
import secondSlide from '../img/secondSlide.jpg';

class CarouselSlides extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width:'900px', height:'200px', marginLeft:'16%'}}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={firstSlide}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Famous Algorithms</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={secondSlide}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Important Data Structures</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselSlides;