import React, {useEffect} from "react";
import Tmdb from "./Tmdb";


export default () => {

  useEffect(() => {
    const loadAll = async () => {
      // Getting all items
      let list = Tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  },[])

  return (
    <div>
      Olá mundo!
    </div>
  );
}


// https://api.themoviedb.org/3/movie/550?api_key=32c7c1be7aa00b2bc275f61fb0aba6a3&language=pt-BR
