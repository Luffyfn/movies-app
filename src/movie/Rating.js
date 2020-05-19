import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa';

function Rating(props) {
    return (
        <div>
            {[...Array(5)].map((star, key) => {
                const ratingValue = key + 1;
                return (
                    <FaStar 
                        className = "star" 
                        size = {30}
                        color = {ratingValue <= props.rate ? "yellow" : "white"}
                    >    
                    </FaStar>     
            )})}
        </div>
    )
}

export default Rating
