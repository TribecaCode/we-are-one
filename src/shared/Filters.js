import React from "react"
import $ from "jquery"
import { Link } from '@reach/router'

function Filters({ selected_events, filters, toggleCheckbox }) {
  const getRemainingCount = (type, name) => {
    switch (type) {
      case "selected_kinds":
        return selected_events.filter(f => f.kind === name).length
      default:
        return 0
    }
  }

  const isActive = (type, name) => {
    switch (type) {
      case "selected_kinds":
        return selected_events.map(f => f.kind).includes(name)
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
                    checked={filters.selected_kinds.includes(name)}
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

  // const SearchForm = ({ klass }) => (
  //   <form action="/browse" className={klass}>
  //     <input name="m" type="hidden" value="film" />
  //     <div className="FiltersNavSearchInputContainer">
  //       <input
  //         className="FiltersNavSearchInput"
  //         name="q"
  //         placeholder="Search the guide"
  //         type="text"
  //       />
  //       <button className="FiltersNavSearchSubmit" type="submit">
  //         <i className="fas fa-search" />
  //       </button>
  //     </div>
  //   </form>
  // )

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
        <div className="bg-pale">
          <div className="container FiltersContent">
            {/* <SearchForm klass="FiltersNavSearchXS" /> */}

            <div className="row FilterContentInner">
              <div className="col-xs-12 FilterContentSection">
                <div className="row">
                  <Section
                    title="TYPE OF FILM"
                    type="selected_kinds"
                    items={filters.all_kinds}
                    klass="col-xs-12 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Filters

function toggleFilters() {
  const filters = $(".FiltersContent")

  if (filters.is(":hidden")) {
    filters.slideDown("fast")
  } else {
    filters.slideUp("fast")
  }
}
