import React from 'react'
import Slider from "react-slick";

const Carousel = ({ item }) => {
  const { title, images, video } = item

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="FilmGallery">
      <Slider {...settings}>
        {!!video &&
          <div id='BCLcontainingBlock'>
            <div className='BCLvideoWrapper'>
              <div dangerouslySetInnerHTML={{__html: video}} />}
            </div>
          </div>
        }
        {!!images.length && images.map((img, i) => <img key={i} alt={title} src={img.full.url} />)}
      </Slider>
    </div>
  )

}

export default Carousel
