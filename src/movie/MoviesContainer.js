import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import SearchByRate from './SearchByRate';
import MoviesList from './MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MoviesContainer.css';
import Image from '../Images/No-image.png';

                            /******************** MoviesList ********************/

const MoviesContainer = () => {
    const [moviesList,setMoviesList] = useState([
        {
            title: "Dr Dolittle",
            year: 2020,
            image: "https://image.tmdb.org/t/p/w220_and_h330_face/4DrmaV7MzzBrlc33CMUgDdS66uN.jpg",
            rating: 4,
            description: "After the loss of his wife seven years earlier, the eccentric Dr. John Dolittle, the famous doctor and veterinarian of Queen Victoria's England, isolates himself behind the walls of his manor house, with only his menagerie of exotic animals as his company. But when the young Queen falls seriously ill, Dr. Dolittle, initially reluctant, is forced to set sail for a mythical island in an epic adventure in search of a cure."
        },
    
        {
            title: "Inception",
            year: 2010,
            image: "https://image.tmdb.org/t/p/w220_and_h330_face/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg",
            rating: 5,
            description: "Dom Cobb is an experienced thief - the best there is in the perilous art of extraction: his specialty is to steal a person's most precious secrets, buried deep in his subconscious mind, while he is dreaming and his mind is particularly vulnerable. Highly sought after for his talents in the murky world of industrial espionage, Cobb has also become a fugitive hunted around the world who has lost everything he holds dear. But a final mission could allow him to return to his former life - provided he can accomplish the impossible: inception. Instead of stealing a dream, Cobb and his team must do the opposite: implant an idea in the mind of an individual. If they succeed, it could be the perfect crime..."
        },
    
        {
            title: "Kick-Ass",
            year: 2010,
            image: "https://image.tmdb.org/t/p/w220_and_h330_face/jFtuQz74W6GQQ6auLI2jATctjA.jpg",
            rating: 2,
            description: "Dave Lizewski is a comic-book-filled teenager who lives only for this world of superheroes and incredible adventures. Determined to live his obsession in reality, he chooses a name for himself - Kick-Ass - makes himself a costume, and launches into a frantic battle against crime. In his delirium, he has only one problem: Kick-Ass doesn't have the slightest superpower? He's being chased by every bully in town. But Kick-Ass soon joins forces with other delusional copycats who are also determined to see justice done. Among them, an 11-year-old girl, Hit Girl and her father Big Daddy, but also Red Mist. The godfather of the local mafia, Frank D'Amico, will give them the opportunity to show what they are capable of..."
        }
    ]);


                            /******************** Movie States ********************/
    
                            const [title, setTitle] = useState ("");
    const [year, setYear] = useState ("");
    const [image, setImage] = useState ("");
    const [rating, setRating] = useState ("");
    const [description, setDescription] = useState ("");


                            /******************** Search State ********************/     
    
    const [searchByRate, setSearchByRate] = useState (0);
    const [searchValue, setSearchValue] = useState("");


                            /******************** Display Modal ********************/     
    const [modalShow, setModalShow] = useState(false);
    const openModal = () => setModalShow(true);;
    const closeModal = () => setModalShow(false);


                            /******************** Add New Movie ********************/       
    const addMovie = (event) =>{
        event.preventDefault();
        let newMovie = {
            title: title ? title : "No Title",
            year: year ? year : 1980,
            image: image ? image : {Image},
            rating: rating ? rating : 1,
            description: description ? description : "No Description"
        };
        return setMoviesList([...moviesList, newMovie]);
    }


                            /******************** Input Change ********************/         
        
        const searchInputChanges = (e) => {
            setSearchValue(e.target.value);
        }
        console.log(searchByRate);
     
                            /******************** App Return ********************/     
    
    return (
        <div className = "container">
            <h1>Movies List</h1>


                            {/******************** Input Search and Buttons ********************/}                 
            
            <div className = "flex">
                <input 
                    value = {searchValue} 
                    className = "form-control-lg" 
                    placeholder = "Search Movie" 
                    type = "text" 
                    onChange = {searchInputChanges}
                />
                
                <div 
                    className = "btn btn-primary btn-lg" 
                    onClick = {() => setSearchByRate(0)} 
                >
                Update</div>

                <div className = "rate">
                    <SearchByRate setSearchByRate = {setSearchByRate}/>   
                </div>
                
                <div className = "buttons">
                    <button className = "btn btn-success btn-lg" onClick = {openModal}>Add Movie</button>
                </div>
            </div>  
            
            <div className = "moviesList">
                <MoviesList 
                    movies = {
                        (searchValue === "" && searchByRate === 0) ? moviesList : (searchValue && searchByRate === 0) 
                        ? moviesList.filter(item => item.title.toLowerCase().indexOf(searchValue) !== -1) 
                        : moviesList.filter(item => item.rating == searchByRate)  
                    } 
                />
            </div>


                            {/******************** Modal ********************/}     
            
            <Modal show = {modalShow} onHide = {closeModal}>
                <div className = "modal-header">
                        <h2 className = "modal-title">ADDING NEW MOVIE</h2>
                        <button className = "btn btn-danger btn-sm" onClick = {closeModal}>x</button>
                </div>
                <Modal.Body>
                    <form className = "form-group" onSubmit = {addMovie}>
                        <div className = "form-group">
                            <label htmlFor = "title" className="col-sm-3 col-form-label">Title: </label>
                            <input 
                                type = "text" 
                                className = "form-control" 
                                id = "title" 
                                placeholder = "Title" 
                                onChange = {event => setTitle(event.target.value)}
                            />
                        </div>
                        
                        <div className = "form-group">
                            <label hmtlFor = "year" className="col-sm-3 col-form-label">Year: </label>
                            <input 
                                type = "number" 
                                className = "form-control" 
                                id = "year" 
                                placeholder = "Year"
                                min = "1980"
                                max = "2020"
                                onChange = {event => setYear(event.target.value)}
                            />
                        </div>
                        
                        <div className = "form-group">
                            <label htmlFor = "image" className="col-sm-3 col-form-label">Image: </label>
                            <input 
                                type = "url" 
                                className = "form-control" 
                                id = "image" 
                                placeholder = "image"
                                onChange = {event => setImage(event.target.value)}
                            />
                        </div>
                        
                        <div className = "form-group">
                            <label htmlFor = "rate" className="col-sm-3 col-form-label">Rate: </label>
                            <input 
                                type = "number" 
                                className = "form-control" 
                                id = "rate" 
                                placeholder = "Rate"
                                min = "1"
                                max = "5"
                                onChange = {event => setRating(event.target.value)}
                            />
                        </div>
                        
                        <div className = "form-group">
                            <label htmlFor = "description" className="col-sm-3 col-form-label">Description: </label>
                            <textarea 
                                type = "text" 
                                className = "form-control" 
                                id = "description" 
                                placeholder = "Description"
                                onChange = {event => setDescription(event.target.value)}
                            />
                        </div>
                        
                        <button type = "submit" className="btn btn-primary" onClick = {closeModal}>Add New Movie</button>                
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MoviesContainer;
