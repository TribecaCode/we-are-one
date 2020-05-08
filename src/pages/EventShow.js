import React from 'react'
import { Link } from '@reach/router'
import Panelist from './Panelist'
import Carousel from './Carousel'
import youtube from '../images/youtube.png'
import header from '../images/we-are-one-white.png'

const EventShow = ({ items, slug }) => {
  document.body.className = 'events-show'

  const item = items.find(e => e.slug === slug )

  let img_src = item.marquee.full.url
  if (img_src === "/images/graphic-no-image.jpg") {
    img_src = "//tribecafilm.com/images/graphic-no-image.jpg"
  }

  return (
    <div>
      <header className="Header">
        <img className="brand" src={header} alt="We Are One Festival White logo" />
      </header>
      <div className="FilmHeader">
        <div className="container FilmHeader_img-container">
          <img className="img-responsive center-block" alt={item.display_title} src={img_src} />
          <div className="FilmHeader__mask"></div>

          <div className="FilmHeader__content">
            <div className="container">
              <div className="row">
                <div className="hidden-xs hidden-sm col-md-9">
                  <div className="PageBreadcrumbs">
                    <Link to="/">Schedule</Link> »
                    {" "}
                    <Link to="/events">Browse</Link> » {item.display_title}
                  </div>
                </div>
                <div className="col-xs-12 col-md-3">
                  <div className="PageBreadcrumbs">
                    <Link className="pull-right" to="/">
                      <i className="fas fa-angle-left"/>  Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="FilmHeader__content__action">
                <h4 className="heading-4">{item.premiere}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-wrapper bg-festival">
        <div className="container-fluid bg-white film-container film-container--ruby">
          <div className="container container--content">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <div className="FilmSubtitle">
                  {!!item.type_of_film && <span> {item.type_of_film} |</span>}
                  {!!item.countries && <span> {item.countries} |</span>}
                  {!!item.run_time && <span> {item.run_time} min</span>}
                </div>
                <h1 className="heading-1 FilmTitle">{item.display_title}</h1>
                <div className="FilmSynopsis" dangerouslySetInnerHTML={{__html: item.synopsis}} />
                {!!item.images.length && <Carousel title={item.display_title} images={item.images} /> }

              </div>
              <div className="col-xs-12 col-lg-4 text-center">
                <br />
                <a href={item.youtube_url}>
                  <img className="screening-img" src={youtube} alt="link to youtube" />
                </a>
                <br />
                <br />
                <br />
                {!!item.festival_logo_url && (
                  <img className="screening-img" src={item.festival_logo_url} alt="festival logo" />
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-lg-8">
                {!!item.cast_credits.length && (
                  <div>
                    <hr className="divider" />
                    <h2 className="FilmSectionTitle">CAST &amp; CREDITS</h2>
                    <br />
                    <br />

                    <div className="FilmSectionBlocks">
                      {item.cast_credits.map((credit, i) => (
                        <div className="FilmSectionBlock" key={i}>
                          <div className="FilmSectionSubtitle">{credit.title}</div>
                          <div className="FilmSectionContent">{credit.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {!!item.panelists.length && (
                <div>
                  <hr className="devider" />
                  <h2 className="FilmSectionTitle">PANELISTS</h2>
                  {item.panelists.map((p, i) => <Panelist panelist={p} key={i}/>)}
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventShow
