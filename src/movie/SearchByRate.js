import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa';

const SearchByRate = ({setSearchByRate}) => {
    const [rate, setRate] = useState(0);
    return (
        <div>
            {[...Array(5)].map((star, key) => {
                const ratingValue = key + 1;
                return (
                    <label key = {key}>
                        <input 
                            type = "radio"
                            name = "rating"
                            value = {ratingValue}
                            onClick ={() => setRate(ratingValue)}
                            onChange ={()=>setSearchByRate(ratingValue)}
                        >
                        </input>

                        <FaStar 
                            className = "star" 
                            size = {35}
                            color = {ratingValue <= rate ? "yellow" : "white"}
                        >    
                        </FaStar> 
                    </label>
                );
            })}   
        </div>
    );
}

export default SearchByRate;