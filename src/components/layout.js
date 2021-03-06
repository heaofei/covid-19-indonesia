/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// MATERIAL UI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import Header from './header'
import './layout.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    // secondary: {
    //   main: '#d81b60',
    // },
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container maxWidth="sm">
        <main>{children}</main>
        <footer style={{ marginTop: 12, marginBottom: 12 }}>
          <Typography variant="caption" display="block" gutterBottom>
            {/* © {new Date().getFullYear()},  */}
            Built with ♥ by{' '}
            <Link href="https://www.instagram.com/chrisk8er">Chrisk8er</Link>
          </Typography>
        </footer>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
