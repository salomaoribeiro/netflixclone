import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/movieRow/MovieRow";


export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Getting all items
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  },[])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}


// https://api.themoviedb.org/3/movie/550?api_key=32c7c1be7aa00b2bc275f61fb0aba6a3&language=pt-BR
