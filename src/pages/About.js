import React from 'react'
import Header from '../shared/Header'
import MyMetaTags from '../shared/MyMetaTags'

const About = ({filter}) => {
  document.body.className = 'about'

  return (
    <React.Fragment>
      <Header />
      <MyMetaTags title='About' description="TODO" />
      {filter}
      <div className="bg-wrapper bg-festival">
        <br />
        <br />
        <div className="container-fluid bg-white news-border-top">
          <div className="container container--content">
            <div className="row">
              <h1> ABOUT PSGE HERE</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About
