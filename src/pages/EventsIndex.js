import React from 'react'
import Event from './Event'

const EventsIndex = ({ items }) => {
  return (
<div class="bg-wrapper bg-festival">
	<div class="container-fluid">
		<div class="container container--content">
      <div class="row">
        {items.map(item => <Event key={item.id} item={item}/>)}
      </div>
		</div>
	</div>
</div>
  )
}

export default EventsIndex
