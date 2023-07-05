import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { EpisodeList } from "./EpisodesList";
export function CharacterInfo(){
    const [characterInfo, setCharacterInfo] = useState();
    const params = useParams();
    function getCharacters(pageNumber = 1) {
        const res = fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
          .then(response => response.json())
          .then(({ results }) => results)
          .catch(() => []);
          return res;
      }
      async function getCharacterInfo() {
        const resp = await getCharacters();
        setCharacterInfo(resp);
      }

      useEffect(()=>{
        console.log(getCharacterInfo()); 
      }, [params.id])


    return(
        <p>Nombre</p>
       
    )
}