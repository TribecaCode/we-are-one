import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Router } from "@reach/router"
import Schedule from '../pages/Schedule'
import EventsIndex from '../pages/EventsIndex'
import EventShow from '../pages/EventShow'

function App() {
  const [state, setState] = useState({
    isLoading: true
  })

  useEffect(() => {
    async function fetchFilms() {
      axios.get(`http://localhost:3000/api/we-are-one`).then(res => {
        setState({
          isLoading: false,
          items: res.data.events,
        })
      })
    }
    fetchFilms()
  }, [])

  const { isLoading, items } = state

  if (isLoading) return null

  return (
    <div className="App">
      <div className="dates-banner">
        COMING TO YOUTUBE MAY 29 -JUNE 7, 2020
      </div>

      <Router primary={false}>
        <Schedule path="/" items={items} />
        <EventsIndex path="/events" items={items} />
        <EventShow path="/events/:slug" items={items} />
      </Router>
    </div>
  );
}

export default App;
