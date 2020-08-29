import React from 'react'



function Card(props){
    return(
        <div>
            <article>
                <img src={`${props.src}`} alt="icon" />
                <h2>{props.heading}</h2>
                <p>{props.ptext}</p>
            </article>
        </div>
    )
}







export default Card;