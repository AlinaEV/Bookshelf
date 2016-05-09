import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Genre from './components/Genre'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Booklist from './components/Booklist'
import Authorlist from './components/Authorlist'
import Book from './components/Book'
import Author from './components/Author'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='booklist' component={Booklist} />
        <Route path='/booklist/genre/:genre' component={Genre}>
          {/* добавили новый route */}
          <Route path='/booklist/genre/:genre/:book' component={Book} />
      </Route>
      <Route path='authorlist' component={Authorlist} />
        <Route path='/authorlist/:author' component={Author} />
    </Route>
    {/* для всех остальных роутов: показывай NotFound */}
    <Route path='*' component={NotFound} />
  </div>
)