import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Booklist extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <h3> Список книг </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul className='list'>
              <li className='list__item'>
                <Link to='/booklist/genre/zbirka/kobzar/'>"Кобзар".</Link><Link to='/authorlist/shevchenko/'> Т.Г.Шевченко</Link>
              </li>
              <li className='list__item'>
                <Link to='/booklist/genre/novel/tainstvenniy_ostrov/'>"Таинственный остров".</Link><Link to='/authorlist/zul_vern/'> Ж.Верн</Link>
              </li>
              <li className='list__item'>
                <Link to='/booklist/genre/satire/mertvie_dushi/'>"Мёртвые души"</Link><Link to='/authorlist/gogol/'> Н.В.Гоголь</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}