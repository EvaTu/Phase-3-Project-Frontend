import { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

function BookDetails() {

    const [singleBook, setSingleBook] = useState({});

    const id = useParams().id;
    let history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:9292/books/${id}`)
        .then(resp => resp.json())
        .then(book => setSingleBook(book))
    }, [id])

    const {title, image, isbn, desc, publisher, authors} = singleBook
    // const authorNames = [];

    // if(authors.length > 0){authorNames};
    // console.log(authors)
    
    // const authorNames = authors.map(author => <p key={author.name}>{author.name}</p>);

    return (
        <div className='bookDetails'>
            <img src={image} alt={title}/>
            <h1>{title}</h1>
            {/* {authorNames} */}
            <h3>{publisher} Publishing House</h3>
            <p>ISBN-10: {isbn}</p>
            <p>{desc}</p>
            <Link to='/books' onClick={() => history.goBack()}>
                <button>Go Back</button>
            </Link>
        </div>
    );

}

export default BookDetails;