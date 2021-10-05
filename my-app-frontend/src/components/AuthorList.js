import React from "react";
import AuthorCard from "./AuthorCard"

function AuthorList({getAuthors, setGetAuthors}){

    const authorsComponent = getAuthors.map(author =>
        <AuthorCard authorObj={author} key={author.id} />)


    return(
        <div>
            <ul className="author-cards">
                {authorsComponent}
            </ul>
        </div>
    )
}

export default AuthorList;