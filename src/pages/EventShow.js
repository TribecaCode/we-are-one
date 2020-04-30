import React from 'react'
import { Link } from '@reach/router'

const EventShow = ({ items, slug }) => {
  const item = items.find(e => e.slug === slug )

  return (
    <div className="films-show">
      <div className="FilmHeader">
        <div className="container FilmHeader_img-container">
          <img className="img-responsive center-block" alt={item.display_title} src="https://tribecafilm-production.s3.amazonaws.com/uploads/film/photo_1/4137/full_Tribeca_Marvelous_and_the_Black_Hole_1_1080p.png" />
          <div className="FilmHeader__mask"></div>

          <div className="FilmHeader__content">
            <div className="container">
              <div className="row">
                <div className="hidden-xs hidden-sm col-md-9">
                  <div className="PageBreadcrumbs">
                    <Link to="/">Schedule </Link> »
                    <Link to="/events"> Browse </Link> » {item.display_title}
                  </div>
                </div>
                <div className="col-xs-12 col-md-3">
                  <div className="PageBreadcrumbs">
                    <Link className="pull-right" to="/">
                      <i className="fas fa-angle-left"/>  Schedule
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
              </div>
              <div className="col-xs-12 col-lg-4 Screenings"></div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <hr className="divider" />
                <h2 className="FilmSectionTitle">CAST &amp; CREDITS</h2>
                {/* <h3 className="FilmSectionTitle director">Directed by {item.director}</h3> */}
                {/* <div className="FilmSectionContent" dangerouslySetInnerHTML={{__html: item.director_bio}} /> */}

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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventShow
