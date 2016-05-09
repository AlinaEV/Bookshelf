import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    {/* замени все '-' в параметре (то есть в адресе) на пробелы */}
    const bookTitle = this.props.params.book.replace(/-/g,' ');
    return (
      <div className='col-md-12'>
        {bookTitle}
      </div>
    )
  }
}