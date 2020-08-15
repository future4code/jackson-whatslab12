import React from 'react'
import styled from "styled-components"

const ContainerGrande = styled.div`
`;

const BoxMessage = styled.section`
    display: flex;
    flex-direction: column;
`


const WrapMessages = styled.section`
    display: flex;
    flex-direction:row;
    height: 70vh;
    width: 90vw;
    margin-bottom: 10px;
    align-items: flex-end;
    padding-left: 20px;

    @media (min-width: 698px){
        width: 85%;
    }
`;

const CaixaMensagem = styled.section`
    display:flex;
    flex-direction: column;
    border: 1px solid #d3d3d3;
    justify-content: center;
    padding-left: 16px;
    margin: 17px 7px;
    height: 10vh;
    width: 70vw;
    border-radius: 25px;
    background-color: white;
    box-shadow: 5px 5px 3px #d3d3d3;
    font-size: 1.1rem;

    @media (min-width: 698px){
        max-width: 50vw;
        height: 13vh;
        font-size: 2rem;
        padding-left: 2.5rem;
        font-weight: 400;
        height: 6rem;
    }
`;

const WrapContainer = styled.section`
    display:flex;
    flex-wrap: wrap;
    width: 90vw;

    @media (min-width: 698px){
        max-width: 95%;
        align-items: baseline;
        padding-top: 30px;
        padding-left: 15px;
    }
`;

const InputMensagem = styled.input`
    border-radius: 10px;
    border: 1px solid;
    box-shadow: -2px 3px 3px;
    font-size: 1.2rem;
    padding-left: 10px;
    margin: 6px 5px 5px 10px;
    width: ${props =>{
        if(props.tamanho === "pequeno"){
            return "90px"
        }else if(props.tamanho === "grande"){
            return "300px"
        }
    }};
    height: ${props =>{
        if(props.tamanho === "pequeno"){
            return "30px"
        }else{
            return "30px"
        }
    }}; 

    &:focus{
        outline:none;
        box-shadow: -2px 3px purple;
    };

    @media (min-width: 698px){
        width: ${props =>{
        if(props.tamanho === "pequeno"){
            return "130px"
        }else if(props.tamanho === "grande"){
            return "57%"
        }
        }};
        height: ${props =>{
        if(props.tamanho === "pequeno"){
            return "50px"
        }else{
            return "60px"
        }
    }}; 
        font-size: 1.5rem;
        padding-left: 15px;
    };
`;

const CaixaButton = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`;

const Botao = styled.button`
    width: 150px;
    height: 30px;
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: 700;
    border: 1px solid;
    box-shadow: 2px 3px 2px;
    &:focus{
        outline:none;
    }

    @media (min-width: 698px){
        width: 190px;
        height: 40px;
        font-size: 1.7rem;
    }
`;


export class Mensagens extends React.Component{
    state = {
        message: [
            {
            remetente: "Claudia",
            mensagem: "Olar, tudo bom?"
        },
        {
            remetente: "Yvini",
            mensagem: "Oie. tudo sim. E vc?"
        },
        {
            remetente: "Caio",
            mensagem: "E ai, gente, tudo legal?"
        }
        ],
        valorInputRemetente: "",
        valorInputMensagem: ""
    };

    novoUsuario = () => {
            if(this.state.valorInputRemetente !== "" && this.state.valorInputMensagem !== ""){
                const novaMensagem = {
                    remetente: this.state.valorInputRemetente,
                    mensagem: this.state.valorInputMensagem
                };
        
                const mensagemNova = [...this.state.message, novaMensagem];
                this.setState({message: mensagemNova})
            }
        this.setState({valorInputRemetente: "", valorInputMensagem: ""});
    };

    onChangeInputRemetente = (event) =>{
        this.setState({valorInputRemetente: event.target.value});
    };

    onChangeInputMensagem = (event) =>{
        this.setState({valorInputMensagem: event.target.value});
    };

    render() {
        const listaDeMensagem = this.state.message.map ((messages) => {
            return (
                <CaixaMensagem>
                    {messages.remetente} - {messages.mensagem}
                </CaixaMensagem>
            );
    
        });

        return (
            <ContainerGrande>
                <WrapMessages>
                    <BoxMessage>
                        {listaDeMensagem}
                    </BoxMessage>
                </WrapMessages>
                 
                <WrapContainer>
                    <InputMensagem tamanho = {"pequeno"}
                        value={this.state.valorInputRemetente}
                        onChange={this.onChangeInputRemetente}
                        placeholder={"usuário"}
                    />
                    <InputMensagem tamanho = {"grande"}
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                        placeholder={"mensagem"}
                    />
                </WrapContainer>
                <CaixaButton>
                   <Botao onClick={this.novoUsuario}>Enviar</Botao>
                </CaixaButton>
            </ContainerGrande>
        
        );
    }

    
};

export default Mensagens;