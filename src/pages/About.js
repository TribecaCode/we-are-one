import React from 'react'
import Header from '../shared/Header'
import MyMetaTags from '../shared/MyMetaTags'

const About = ({filter, data}) => {
  document.body.className = 'about'

  return (
    <React.Fragment>
      <Header />
      <MyMetaTags title={data.title} description={data.short_summary} css={data.css} />
      {filter}
      <div className="bg-wrapper bg-festival">
        <br />
        <br />
        <div className="container-fluid bg-white news-border-top">
          <div className="container container--content">
            <div className="row">
              <div dangerouslySetInnerHTML={{__html: data.body}} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About
