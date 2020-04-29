import React from 'react'

const Event = ({ item }) => {
  return (
    <React.Fragment>
      <div class="visible-xs">
        <div class="Card Card--film">
          <a href="/events/pretty-people-2020">
            <div class="Card_img Card_img--ruby" style={{backgroundImage: "url(/images/graphic-no-image.jpg)"}}></div>
          </a>
          <div class="Card_text-container">
            <div class="Card_subtitle"></div>
            <a class="Card_title" title="Pretty People" href="/events/pretty-people-2020">Pretty People</a>
          </div>
        </div>
      </div>

      <div class="hidden-xs col-sm-12">
        <div class="Film">
          <a class="Film_img-container Film_img-container--ruby" style={{backgroundImage: "url(/images/graphic-no-image.jpg)"}} href="/events/pretty-people-2020"></a>
          <div class="Film_content">
            <div>
              <div class="pull-right">
                <div class="Film_runtime pull-right">10 min</div>
              </div>
              <div class="Film_genre">TV</div>
              <h4 class="heading-4">
                <a class="Film_title" href="/events/pretty-people-2020">Pretty People</a>
              </h4>
              <div class="Film_summary">Best friends Rachel and Greg have undeniable chemistry, but it's been simmering and unspoken for the last three years. When Rachel's casual and unexpected hook-up sparks Greg's feelings of jealousy, they'll be forced to say what's on their minds—t...</div>
            </div>
            <a class="Film_more" href="/events/pretty-people-2020">View Details</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Event
