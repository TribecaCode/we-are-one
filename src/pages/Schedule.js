import React from 'react'
import Event from './Event'
import Header from '../shared/Header'

const Schedule = ({ items }) => {
  return (
    <div className="we_are_one-schedule">
      <Header />
      <div className="bg-wrapper bg-festival">
        <br />
        <br/ >
        <div className="container-fluid bg-pale">
          <div className="container container--content">
            <h3 className="ScheduleTime">May</h3>

            <div className="ScheduleNav">
              <a className="btn-schedule active" href="/festival/schedule/29-05-2020">29</a>
              <a className="btn-schedule " href="/festival/schedule/30-05-2020">30</a>
              <a className="btn-schedule " href="/festival/schedule/31-05-2020">31</a>
              <a className="btn-schedule " href="/festival/schedule/01-06-2020">01</a>
              <a className="btn-schedule " href="/festival/schedule/02-06-2020">02</a>
              <a className="btn-schedule " href="/festival/schedule/03-06-2020">03</a>
              <a className="btn-schedule " href="/festival/schedule/04-06-2020">04</a>
              <a className="btn-schedule " href="/festival/schedule/05-06-2020">05</a>
              <a className="btn-schedule " href="/festival/schedule/06-06-2020">06</a>
              <a className="btn-schedule " href="/festival/schedule/07-06-2020">07</a>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <h3 className="ScheduleTime">Fri May 29</h3>
              </div>

              <div className="col-xs-12">
                <hr className="devider" />
                <h3 className="ScheduleTime ScheduleTime--spaced">Morning 9am - 12pm</h3>
                {items.map(item => <Event key={item.id} item={item}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
