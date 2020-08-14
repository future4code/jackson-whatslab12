import React from 'react';
import Mensagens from "./components/mensagens/MensagensComp"
import styled from "styled-components"

const ContainerGrande = styled.main`
    display: flex;
    flex-direction: column;
    align-self: center;
    border: 1px solid;
    width: 500px;
    height: 20em;
    margin-left: 30em;
    background-color:#b8bfd8;
  
`


function App() {
  return (
    <ContainerGrande>
        <Mensagens/>
    </ContainerGrande>
  );
}

export default App;
  