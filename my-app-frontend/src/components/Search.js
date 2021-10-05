import React, {useState} from "react"
import BookList from "./BookList"


function Search({booksList}) {

    const [searchBooks, setSearchBooks] = useState("")

    

    return(
        <div className="SearchBar">
            <input
                type="text"
                placeHolder="Search by book title"
                value={null}
                onChange={(e)=> console.log(e.target.value)}
                />
        </div>
    )
}

export default Search