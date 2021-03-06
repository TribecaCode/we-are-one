import React from "react";
import $ from "jquery";
import { Link } from "@reach/router";
import SearchForm from "./SearchForm";

function Filters({
  selected_events,
  filters,
  onClearFilters,
  toggleCheckbox,
  onBrowseClick,
  onScheduleClick,
  onSearch
}) {
  const getRemainingCount = (type, name) => {
    switch (type) {
      case "selected_kinds":
        return selected_events.filter(f => f.kind === name).length;
      case "selected_genres":
        return selected_events.filter(f => f.genres.includes(name)).length;
      default:
        return 0;
    }
  };

  const isActive = (type, name) => {
    switch (type) {
      case "selected_kinds":
        return selected_events.map(f => f.kind).includes(name);
      case "selected_genres":
        return selected_events
          .map(f => f.genres)
          .flat()
          .includes(name);
      default:
        return true;
    }
  };

  const Section = ({ title, items, type, klass }) => {
    return (
      <div className={`${klass}`}>
        <h5 className="FilterContentSectionTitle">{title}</h5>
        <ul className={`FilterContentList FilterContentList--${type}`}>
          {items.map(({ name, value }) => {
            const isDisabled = !isActive(type, name);
            let itemKlass = "FilterContentListItem ";
            if (isDisabled) itemKlass += "FilterContentListItem--disabled";
            const count = getRemainingCount(type, name);
            return (
              <li key={name} className={itemKlass}>
                <div className="FestivalCheckbox">
                  <input
                    id={name}
                    type="checkbox"
                    onChange={toggleCheckbox(type, name)}
                    checked={filters[type].includes(name)}
                    disabled={isDisabled}
                  />
                  <label htmlFor={name}>
                    {value}
                    {count !== 0 && (
                      <span className="FilterCount">({count})</span>
                    )}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="Filters">
      <div className="container FiltersNav ">
        <div className="FiltersNavLeft ">
          <a className="FiltersNavLink" href="#filters" onClick={toggleFilters}>
            <i className="fas fa-chevron-down" />
            <span> FILTER EVENTS</span>
          </a>
          <SearchForm
            klass="FiltersNavSearch"
            keyword={filters.keyword}
            onSearch={onSearch}
          />
        </div>
        <div className="spacer"></div>
        <div className="FiltersNavRight ">
          <Link
            className="FiltersNavLink"
            to="/"
            id="browse"
            onClick={onBrowseClick}
          >
            BROWSE
          </Link>
          <Link
            className="FiltersNavLink"
            to="/schedule"
            id="schedule"
            onClick={onScheduleClick}
          >
            SCHEDULE
          </Link>
          <Link className="FiltersNavLink" to="/about" id="about">
            FAQ
          </Link>
        </div>
      </div>
      <div className="bg-pale">
        <div className="container FiltersContent">
          <SearchForm
            klass="FiltersNavSearchXS"
            keyword={filters.keyword}
            onSearch={onSearch}
          />

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

          <div className="row FilterContentInner">
            <div className="col-xs-12 FilterContentSection">
              <div className="row">
                <Section
                  title="GENRE"
                  type="selected_genres"
                  items={filters.all_genres}
                  klass="col-xs-12 "
                />
              </div>
            </div>
          </div>

          <div className="FiltersContentActions">
            <button className="btn btn-clear-filters" onClick={onClearFilters}>
              CLEAR FILTERS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;

function toggleFilters() {
  const filters = $(".FiltersContent");

  if (filters.is(":hidden")) {
    filters.slideDown("fast");
  } else {
    filters.slideUp("fast");
  }
}
