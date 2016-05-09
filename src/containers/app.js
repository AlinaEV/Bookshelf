import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 >Приложение "Книги"</h1>
        <ul className='nav nav-pills'>
          <li><Link to='/booklist'>Список книг</Link></li>
          <li><Link to='/authorlist'>Список авторов</Link></li>
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}