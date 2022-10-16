import Moive from "../components/Movie";
import {useEffect,useState} from "react";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json/minimun_rating=8.0&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? 
        (<h1>Loading...</h1> 
      ) : (
        <div>
          {movies.map((movie) => (
            <Moive 
              key={movie.id} //key는 react에서만, map안에서 component들을 render할 때 사용
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
    );  
};

export default Home;