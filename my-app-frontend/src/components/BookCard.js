import { Link } from 'react-router-dom';
function BookCard({ book }) {

    const placeHolder = 'https://www.ortn.edu/highschool/wp-content/uploads/sites/7/2017/11/book-stack.png'

    const {title, image=placeHolder, id} = book 



    return (
        <Link to={`/books/${id}`}>
            <div className='bookCard' onClick={e => console.log(e.target.className)} id={id}>
                {/* <h2>{title}</h2> */}
                <img src={image === '' ? placeHolder : image} alt={title} />
            </div>
        </Link>
    );

}

export default BookCard;