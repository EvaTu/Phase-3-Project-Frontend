//imports

function NewAuthorForm({ newAuthorInput, setNewAuthor}) {

    const {name, image, desc} = newAuthorInput;

    return (
        <div className='form'>

            <h2>Additional Authors</h2>

            <form id='newAuthorForm' onSubmit={e => console.log(e)}>

                <input type='text'
                       className='formText'
                       placeholder='Name'
                       name='name'
                       value={name}
                       onChange={e => setNewAuthor({...setNewAuthor, [e.target.name]: e.target.value})} />

                <input type='text'
                       className='formText'
                       placeholder='Image'
                       name='image'
                       value={image}
                       onChange={e => setNewAuthor({...setNewAuthor, [e.target.name]: e.target.value})} />

                <input type='text'
                       className='formText'
                       placeholder='Description'
                       name='desc'
                       value={desc}
                       onChange={e => setNewAuthor({...setNewAuthor, [e.target.name]: e.target.value})} />

                <input type='submit'
                       value='Submit' />

            </form>

        </div>
    );

}

export default NewAuthorForm;