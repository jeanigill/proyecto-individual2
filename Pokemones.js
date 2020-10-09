import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./antd/dist/antd.css";

function Pokemones (props) {
  const [cards, setCards] = useState([]);

  const getCards = () => {
      axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic')
          .then(res => {
              console.log(res);
              setCards(res.data.cards)
         
          });
  }
  useEffect(() => {
      getCards();
  }, [])
}

//FALTA AGREGAR//

// const posts = [
//     {
//         title: "",
//         image_url:""
//     },
//     {
//         title: "",
//         image_url: "",
        
//     }
// ]

  return (
    <div className="Pokemones">
            <div>
          <h1>POKEMONS</h1>
          {
              cards.map(cards => {
                  return(
                      <div>
                          <h2>{cards.name}</h2>
                          <h2>{cards.number}</h2>
                          <h2>{cards.type}</h2>
                          <h2>{cards.artist}</h2>
                       </div>
                  )
              })
          }
      </div>
      <br></br>
      <div>
        <h1> LAS MEJORES IMAGENES </h1>
        {cards.image_url}
        {cards.name}
      </div>
    </div>
    
  );


export default Pokemones;
