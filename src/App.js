import "./App.css";
import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import FeatureMovie from "./components/featureMovie/FeatureMovie";
import MovieRow from "./components/movieRow/MovieRow";



export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);


  useEffect(() => {
    const loadAll = async () => {
      // Getting all items
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // After getting the list I can get the feature Movie
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChoice = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChoice];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  },[])

  return (
    <div className="page">
      
      {featureData && 
        
        <FeatureMovie item={featureData} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}


// https://api.themoviedb.org/3/movie/550?api_key=32c7c1be7aa00b2bc275f61fb0aba6a3&language=pt-BR
