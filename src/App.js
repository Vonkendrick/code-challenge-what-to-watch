//import {MovieData} from "./data";

import React, {useState} from "react";



function App () {
  const [title, setTitle] = useState()
console.log(title);

const [movie, setMovie] = useState()
console.log(movie)
 

  function searchTitle () {
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=94fce328`)
    .then(res=>res.json())
    .then(data=>setMovie(data));

  }


  return (
    <div className="App">
        <input type="text" onChange={event=>setTitle(event.target.value)}/>
        <button onClick={()=>searchTitle()}>search</button> 
        
      <div>{movie && movie.Title}</div>
      <div>{movie && movie.Plot}</div>
      <div>{movie && movie.Released}</div>
    

      
    </div>
        
  );
}

export default App;
