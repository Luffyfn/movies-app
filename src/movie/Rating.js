import React from 'react';
import {FaStar} from 'react-icons/fa';

const Rating = (props) => {
    return (
        <div>
            {[...Array(5)].map((star, key) => {
                const ratingValue = key + 1;
                return (
                    <FaStar key = {key}
                        size = {30}
                        color = {ratingValue <= props.rate ? "yellow" : "white"}
                    >    
                    </FaStar> 
            )})}   
        </div>
    )
}

export default Rating;
