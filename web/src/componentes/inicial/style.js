import styled from "styled-components"
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
    font-family: 'Secular One';
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`


export const Main = styled.main `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background: rgb(143,137,156);
    background: linear-gradient(140deg, rgba(143,137,156,0.2) 37%, rgba(37,37,61,0.2) 100%);
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.1); 
    width: 800px;
    height: 300px;
    border-radius: 20px;
    
    span {
        color: #FFBC00;
    }

    h1 {
        font-size: 50px;
        color: #FFFFFF;
    }
    
    button  {
    width: 250px;
    height: 60px;
    background: none;
    border: 2px solid #FFBC00;
    border-radius: 50px;
    cursor: pointer;
    }

    a {
        color: #FFBC00;
        text-decoration: none;
        font-size: 30px;
        font-weight: bold;
    }
` 


