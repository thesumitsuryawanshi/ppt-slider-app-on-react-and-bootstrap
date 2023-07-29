import React from 'react';
import '../CSS files/ImageCarousel.css';
import  { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';


// You can store your carousel images in an array
const data = [
    {
        image: require('../images/img1.jpg'),
        caption: "Caption",
        description: "Description Here"
    },
    {
        image: require('../images/img2.jpg'),
        caption: "Caption",
        description: "Description Here"
    },
    {
        image: require('../images/img3.jpg'),
        caption: "Caption",
        description: "Description Here"
    }
];

const ImageCarousel = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='container p-4 '>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {data.map((slide, i) => {
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slide.image}
                                alt="slider image"
                            />
                            <Carousel.Caption>
                                <h3>{slide.caption}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}

            </Carousel>
        </div>
    );
};

export default ImageCarousel;