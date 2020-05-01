import React from 'react'
import Event from './Event'

const EventsIndex = ({ items, filters }) => {
  return (
    <React.Fragment>
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
