import React from 'react'
import Header from '../shared/Header'
import { Link } from '@reach/router'
import MyMetaTags from '../shared/MyMetaTags'

const NotFound = ({filter, data}) => {
  document.body.className = 'about'

  return (
    <React.Fragment>
      <Header />
      <MyMetaTags title='404' />
      <div className="bg-wrapper bg-festival">
        <br />
        <br />
        <div className="container-fluid bg-white news-border-top">
          <div className="container container--content">
            <div className="row text-center">
              <br />
              <br />
              <h1 className="heading-3">Oops.. Nothing here</h1>
              <br />
              <Link to="/" className="btn btn-gold btn-lg">START OVER </Link>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NotFound
