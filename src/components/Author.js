import React, { Component } from 'react'

export default class Author extends Component {
  render() {
    {/* замени все '-' в параметре (то есть в адресе) на пробелы */}
    const authorName = this.props.params.author.replace(/-/g,' ');
    return (
      <div className='col-md-12'>
        {authorName}
      </div>
    )
  }
}