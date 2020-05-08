import React from 'react'
import Event from './Event'
import Header from '../shared/Header'

const EventsIndex = ({ items, filter }) => {
  document.body.className = 'events-index'

  return (
    <React.Fragment>
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
