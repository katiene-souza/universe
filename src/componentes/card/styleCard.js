import styled from "styled-components";
import background from '../../assets/imagens/background.svg'

export const Section = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Secular+One&display=swap');
        * {
            margin: 0;
            padding: 0;
        }
    background-image: url(${background});
    background-position: center;
    background-repeat: repeat;
`
export const Nav = styled.nav `
    display: flex;
    flex-direction: row;
    justify-content: center; 
    font-family: 'Secular One';
    margin-bottom: 3.75rem;
    
   
    span {
        color: #FFBC00;
    }

    h1, button {
    font-size: 2.5rem;
    color: #FFFFFF;
    text-align: center;
    margin-top: 1.875rem;
    }

    button {
        background: none;
        border: none;
        margin-left: 3.75rem;
        margin-right: 3.75rem;

    }
`

export const Main = styled.main `
    position: relative;
    display: grid;
    grid-template-columns: 25rem  25rem  25rem;
    justify-content: center;
    align-items: center;
    font-family: 'Montserra'; 
    
    .flip-front, .flip-back {
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.8s ;
    cursor: pointer;
    margin: 0px 2.5rem 2.5rem 0.625rem;
   
    }  

    .flip-back  {
    transform: rotateY(180deg);
    }
` 

export const Front = styled.div`
    position: absolute;
    background: rgb(143,137,156);
    background: linear-gradient(140deg, rgba(143,137,156,0.3) 37%, rgba(37,37,61,0.2) 100%);
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.1); 
    backface-visibility: hidden; 
    width: 22rem;
    height: 27rem;
    border-radius: 0.625rem; 
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Back = styled.div `
    position: relative;
    background: linear-gradient(140deg, rgba(45, 34, 68, 1.0) 37%, rgba(37,37,61,1.0) 100%);
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.1);
    transform: rotateY(180deg);
    backface-visibility: hidden; 
    border-radius: 0.625rem;
    width: 22rem;
    height: 27rem;
   
    h1, p {
        color: #FFFFFF;
        text-align: justify;
        padding: 1rem;
    }
`

