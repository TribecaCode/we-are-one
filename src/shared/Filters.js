import React, { useState, useEffect } from "react"
import axios from "axios"
import xor from "lodash/xor"
import qs from "query-string"
import $ from "jquery"
import { Link } from '@reach/router'

function Filters() {
  const [state, setState] = useState({
    isLoading: true
  })

  useEffect(() => {
    async function fetchFilms() {
      axios.get(`http://localhost:3000/festival/data`).then(res => {
        const search = paramsToSelected()
        const selected_films = filterFilms(res.data.films, search)
        setState({
          isLoading: false,

          all_films: res.data.films,
          all_kinds: getKinds(res.data.films),

          selected_films: selected_films,
          selected_kinds: search.selected_kinds,
        })
      })
    }
    fetchFilms()
  }, [])

  const {
    isLoading,
    all_kinds,
    selected_films
  } = state

  const toggleCheckbox = (type, name) => e => {
    const cur_selected_items = state[type]
    const new_selected_items = xor(cur_selected_items, [name])
    let new_state = { ...state, [type]: new_selected_items }
    const new_selected_films = filterFilms(state.all_films, new_state)
    new_state = { ...new_state, selected_films: new_selected_films }
    setState(new_state)
  }

  const getRemainingCount = (type, name) => {
    switch (type) {
      case "selected_kinds":
        return selected_films.filter(f => f.kind === name).length
      default:
        return 0
    }
  }

  const isActive = (type, name) => {
    switch (type) {
      case "selected_kinds":
        return selected_films.map(f => f.kind).includes(name)
      default:
        return true
    }
  }

  const Section = ({ title, items, type, klass }) => {
    return (
      <div className={`${klass}`}>
        <ul className={`FilterContentList FilterContentList--${type}`}>
          {items.map(({ name, value }) => {
            const isDisabled = !isActive(type, name)
            let itemKlass = "FilterContentListItem "
            if (isDisabled) itemKlass += "FilterContentListItem--disabled"
            const count = getRemainingCount(type, name)
            return (
              <li key={name} className={itemKlass}>
                <div className="FestivalCheckbox">
                  <input
                    id={name}
                    type="checkbox"
                    onChange={toggleCheckbox(type, name)}
                    checked={state[type].includes(name)}
                    disabled={isDisabled}
                  />
                  <label htmlFor={name}>
                    {value}
                    {count !== 0 && <span className="FilterCount">({count})</span>}
                  </label>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const SearchForm = ({ klass }) => (
    <form action="/browse" className={klass}>
      <input name="m" type="hidden" value="film" />
      <div className="FiltersNavSearchInputContainer">
        <input
          className="FiltersNavSearchInput"
          name="q"
          placeholder="Search the guide"
          type="text"
        />
        <button className="FiltersNavSearchSubmit" type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    </form>
  )

  return (
    <div className="Filters">
      <div className="container FiltersNav ">
        <div className="FiltersNavLeft ">
          <a className="FiltersNavLink" a="#filters" onClick={toggleFilters}>
            <i className="fas fa-chevron-down" />
            <span> FILTER EVENTS</span>
          </a>
          {/* <SearchForm klass="FiltersNavSearch" /> */}
        </div>
        <div className="spacer"></div>
        <div className="FiltersNavRight ">
          <Link className="FiltersNavLink FiltersNavLink" to="/">
            SCHEDULE
          </Link>
          <Link className="FiltersNavLink" to="/events">
            BROWSE
          </Link>
          <Link className="FiltersNavLink" to="/festival/discover">
            ABOUT
          </Link>
        </div>
      </div>
      {!isLoading && (
        <div className="bg-pale">
          <div className="container FiltersContent">
            {/* <SearchForm klass="FiltersNavSearchXS" /> */}

            <div className="row FilterContentInner">
              <div className="col-xs-12 col-lg-2 FilterContentSection">
                <div className="row">
                  <Section
                    title="TYPE OF FILM"
                    type="selected_kinds"
                    items={all_kinds}
                    klass="col-xs-12 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Filters

function getKinds(films) {
  let films_kinds = films.map(f => f.kind).filter(k => !!k)
  let uniq_sorted_kinds = Array.from(new Set(films_kinds)).sort()
  return uniq_sorted_kinds.map(kind => ({ name: kind, value: kind }))
}

function toggleFilters() {
  const filters = $(".FiltersContent")

  if (filters.is(":hidden")) {
    filters.slideDown("fast")
  } else {
    filters.slideUp("fast")
  }
}

function filterFilms(films, state) {
  let remaining_films = films

  // filter kind
  if (state.selected_kinds.length) {
    remaining_films = remaining_films.filter(film => state.selected_kinds.includes(film.kind))
  }

  return remaining_films
}

function paramsToSelected() {
  let search = qs.parse(window.location.search, { arrayFormat: "bracket", parseNumbers: true })
  search.selected_kinds = search.kinds || []
  return search
}
