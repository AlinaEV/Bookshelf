import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Authorlist extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <h3> Список авторов </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul className='list'>
              <li className='list__item'>
                <Link to='/authorlist/shevchenko/'>Т.Г.Шевченко</Link>
              </li>
              <li className='list__item'>
                <Link to='/authorlist/zul_vern/'>Ж.Верн</Link>
              </li>
              <li className='list__item'>
                <Link to='/authorlist/gogol/'>Н.В.Гоголь</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}