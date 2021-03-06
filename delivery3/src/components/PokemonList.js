import { useEffect } from "react"
import Card from "./Card";
import style from "../css/PokemonList.module.css";
import { useCardContext } from './CardContextProvider';

import { Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import Data from '../db.json'



function PokemonList(){
    const {pokeCards, setPokeCards} = useCardContext(); 
    const {pokemons} = Data;
    
    

    useEffect(() =>{
        if(pokemons && pokeCards.length === 0){
            setPokeCards(pokemons.map((pokemon) =><Card key={pokemon.name} pokemon={pokemon}/> ))
        }
         
    }, [pokemons,setPokeCards]);

    
    return(
        <div id="cardContainer" className={style.container}>
            {pokeCards}
        </div>
        
    );
}

export default PokemonList;