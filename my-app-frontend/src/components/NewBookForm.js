// import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


function NewBookForm({ newBookInput, setNewBook, handleSubmit, getAuthors }) {

    const animatedComponents = makeAnimated();
    const authorNames = [];

    getAuthors.map(author => authorNames.push({value: author.name, label: author.name, id: author.id}))
//     console.log(getAuthors)

    const {title, image, isbn, desc, publisher, author} = newBookInput
//     const [selectedTwo, setSelectedTwo] = useState([])

    return (
        <div className='form'>

            <h2>Add A New Book!</h2>
            <p>PLEASE NOTE: If you can't find your author, please create them first!</p>

            <form id='newBookForm' onSubmit={e => handleSubmit(e)}>

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

              <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                     value={author}
                    onChange={e => setNewBook(formerBook => ({...formerBook, author: e}))}
                    defaultValue={[authorNames[4]]}
                    isMulti
                    options={authorNames} />

              <input type='submit'
                     value='Submit' />

            </form>
 
        </div>
    );

}

export default NewBookForm;