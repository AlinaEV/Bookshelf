import React, { Component } from 'react'

export default class Genre extends Component {
  render() {
    let template;
    {/* если параметр book есть - покажи дочерний компонент */}
    if (this.props.params.book) {
      template = (
        <div className='row'>
          <h3 className='col-md-12'>{this.props.params.genre}</h3>
          <div className='col-md-12'>{this.props.children}</div>
        </div>
      )
    } else {
      template = (
        <div className='row'>
          <h3 className='col-md-12'>{this.props.params.genre}</h3>
          <div className='col-md-12'>Здесь будет список книг</div>
        </div>
      )
    }

    return template;
  }
}