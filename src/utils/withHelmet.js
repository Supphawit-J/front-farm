import React from 'react'
import { Helmet } from 'react-helmet'

function withHelmet (title) {
  return Component => props => (
    <>
      <Helmet>

        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}
export default withHelmet
