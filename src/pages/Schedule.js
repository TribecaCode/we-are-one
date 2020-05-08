import React from 'react'
import Event from './Event'
import Header from '../shared/Header'
import MyMetaTags from '../shared/MyMetaTags'

const DATES = [
  '05-29',
  '05-30',
  '05-31',
  '06-01',
  '06-02',
  '06-03',
  '06-04',
  '06-05',
  '06-06',
  '06-07',
]

const Schedule = ({ items, onDateSelect, selectedDate, filter }) => {
  document.body.className = 'schedule'

  const morning = items.filter(film => film.time_of_day === "morning")
  // const day = items.filter(film => film.time_of_day === "day")
  // const eventing = items.filter(film => film.time_of_day === "evening")
  // const night = items.filter(film => film.time_of_day === "night")

  return (
    <React.Fragment>
      <MyMetaTags title="Festival Schedule" description="We Are One: A Global Film Festival will run from May 29 - June 7 on YouTube.com/WeAreOne. A free 10-day digital festival to benefit World Health Organization Covid-19 Solidarity Response Fund that will include films, shorts, documentaries, music, comedy, and conversations. Below is the full schedule of events"
      />
      <Header />
      {filter}
      <div className="we_are_one-schedule">
        <div className="bg-wrapper bg-festival">
          <br />
          <br/ >
          <div className="container-fluid bg-pale">
            <div className="container container--content">
              <h3 className="ScheduleTime">
                <span className="may">May</span>
                <span className="june">June</span>
              </h3>

              <div className="ScheduleNav">
                {DATES.map(d => {
                  const klass = selectedDate === d ? 'btn-schedule active' : 'btn-schedule'
                  return (
                    <a key={d} className={klass} onClick={onDateSelect(d)} href={`#{d}`}>{d.slice(3)}</a>
                  )
                })}
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <h3 className="ScheduleTime">Fri May 29</h3>
                </div>

                {!!morning.length && (
                  <div className="col-xs-12">
                    <hr className="devider" />
                    <h3 className="ScheduleTime ScheduleTime--spaced">Morning 9am - 12pm</h3>
                    {items.map(item => <Event key={item.id} item={item}/>)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Schedule
