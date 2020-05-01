import React, { useState, useEffect } from "react"
import axios from "axios"
import xor from "lodash/xor"
import qs from "query-string"
import $ from "jquery"
import { Link } from '@reach/router'

export const FILM_CATEGORIES = [
  { name: "film", value: "Film" },
  { name: "games", value: "Games" },
  { name: "immersive", value: "Immersive" },
  { name: "tv", value: "TV" },
  { name: "n-o-w", value: "N.O.W." },
  { name: "talk", value: "Talk" }
]

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
          all_categories: FILM_CATEGORIES,
          all_kinds: getKinds(res.data.films),
          all_genres: getGenres(res.data.films),
          all_theaters: getTheaters(res.data.films),
          all_sections: res.data.sections.map(s => ({ name: s.id, value: s.title })),

          selected_films: selected_films,
          selected_genres: search.selected_genres,
          selected_categories: search.selected_categories,
          selected_kinds: search.selected_kinds,
          selected_sections: search.selected_sections,
          selected_theaters: search.selected_theaters
        })
      })
    }
    fetchFilms()
  }, [])

  const {
    isLoading,
    all_categories,
    all_genres,
    all_kinds,
    all_sections,
    all_theaters,
    selected_films
  } = state

  const clearFilters = e => {
    e.preventDefault()
    const new_state = {
      ...state,
      selected_films: state.all_films,
      selected_genres: [],
      selected_kinds: [],
      selected_categories: [],
      selected_sections: [],
      selected_theaters: []
    }
    setState(new_state)
  }

  const canSearch = () => {
    if (state.selected_kinds.length) return true
    if (state.selected_categories.length) return true
    if (state.selected_genres.length) return true
    if (state.selected_sections.length) return true
    if (state.selected_theaters.length) return true
  }

  const search = e => {
    e.preventDefault()

    const params = {
      categories: state["selected_categories"],
      kinds: state["selected_kinds"],
      genres: state["selected_genres"],
      sections: state["selected_sections"],
      theaters: state["selected_theaters"]
    }
    const search = qs.stringify(params, { arrayFormat: "bracket" })
    window.location = `/festival?${search}`
  }

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
      case "selected_categories":
        return selected_films.filter(f => f.category === name).length
      case "selected_kinds":
        return selected_films.filter(f => f.kind === name).length
      case "selected_genres":
        return selected_films.filter(f => f.genres.includes(name)).length
      case "selected_theaters":
        return selected_films.filter(f => f.cached_theaters.includes(name)).length
      case "selected_sections":
        return selected_films.filter(f => f.section_id === name).length
      default:
        return 0
    }
  }

  const isActive = (type, name) => {
    switch (type) {
      case "selected_categories":
        return selected_films.map(f => f.category).includes(name)
      case "selected_kinds":
        return selected_films.map(f => f.kind).includes(name)
      case "selected_genres":
        return selected_films
          .map(f => f.genres)
          .flat()
          .includes(name)
      case "selected_theaters":
        return selected_films
          .map(f => f.cached_theaters)
          .flat()
          .includes(name)
      case "selected_sections":
        return selected_films.map(f => f.section_id).includes(name)
      default:
        return true
    }
  }

  const Section = ({ title, items, type, klass }) => {
    return (
      <div className={`${klass}`}>
        <h5 className="FilterContentSectionTitle">{title}</h5>
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
          <Link className="FiltersNavLink FiltersNavLink active" to="#schedule">
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

            <form onSubmit={search}>
              <div className="row FilterContentInner">
                <div className="col-xs-12 col-lg-2 FilterContentSection">
                  <div className="row">
                    <Section
                      title="TYPE OF EVENT"
                      type="selected_categories"
                      items={all_categories}
                      klass="col-xs-12"
                    />
                    <Section
                      title="TYPE OF FILM"
                      type="selected_kinds"
                      items={all_kinds}
                      klass="col-xs-12 "
                    />
                  </div>
                </div>

                <Section
                  title="GENRES & TYPES"
                  type="selected_genres"
                  items={all_genres}
                  klass="col-xs-12 col-lg-4 FilterContentSection"
                />
                <Section
                  title="SECTION"
                  type="selected_sections"
                  items={all_sections}
                  klass="col-xs-12 col-lg-3 FilterContentSection"
                />
              </div>
              <div className="FiltersContentActions">
                <button className="btn btn-clear-filters" onClick={clearFilters}>
                  CLEAR FILTERS
                </button>
                {/* <div className="FiltersContentActionsCount">{selected_films.length}</div> */}
                <button type="submit" className="btn btn-apply-filters" disabled={!canSearch()}>
                  APPLY FILTERS
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Filters

// document.addEventListener("DOMContentLoaded", () => {
//   ReactDOM.render(<Filters />, document.getElementById("filters"))
// })

function getKinds(films) {
  let films_kinds = films.map(f => f.kind).filter(k => !!k)
  let uniq_sorted_kinds = Array.from(new Set(films_kinds)).sort()
  return uniq_sorted_kinds.map(kind => ({ name: kind, value: kind }))
}

function getGenres(films) {
  let films_genres = films.map(f => f.genres).flat()
  let uniq_sorted_genres = Array.from(new Set(films_genres)).sort()
  return uniq_sorted_genres.map(genre => ({ name: genre, value: genre }))
}

function getTheaters(films) {
  let films_theaters = films.map(f => f.cached_theaters).flat()
  let uniq_sorted_theaters = Array.from(new Set(films_theaters)).sort()
  return uniq_sorted_theaters.map(theater => ({ name: theater, value: theater }))
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
  // filter categories
  if (state.selected_categories.length) {
    remaining_films = remaining_films.filter(film =>
      state.selected_categories.includes(film.category)
    )
  }

  // filter kind
  if (state.selected_kinds.length) {
    remaining_films = remaining_films.filter(film => state.selected_kinds.includes(film.kind))
  }

  // filter genres
  if (state.selected_genres.length) {
    remaining_films = remaining_films.filter(film =>
      state.selected_genres.every(genre => film.genres.includes(genre))
    )
  }

  // filter genres
  if (state.selected_theaters.length) {
    remaining_films = remaining_films.filter(film =>
      state.selected_theaters.every(theater => film.cached_theaters.includes(theater))
    )
  }

  // filter sections
  if (state.selected_sections.length) {
    remaining_films = remaining_films.filter(film =>
      state.selected_sections.includes(film.section_id)
    )
  }

  return remaining_films
}

function paramsToSelected() {
  let search = qs.parse(window.location.search, { arrayFormat: "bracket", parseNumbers: true })
  search.selected_categories = search.categories || []
  search.selected_genres = search.genres || []
  search.selected_sections = search.sections || []
  search.selected_theaters = search.theaters || []
  search.selected_kinds = search.kinds || []
  return search
}
