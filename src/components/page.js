import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  onBookBtnClick(e) {
    this.props.getBooks(+e.target.innerText)
  }
  render() {
    const { book, authors, fetching } = this.props
    return <div className='ib page'>
      <p>
        <button className='btn' onClick={::this.onBookBtnClick}>Кобзар</button>{' '}<br/><a href='#'>Т.Г.Шевченко</a><br/><br/>
        <button className='btn' onClick={::this.onBookBtnClick}>Таинственный остров</button>{' '}<br/><a href='#'>Ж.Верн</a><br/><br/>
        <button className='btn' onClick={::this.onBookBtnClick}>Мёртвые души</button><br/><a href='#'>Н.В.Гоголь</a><br/><br/>
      </p>
      
      <h3>Заголовок: {book} </h3>
      {
        fetching ?
        <p>Загрузка...</p>
        :
        <p>Автор: {authors}.</p>
        
      }
      <p>Жанр: </p>
        <p>Краткое содержание: </p>
    </div>
  }
}

Page.propTypes = {
  book: PropTypes.number.isRequired,
  authors: PropTypes.array.isRequired,
  getBooks: PropTypes.func.isRequired
}