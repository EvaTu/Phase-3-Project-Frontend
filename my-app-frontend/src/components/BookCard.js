// import React from './react';

function BookCard({ book }) {

    const placeHolder = 'https://www.ortn.edu/highschool/wp-content/uploads/sites/7/2017/11/book-stack.png'
    const {title, image=placeHolder, authors} = book 
    const authorNames = authors.map(author => <p key={author.name}>{author.name}</p>);


    return (
        <div className='bookCard' onClick={e => console.log(e)}>
            <h2>{title}</h2>
            <img src={image === '' ? placeHolder : image} alt={title} />
            <h3>Author(s):</h3>
            {authorNames}
        </div>
    );

}

export default BookCard;