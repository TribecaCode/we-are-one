import React from 'react'
import { Link } from "@reach/router"

const Event = ({ item }) => {
  return (
    <React.Fragment>
      <div className="visible-xs">
        <div className="Card Card--film">
          <Link to={`/events/${item.slug}`}>
            <div className="Card_img Card_img--ruby" style={{backgroundImage: "url(/images/graphic-no-image.jpg)"}}></div>
          </Link>
          <div className="Card_text-container">
            <div className="Card_subtitle"></div>
            <Link className="Card_title" to={`/events/${item.slug}`} title="Pretty People">{item.display_title}</Link>
          </div>
        </div>
      </div>

      <div className="hidden-xs col-sm-12">
        <div className="Film">
          <Link className="Film_img-container Film_img-container--ruby" style={{backgroundImage: "url(/images/graphic-no-image.jpg)"}} to={`/events/${item.slug}`}></Link>
          <div className="Film_content">
            <div>
              <div className="pull-right">
                <div className="Film_runtime pull-right">{item.run_time} min</div>
              </div>
              <div className="Film_genre">{item.type_of_event}</div>
              <h4 className="heading-4">
                <Link className="Film_title" to={`/events/${item.slug}`}>{item.display_title}</Link>
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
