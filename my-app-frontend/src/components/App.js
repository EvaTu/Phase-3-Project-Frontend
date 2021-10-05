import '../App.css';

import { useState, useEffect } from 'react';

import Header from './Header';
import NewBookForm from './NewBookForm';
import NewAuthorForm from './NewAuthorForm';
import BookList from './BookList';


function App() {

  const [newBookInput, setNewBook] = useState(
    {title: '', image: '', isbn: '', desc: '', publisher: '', author: ''});

  const [newAuthorInput, setNewAuthor] = useState(
    {name: '', image: '', desc: ''}
  );

  useEffect(() => {
    fetch(`http://localhost:9292/books`)
    .then(resp => resp.json())
    .then(books => console.log(books))
  },[]);

  function handleSubmit(e) {
    e.preventDefault();
    if(e.target.id === 'newBookForm') 
    {console.log('new book added')}
    else 
    {console.log('new author added')}
  }

  return (
    <div className="App">

      <Header />

      <NewBookForm newBookInput={newBookInput}
                   setNewBook={setNewBook}
                   handleSubmit={handleSubmit} />

      <NewAuthorForm newAuthorInput={newAuthorInput}
                     setNewAuthor={setNewAuthor}
                     handleSubmit={handleSubmit} />

      <BookList />
      
    </div>
  );
}

export default App;
