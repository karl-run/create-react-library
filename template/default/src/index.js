import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class ExampleComponent extends React.Component {
  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}

ExampleComponent.propTypes = {
  text: PropTypes.string
}
