// import React from './react';

function NewBookForm({ newBookInput, setNewBook }) {

    const {title, image, isbn, desc, publisher, author} = newBookInput

    return (
        <div className='form'>

            <h2>Add A New Book!</h2>

            <form id='newBookForm' onSubmit={e => console.log(e)}>

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

              <input type='text'
                       className='formText'
                       placeholder='Author'
                       name='author'
                       value={author}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

              <input type='submit'
                     value='Submit' />

            </form>

        </div>
    );

}

export default NewBookForm;