//console.log(React);
//console.log(ReactDOM);

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

var Books = React.createClass({
  render: function() {
    var data = this.props.data;
    var booksTemplate;

    if (data.length > 0) {
      booksTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        )
      })
    } else {
      booksTemplate = <p>К сожалению книги отсутствуют</p>
    }

    return (
      <div className="books">
        {booksTemplate}
        <strong className={'books__count '+ (data.length > 0 ? '':'none')}>Всего книг: {data.length}</strong>
      </div>
    );
  }
});
/*var getRequest = {
      send: function(url, idHtml,data) {
                             if(!url)
                                  return false; 
                             jQuery.ajax({
                             url: url,
                             data: data, //Это Массив с элементами для передачи 
                             type: "POST",
                             success: function (callback) {
                                       jQuery("#" + idHtml).html(callback);
                             },
                              error: function () {
                                       alert("Error get response from server");
                              }

                       });
      }

}jQuery("a").click(function(event) {
           getRequest.send(event.target.attr.href, "#MyBigAjaxElement", NULL);
           return false;
	});*/


var Article = React.createClass({
  render: function() {
    var author = this.props.data.author,
        title = this.props.data.title;
    
    return (
      <div className="article">
        <a href="book.html" className="books__title">{title}: </a>
        <a href="author.html" className="books__author">{author}</a>
      </div>
      //<div id="MyBigAjaxElement"></div> //Сюда попадет то, что мы получим при клике по ссылке выше.

    )
  }
});


var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h2>Перечень доступных книг</h2>
        <Books data={my_books} /> {/*добавили свойство data */}
        
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);