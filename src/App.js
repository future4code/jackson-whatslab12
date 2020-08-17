import React from 'react';
import Mensagens from "./components/mensagens/MensagensComp"
import styled from "styled-components"

const Father = styled.body`
  display: flex;
  justify-content: center;
`;

const ContainerGrande = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  align-items: center;
  justify-items: center;
  height: 100vh;
  width:100vw;
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
  
