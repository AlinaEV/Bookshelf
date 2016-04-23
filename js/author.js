var my_books = [
  {
    author: 'Т.Г.Шевченко',
    title: 'Кобзар'
  },
  {
    author: 'Ж.Верн',
    title: 'Таинственный остров'
  },
  {
    author: 'Н.В.Гоголь',
    title: 'Мёртвые души'
  }
];
var Authors = React.createClass({
  render: function() {
    var data = this.props.data;
    var authorsTemplate;

    if (data.length > 0) {
      authorsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
          	<p className="books__author">{item.author}</p>
            
          </div>
        )
      })
    } else {
      authorsTemplate = <p>К сожалению авторы книг отсутствуют</p>
    }

    return (
      <div className="books">
        {authorsTemplate}
        <strong className={'books__count '+ (data.length > 0 ? '':'none')}>Всего авторов: {data.length}</strong>
      </div>
    );
  }
});
var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h2>Перечень авторов</h2>
        <Authors data={my_authors} /> {/*добавили свойство data */}
        
      </div>
    );
  }
});
ReactDOM.render(
  <App />,
  document.getElementById('root')
);