import React from 'react'
import MetaTags from 'react-meta-tags';

const MyMetaTags = ({ title, description, css }) => {
  const metaTitle = `${title} | We Are One: A Global Film Festival`

  return (
    <MetaTags>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description}/>
      {css && (
        <style type="text/css">{css}</style>
      )}
    </MetaTags>
  )
}

export default MyMetaTags
