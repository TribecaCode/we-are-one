import React from 'react'
import { Link } from "@reach/router"

const Event = ({ item }) => {
  let img_src = item.marquee.medium.url
  if (img_src === "/images/graphic-no-image.jpg") {
    img_src = "//tribecafilm.com/images/graphic-no-image.jpg"
  }

  return (
    <React.Fragment>
      <div className="visible-xs">
        <div className="Card Card--film">
          <Link to={`/events/${item.slug}`}>
            <div className="Card_img Card_img--ruby" style={{backgroundImage: `url(${img_src})`}}></div>
          </Link>
          <div className="Card_text-container">
            <div className="Card_subtitle"></div>
            <Link className="Card_title" to={`/events/${item.slug}`} title="Pretty People" item={item}>{item.display_title}</Link>
          </div>
        </div>
      </div>

      <div className="hidden-xs col-sm-12">
        <div className="Film">
          <Link className="Film_img-container Film_img-container--ruby" style={{backgroundImage: `url(${img_src})`}} to={`/events/${item.slug}`} item={item}/>
          <div className="Film_content">
            <div>
              <div className="pull-right">
                <div className="Film_runtime pull-right">{item.run_time} min</div>
              </div>
              <div className="Film_genre">{item.type_of_event}</div>
              <h4 className="heading-4">
                <Link className="Film_title" to={`/events/${item.slug}`}>{item.display_title}</Link>
                <div className="Card_subtitle">date {item.date}</div>
                <div className="Card_subtitle">time {item.time}</div>
              </h4>
              <div className="Film_summary">{item.short_summary}</div>
            </div>
            <Link className="Film_more" to={`/events/${item.slug}`}>View Details</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Event
