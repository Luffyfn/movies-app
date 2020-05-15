import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import MoviesList from './MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './Images/No-image.png';

const MoviesContainer = () => {
    const [moviesList,setMoviesList] = useState([
        {
            title: "Dr Dolittle",
            year: 2020,
            image: "https://image.tmdb.org/t/p/w220_and_h330_face/4DrmaV7MzzBrlc33CMUgDdS66uN.jpg",
            rating: 8,
            description: "After the loss of his wife seven years earlier, the eccentric Dr. John Dolittle, the famous doctor and veterinarian of Queen Victoria's England, isolates himself behind the walls of his manor house, with only his menagerie of exotic animals as his company. But when the young Queen falls seriously ill, Dr. Dolittle, initially reluctant, is forced to set sail for a mythical island in an epic adventure in search of a cure."
        },
    
        {
            title: "Inception",
            year: 2010,
            image: "https://image.tmdb.org/t/p/w220_and_h330_face/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg",
            rating: 9,
            description: "Dom Cobb is an experienced thief - the best there is in the perilous art of extraction: his specialty is to steal a person's most precious secrets, buried deep in his subconscious mind, while he is dreaming and his mind is particularly vulnerable. Highly sought after for his talents in the murky world of industrial espionage, Cobb has also become a fugitive hunted around the world who has lost everything he holds dear. But a final mission could allow him to return to his former life - provided he can accomplish the impossible: inception. Instead of stealing a dream, Cobb and his team must do the opposite: implant an idea in the mind of an individual. If they succeed, it could be the perfect crime. And yet, however methodical and gifted they are, nothing could have prepared Cobb and his partners for a formidable enemy that seems to be systematically one step ahead of them. An enemy that only Cobb could have suspected existed."
        },
    
        {
            title: "Kick-Ass",
            year: 2010,
            image: "https://image.tmdb.org/t/p/w220_and_h330_face/jFtuQz74W6GQQ6auLI2jATctjA.jpg",
            rating: 4,
            description: "Dave Lizewski is a comic-book-filled teenager who lives only for this world of superheroes and incredible adventures. Determined to live his obsession in reality, he chooses a name for himself - Kick-Ass - makes himself a costume, and launches into a frantic battle against crime. In his delirium, he has only one problem: Kick-Ass doesn't have the slightest superpower? He's being chased by every bully in town. But Kick-Ass soon joins forces with other delusional copycats who are also determined to see justice done. Among them, an 11-year-old girl, Hit Girl and her father Big Daddy, but also Red Mist. The godfather of the local mafia, Frank D'Amico, will give them the opportunity to show what they are capable of..."
        }
    ]);

    const [title, setTitle] = useState ("");
    const [year, setYear] = useState ("");
    const [image, setImage] = useState ("");
    const [rating, setRating] = useState ("");
    const [description, setDescription] = useState ("");

    const [modalShow, setModalShow] = useState(false);

    const openModal = () => setModalShow(true);;
    const closeModal = () => setModalShow(false);

    const addMovie = (event) =>{
        event.preventDefault();
        let newMovie = {
            title: event.title.value ? event.title.value : "No Title",
            year: event.year.value ? event.year.value : 1980,
            image: event.image.value ? event.image.value : {Image},
            rating: event.rating.value ? event.rating.value : 1,
            description: event.description.value ? event.description.value : "No Description"
        };
        return setMoviesList([...moviesList, newMovie]);
    }

    return (
        <div>
            <h1>Movies List</h1>
            <p>We have {moviesList.length} movies</p>
            <div className = "buttons">
                <button className = "btn btn-success" onClick = {openModal}>+</button>
                <button className = "btn btn-warning">Filter by Name</button>
                <button className = "btn btn-warning">Filter by Rate</button>
            </div>

            <MoviesList movies = {moviesList} />

            <Modal show = {modalShow} onhide = {closeModal}>
                <div className = "modal-header">
                        <h2 className = "modal-title">ADDING NEW MOVIE</h2>
                        <button className = "btn btn-danger btn-sm" onClick = {closeModal}>x</button>
                </div>
                <Modal.Body>
                    <form className = "form-group" onSubmit = {addMovie}>
                        <div className = "form-group">
                            <label htmlFor = "title" class="col-sm-3 col-form-label">Title: </label>
                            <input 
                                type = "text" 
                                className = "form-control" 
                                id = "title" 
                                placeholder = "Title"
                                value = {title} 
                                onChange = {event => setTitle(event.target.value)}
                            />
                        </div>
                        
                        <div className = "form-group">
                            <label hmtlFor = "year" class="col-sm-3 col-form-label">Year: </label>
                            <input 
                                type = "number" 
                                className = "form-control" 
                                id = "year" 
                                placeholder = "Year"
                                min = "1980"
                                max = "2020"
                                value = {year}
                                onChange = {event => setYear(event.target.value)}
                            />
                        </div>
                        
                        <div className = "form-group">
                            <label htmlFor = "image" class="col-sm-3 col-form-label">Image: </label>
                            <input 
                                type = "url" 
                                className = "form-control" 
                                id = "image" 
                                placeholder = "image"
                                value = {image}
                                onChange = {event => setImage(event.target.value)}
                            />
                        </div>
                        
                        <div className = "form-group">
                            <label htmlFor = "rate" class="col-sm-3 col-form-label">Rate: </label>
                            <input 
                                type = "number" 
                                className = "form-control" 
                                id = "rate" 
                                placeholder = "Rate"
                                min = "1"
                                max = "10"
                                value = {rating}
                                onChange = {event =>setRating(event.target.value)}
                            />
                        </div>
                        
                        <div className = "form-group">
                            <label htmlFor = "description" class="col-sm-3 col-form-label">Description: </label>
                            <textarea 
                                type = "text" 
                                className = "form-control" 
                                id = "description" 
                                placeholder = "Description"
                                value = {description}
                                onChange = {event => setDescription(event.target.value)}
                            />
                        </div>
                        
                        <button type = "submit" class="btn btn-primary">Add New Movie</button>                
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MoviesContainer;
