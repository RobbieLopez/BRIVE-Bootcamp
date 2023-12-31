import { useNavigate } from "react-router-dom";
export function Characters({character}){
    console.log(character);
    const navigate = useNavigate();
    return(
        <div className="card">
            <h1>{character.name}</h1>
            <img src={character.image} alt=""/>
            <div className="card-description">
            <p><strong>Location:</strong> {character.location.name}</p>
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Specie:</strong> {character.species}</p>
            </div>
            
            <button className="card-button" onClick={()=> navigate(`/character/${character.id}`)}>More</button>
        </div>
    )
}