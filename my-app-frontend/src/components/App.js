import './App.css';

import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Search from './Search';

import NewBookForm from './NewBookForm';
import NewAuthorForm from './NewAuthorForm';

import BookList from './BookList';
import AuthorList from './AuthorList';


function App() {

  const [newBookInput, setNewBook] = useState(
    {title: '', image: '', isbn: '', desc: '', publisher: ''}
    );

  const [newAuthorInput, setNewAuthor] = useState(
    {name: '', image: '', desc: ''}
    );

  const [booksList, setBooksList] = useState([]);

  const [getAuthors, setGetAuthors] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/authors")
    .then(response => response.json())
    .then(authorArr => setGetAuthors(authorArr))
    }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/books`)
    .then(resp => resp.json())
    .then(books => setBooksList(books))
  },[]);

  function handleSubmit(e) {

    e.preventDefault();

    if(e.target.id === 'newBookForm') 
    {fetch(`http://localhost:9292/books`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newBookInput)})
      .then(resp => resp.json())
      .then(data => console.log(data))
    }
    else 
    {fetch(`http://localhost:9292/authors`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newAuthorInput)})
      .then(resp => resp.json())
      .then(data => console.log(data))
    }
  }

  return (
    <div className="App">

      <Header />
      <Search />

      <Switch>

        <Route path='/books/new'>
          <NewBookForm newBookInput={newBookInput}
                      setNewBook={setNewBook}
                      handleSubmit={handleSubmit} />
        </Route>

        <Route path='/authors/new'>
          <NewAuthorForm newAuthorInput={newAuthorInput}
                      setNewAuthor={setNewAuthor}
                      handleSubmit={handleSubmit} />
        </Route>

        <Route path='/books'>
          <BookList booksList={booksList} />
        </Route>

        <Route path='/authors'>
          <AuthorList getAuthors={getAuthors} 
                    setGetAuthors={setGetAuthors}/>
        </Route>

        <Route path='/'>
          <BookList booksList={booksList} />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
