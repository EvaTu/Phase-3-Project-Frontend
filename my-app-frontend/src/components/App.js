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


  return (
    <div className="App">

      <Header />

      <NewBookForm newBookInput={newBookInput}
                   setNewBook={setNewBook} />

      <NewAuthorForm newAuthorInput={newAuthorInput}
                     setNewAuthor={setNewAuthor} />

      <BookList />
      
    </div>
  );
}

export default App;
