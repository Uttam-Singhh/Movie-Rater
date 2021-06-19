import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [movies, setMovie] = useState(['Movie 1', 'Movie 2']);

  useEffect(() => {
    fetch("http://127.0.0.1.8000/api/movies",{
    method: "GET",
    headers: {
      'Content-Type':'application/json',
      'Authorization': 'Token '
    }
    })
    .then(resp =>resp.json())
    .then(resp => setMovie(resp))
    .catch( error => console.log(error))
  }, [input])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <div>
          {movies.map(movie => {
            return <h2>{movie.title}</h2>
          })}
          
        </div>
        <div>Movie Details</div>
      </div>
    </div>
  );
}

export default App;
