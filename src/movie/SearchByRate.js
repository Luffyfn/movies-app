import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa';

const SearchByRate = ({setSearchByRate}) => {
    const [rate, setRate] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div>
            {[...Array(5)].map((star, key) => {
                const ratingValue = key + 1;
                return (
                    <label key = {key} onMouseLeave = {() => setRate(0)}>
                        <input 
                            type = "radio"
                            name = "rating"
                            value = {ratingValue}
                            onClick = {() => setRate(ratingValue)}
                            onChange = {() => setSearchByRate(ratingValue)}
                        >
                        </input>

                        <FaStar 
                            className = "star" 
                            size = {35}
                            color = {ratingValue <= (hover || rate) ? "yellow" : "white"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                        >    
                        </FaStar> 
                    </label>
                );
            })}
        </div>
    );
}

export default SearchByRate;