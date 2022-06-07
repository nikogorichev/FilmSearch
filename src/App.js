import React, {useState} from "react";
import MoviesList from "./components/MoviesList";
import Search from "./components/Search";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  async function search (searchValue) {
    setLoading(true);
    setErrorMessage('');

    const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    const body = await response.json()
    console.log(body);

    setTimeout(() => {
      if (body.Response === "True") {
        setMovies(body.Search);
        setLoading(false);
      } else {
        setErrorMessage(body.Error);
        setLoading(false);
      }
    }, 1500)

    
  };

  return (
    <div className="App">
      <Search search={search} />
      {loading && !errorMessage ? (
         <span><Loader /></span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <MoviesList movies = {movies} />
        )}
    </div>
  );
}

export default App;
