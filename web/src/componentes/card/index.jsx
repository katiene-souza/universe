import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Back, Front, Main, Nav, Section } from './styleCard'

import leftArrow from '../../assets/imagens/left-arrow.svg'


export default function Card () {

    const [cards, setCards] = useState([]);
    const [flip, setFlip] = useState(false);
   
    const getCard = async() => {
        try {
            const response = await axios.get("http://localhost:5173/src/componentes/API/API.json?t=168");
            const data = response.data;

            setCards(data);

        }catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
       getCard();
    },[]);

    return (
        <Section>
            <Nav>
                <button><Link to='/'><img src={leftArrow}/></Link></button>
                <h1>Começando pela nossa <span>estrela!</span></h1>
            </Nav>
                      
            <Main>  
                {cards.map((card, index) => {
                    return (
                    <div className={`card ${flip === card.id ? "flip-back" : "flip-front"}`}  key={`card-${index}`}>

                        <Front onClick={() => setFlip(card.id)}>
                            <img src={card.imageUrl} />
                        </Front> 
                        
                        <Back onClick={() => setFlip(!flip)}> 
                            <h1>{card.name}</h1>
                            <p>{card.description}</p>
                        </Back>
                    </div>
                    )
                })}
            </Main>  
        </Section> 
    ) 
}

