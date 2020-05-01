import React, { useState, useEffect } from 'react';
import axios from 'axios'
import xor from "lodash/xor"
import qs from "query-string"

import { Router } from "@reach/router"
import Header from '../shared/Header'
import Filters from '../shared/Filters'

import Schedule from '../pages/Schedule'
import EventsIndex from '../pages/EventsIndex'
import EventShow from '../pages/EventShow'
import About from '../pages/About'

function App() {
  const [state, setState] = useState({
    isLoading: true
  })

  useEffect(() => {
    async function fetchFilms() {
      axios.get(`http://localhost:3000/api/we-are-one`).then(res => {
        const search = paramsToSelected()
        const selected_events = filterFilms(res.data.events, search)
        setState({
          isLoading: false,
          all_events: res.data.events,
          all_kinds: getKinds(res.data.events),

          selected_events: selected_events,
          selected_kinds: search.selected_kinds
        })
      })
    }
    fetchFilms()
  }, [])

  const { isLoading,
    all_events,
    all_kinds,
    selected_events,
    selected_kinds
  } = state

  const filters = {
    all_kinds,
    selected_kinds
  }

  const toggleCheckbox = (type, name) => e => {
    const cur_selected_items = state[type]
    const new_selected_items = xor(cur_selected_items, [name])
    let new_state = { ...state, [type]: new_selected_items }
    const new_selected_films = filterFilms(state.all_events, new_state)
    new_state = { ...new_state, selected_events: new_selected_films }
    setState(new_state)
  }

  if (isLoading) return null

  return (
    <div className="App">
      <div className="dates-banner">
        COMING TO YOUTUBE MAY 29 -JUNE 7, 2020
      </div>
      <Header />
      <Filters selected_events={selected_events} filters={filters} toggleCheckbox={toggleCheckbox}/>

      <Router primary={false}>
        <Schedule path="/" items={selected_events} />
        <EventsIndex path="/events" items={selected_events} />
        <EventShow path="/events/:slug" items={all_events} />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;

function filterFilms(films, state) {
  let remaining_films = films

  // filter kind
  if (state.selected_kinds.length) {
    remaining_films = remaining_films.filter(film => state.selected_kinds.includes(film.kind))
  }

  return remaining_films
}

function getKinds(films) {
  let films_kinds = films.map(f => f.kind).filter(k => !!k)
  let uniq_sorted_kinds = Array.from(new Set(films_kinds)).sort()
  return uniq_sorted_kinds.map(kind => ({ name: kind, value: kind }))
}

function paramsToSelected() {
  let search = qs.parse(window.location.search, { arrayFormat: "bracket", parseNumbers: true })
  search.selected_kinds = search.kinds || []
  return search
}
