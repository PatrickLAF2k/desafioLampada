import { useState } from "react";
import styled from "styled-components";

// Styles
const Botao = styled.button`
  display: flex;
  background-color: #007bff;
  color: #ffffff;
  margin: 0 auto;
  font-size: 2rem;
  padding: 10px 70px;
  border-radius: 30px;
  border: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 10px 100px #021bf8;
  }
  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 201px) and (max-width: 900px) {
    background-color: #b74794;
    padding: 10px 40px;
    &:hover {
      box-shadow: 0px 10px 100px #b74794;
    }
  }
`;

const Imagem = styled.img`
  display: flex;
  margin: 50px auto 0 auto;
  width: 30%;

  //celular
  @media (min-width: 201px) and (max-width: 500px) {
    margin: 150px auto 100px auto;
    width: 80%;
  }
  //tablet
  @media (min-width: 501px) and (max-width: 900px) {
    margin: 60px auto 0 auto;
    width: 70%;
  }
  //nootbook
  @media (min-width: 901px) and (max-width: 1500px) {
    margin: 30px auto 0 auto;
    width: 50%;
  }
`;

// Função
export default function Lampada() {
  const [lampada, setLampada] = useState(true);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <>
      <Imagem
        src={lampada ? "/lampada.png" : "/lampadaGenio.png"}
        alt="Lampada genio"
      />
      <Botao onClick={trocarLampada}>Clique Aqui</Botao>
    </>
  );
}
