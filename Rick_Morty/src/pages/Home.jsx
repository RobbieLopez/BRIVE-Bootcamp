import { useEffect, useState } from 'react';
import '../App.css';
import { Characters } from '../components/Characters';
export function Home(){
    const [characters, setCharacters] = useState([]);
  function getCharacters(pageNumber = 1) {
    const res = fetch("https://rickandmortyapi.com/api/character/?page=1git s")
      .then(response => response.json())
      .then(({ results }) => results)
      .catch(() => []);
      return res;
  }
  async function consoleCharacters() {
    const resp = await getCharacters();
    setCharacters(resp);
  }

  //Es un hook que nos permite ejecutar cierta funcionalidad en el ciclo de vida de cierto compoenente
  useEffect(()=>{
    console.log(consoleCharacters()) 
  }, []);
    return(
        <div className="App">
      
      <div className="Hero">
        <h1>Rick and morty</h1>
        <h1>See all the caracters and more </h1>
      </div>
      <main className='card-main'><h1>Characters list</h1>
      <hr />
      <div className="card-container">
        {
        (characters && characters.length > 0) && characters.map(character => (<Characters character={character} />))
        }
      </div>
      </main>
      
    </div>
  );
}