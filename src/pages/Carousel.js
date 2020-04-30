import React from 'react'
import Slider from "react-slick";

const Carousel = ({ title, images }) => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="FilmGallery">
      <Slider {...settings}>
        {images.map((img, i) => <img key={i} alt={title} src={img.full.url} />)}
      </Slider>
    </div>
  )

}

export default Carousel
