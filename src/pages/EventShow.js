import React from 'react'

const EventShow = () => {
  return (
    <div className="films-show">
      <div class="FilmHeader">
        <div class="container FilmHeader_img-container">
          <img class="img-responsive center-block" alt="Marvelous and The Black Hole" src="https://tribecafilm-production.s3.amazonaws.com/uploads/film/photo_1/4137/full_Tribeca_Marvelous_and_the_Black_Hole_1_1080p.png" />
          <div class="FilmHeader__mask"></div>

          <div class="FilmHeader__content">
            <div class="container">
              <div class="row">
                <div class="hidden-xs hidden-sm col-md-9">
                  <div class="PageBreadcrumbs">
                    <a href="/">Home</a> »
                    <a href="/festival">Festival Guide</a> »
                    <a href="/festival/film">Films</a> » Marvelous and The Black Hole
                  </div>
                </div>
                <div class="col-xs-12 col-md-3">
                  <div class="PageBreadcrumbs">
                    <a class="pull-right" href="/festival">
                      <i class="fas fa-angle-left"></i> Festival Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="container">
              <h3 class="heading-3">Viewpoints</h3>
              <div class="FilmHeader__content__action">
                <h4 class="heading-4">World Premiere</h4>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="bg-wrapper bg-festival">

        <div class="container-fluid bg-white film-container film-container--ruby">
          <div class="container container--content">
            <div class="row">
              <div class="col-xs-12 col-lg-8">
                <div class="FilmSubtitle">
                  <span> FEATURE |</span>
                  <span> USA |</span>
                  <span> 82 MINUTES</span>
                </div>
                <h1 class="heading-1 FilmTitle">MARVELOUS AND THE BLACK HOLE</h1>
                <div class="FilmGenres">
                  <span>Comedy, Drama</span>
                </div>
                <div class="FilmSynopsis">
                  <p>A teenage delinquent (
                    <strong>Miya Cech</strong>) befriends a surly magician (
                    <strong>Rhea Perlman</strong>) who helps her navigate her inner demons and dysfunctional family with sleight of hand magic. A coming of age comedy that touches on unlikely friendships, grief, and finding hope in the darkest moments.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-lg-4 Screenings"></div>
            </div>

            <div class="row">
              <div class="col-xs-12 col-lg-8 col-lg-offset-2">
                <hr class="divider" />
                  <h2 class="FilmSectionTitle">CAST &amp; CREDITS</h2>
                  <h3 class="FilmSectionTitle director">Directed by Kate Tsang</h3>
                  <div class="FilmSectionContent">
                    <p>
                      <strong>Kate Tsang</strong> is a Los Angeles-based artist, writer, and director. She’s created award-winning shorts (
                      <em>So You’ve Grown Attached, Welcome to Doozy</em>) and written for fantastic shows (
                      <em>Adventure Time: Distant Lands, Steven UniverseFuture</em>). Kate likes cheese, tea, cheese tea, and stories about kind weirdos.
                    </p>
                  </div>

                    <br />
                    <br />
                      <div class="FilmSectionBlocks">
                        <div class="FilmSectionBlock">
                          <div class="FilmSectionSubtitle">Director</div>
                          <div class="FilmSectionContent">Kate Tsang</div>
                        </div>
                        <div class="FilmSectionBlock">
                          <div class="FilmSectionSubtitle">Producer</div>
                          <div class="FilmSectionContent">Carolyn Mao</div>
                        </div>
                        <div class="FilmSectionBlock">
                          <div class="FilmSectionSubtitle">Screenwriter</div>
                          <div class="FilmSectionContent">Kate Tsang</div>
                        </div>
                        <div class="FilmSectionBlock">
                          <div class="FilmSectionSubtitle">Cinematographer</div>
                          <div class="FilmSectionContent">Nanu Segal</div>
                        </div>
                        <div class="FilmSectionBlock">
                          <div class="FilmSectionSubtitle">Editor</div>
                          <div class="FilmSectionContent">Ryan Denmark, Cyndi Trissel</div>
                        </div>
                        <div class="FilmSectionBlock">
                          <div class="FilmSectionSubtitle">Cast</div>
                          <div class="FilmSectionContent">Miya Cech, Rhea Perlman, Leonardo Nam, Kannon Omachi, Paulina Lule, Keith Powell</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    </div>
  )
}

export default EventShow
