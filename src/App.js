import React from 'react';
import Mensagens from "./components/mensagens/MensagensComp"
import styled from "styled-components"

const Father = styled.body`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
`;

const ContainerGrande = styled.main`
  display: flex;
  flex-direction: column;
  align-self: center;
  border: 1px solid;
  width: 100vw;
  height: 100vh;
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 15px;
  background-color:#f8f2fb;

  @media (min-width: 698px){
    max-width: 75vw;
  }
`;

function App() {
  return (
    <Father>
      <ContainerGrande>
        <Mensagens/>
      </ContainerGrande>
    </Father>
  );
};

export default App;
  
