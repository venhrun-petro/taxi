import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from '~r/store'

const WrapProvider = ({ element }) => (
  <Provider store={store}>{element}</Provider>
)

WrapProvider.propTypes = {
  element: PropTypes.node.isRequired
}

export default WrapProvider
