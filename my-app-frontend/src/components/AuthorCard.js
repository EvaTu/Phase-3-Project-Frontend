import React from 'react';

function AuthorCard({authorObj}) {
    const {image, name, desc} = authorObj


    return (
        
            <div className="author-card">
                <img className="cardImage" src={image} alt={name} />
                <h3>Author Name: {name}</h3>
                <h4>Author Bio: {desc}</h4>
                
            </div>
            
        
    );

}

export default AuthorCard;