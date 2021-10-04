// import React from './react';

function NewBookForm({ newBookInput, setNewBook }) {

    const {title, image, isbn, desc, publisher} = newBookInput

    return (
        <div className='newBookForm'>

            <h2>Add A New Book!</h2>

            <form id='newBookForm'>

                <input type='text'
                       className='formText'
                       placeholder='Title'
                       name='title'
                       value={title}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

                <input type='text'
                       className='formText'
                       placeholder='Cover Image'
                       name='image'
                       value={image}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

                <input type='text'
                       className='formText'
                       placeholder='ISBN-10'
                       name='isbn'
                       value={isbn}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

                <input type='text'
                       className='formText'
                       placeholder='Description'
                       name='desc'
                       value={desc}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

                <input type='text'
                       className='formText'
                       placeholder='Publisher'
                       name='publisher'
                       value={publisher}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

            </form>

        </div>
    );

}

export default NewBookForm;