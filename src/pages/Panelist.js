import React from 'react'

const Panelist = ({ panelist }) => {
  const image_alt = !!panelist.image ? panelist.name : "default panelist image placeholder"
  const image_src = panelist.image || "https://tribecafilm-production.s3.amazonaws.com/default-panelist.png"

  return (
    <div className="row FilmPanelist">
      <div className="col-xs-12 col-sm-4">
        <img className="headshot" alt={image_alt} src={image_src} />
      </div>
      <div className="col-xs-12 col-sm-8">
        <h3 className="FilmSectionTitle">{panelist.name}</h3>
        <p className="FilmSectionContent" dangerouslySetInnerHTML={{__html: panelist.bio}} />
      </div>
    </div>
  )
}

export default Panelist
