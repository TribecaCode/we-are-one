import React from 'react'
import Event from './Event'
import Header from '../shared/Header'
import MyMetaTags from '../shared/MyMetaTags'

const EventsIndex = ({ items, filter }) => {
  document.body.className = 'events-index'

  return (
    <React.Fragment>
      <MyMetaTags title="Festival Titles" description="Browse the We Are One: A Global Film Festival Guide. A free 10-day digital festival to benefit World Health Organization Covid-19 Solidarity Response Fund that will include films, shorts, documentaries, music, comedy, and conversations." />
      <Header />
      {filter}
      <div className="bg-wrapper bg-festival">
        <div className="container-fluid">
          <div className="container container--content">
            <div className="row">
              {items.map(item => <Event key={item.id} item={item}/>)}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EventsIndex
