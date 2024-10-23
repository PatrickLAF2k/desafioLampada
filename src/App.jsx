import styled, { createGlobalStyle } from "styled-components";
import Lampada from "./Components/Lampada";

// Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sevillana", cursive;
  }
  body{
    background-image: url("/Imagem palacio.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
  }
`;

const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 300;
  font-size: 4rem;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;

  //celular
  @media (max-width: 425px) {
    font-size: 2rem;
  }
  //tablet
  @media (min-width: 501px) and (max-width: 900px) {
    font-size: 2rem;
  }
  //nootbook
  @media (min-width: 901px) and (max-width: 1500px) {
    font-size: 3rem;
  }
`;

//Função
export default function App() {
  return (
    <main>
      <GlobalStyle />
      <Titulo>"Liberte a magia da programação com a lâmpada de Aladim."</Titulo>
      <Lampada />
    </main>
  );
}
