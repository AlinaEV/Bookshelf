import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  render() {
    // const { name } = this.props
    return <div>
      <h1>Перечень доступных книг</h1>
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
}