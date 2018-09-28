import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link href="https://marketplace-content.asos.com/css/styles1.min__v4.65.1151_.css" rel="stylesheet" type="text/css" />
            <link href="https://marketplace-content.asos.com/css/styles2.min__v4.65.1151_.css" rel="stylesheet" type="text/css" />
            <link href="https://marketplace-content.asos.com/css/media__v4.65.1151_.css" rel="stylesheet" type="text/css" />

            <script type="text/javascript" src="https://marketplace-content.asos.com/js/lib/jquery-1.12.4.min.js"></script>
            <script type="text/javascript" src="https://marketplace-content.asos.com/js/lib/jquery-migrate-1.4.1.min.js"></script>
            <script type="text/javascript" src="https://marketplace-content.asos.com/Scripts/js/lib/knockout-3.3.0.js"></script>
            <script type="text/javascript" src="https://marketplace-content.asos.com/Scripts/js/lib/require-2.1.19.js"></script>

            <script src="https://marketplace-content.asos.com/scripts/js/common.controller.min__v4.65.1151_.js" type="text/javascript"></script>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
