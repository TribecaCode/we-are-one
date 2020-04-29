import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Router } from "@reach/router"
import Home from '../pages/Home'
import EventsIndex from '../pages/EventsIndex'
import EventShow from '../pages/EventShow'

function App() {
  const [state, setState] = useState({
    isLoading: true
  })

  useEffect(() => {
    async function fetchFilms() {
      axios.get(`https://tribecafilm.com/api/we-are-one`).then(res => {
        setState({
          isLoading: false,
          items: res.data,
        })
      })
    }
    fetchFilms()
  }, [])

  const { isLoading, items } = state

  if (isLoading) return null

  return (
      <Router>
        <Home path="/" items={items}/>
        <EventsIndex path="/events" items={items}/>
        <EventShow path="/events/:slug" items={items} />
      </Router>
  );
}

export default App;
