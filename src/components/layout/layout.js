import React from "react"
import PropTypes from "prop-types"
import '~style/main.scss'
import Footer from '~c/includes/Footer'
import Header from "~c/includes/Navigation"
import HeaderMobile from '~c/includes/NavigationMobile'

const Layout = ({ children}) => (
  <>
    <Header />
    <HeaderMobile />
    <main className="main">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
