import React from 'react';

const Movies = (props) => {
    return(
        <div>
            <ul>
                <li>
                    My favourite movie is {props.favouriteMovie} 
                </li>

                <li>
                    My favourite character is {props.favouriteCharacter}
                </li>
            </ul>
        </div>
    )
}
export default Movies;