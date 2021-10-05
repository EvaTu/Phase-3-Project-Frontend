// import React from './react';
import BookCard from "./BookCard";

function BookList({ booksList }) {
 
    const books = booksList.map(book => <BookCard book={book} key={book.id} />);

    return (
        <div>
            {books}
        </div>
    );

}

export default BookList;