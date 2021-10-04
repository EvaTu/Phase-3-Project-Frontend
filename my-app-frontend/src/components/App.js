import '../App.css';

import { useState } from 'react';

import Header from './Header';
import NewBookForm from './NewBookForm';
import BookList from './BookList';


function App() {

  const [newBookInput, setNewBook] = useState(
    {title: '', image: '', isbn: '', desc: '', publisher: ''});

    console.log(newBookInput)

  return (
    <div className="App">

      <Header />

      <NewBookForm newBookInput={newBookInput}
                   setNewBook={setNewBook} />

      <BookList />
      
    </div>
  );
}

export default App;
