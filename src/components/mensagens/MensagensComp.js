import React from 'react'
import styled from "styled-components"
import img from './botaosend.png'
import imgLogo from './whatslab.png'

const FullContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #f6e5f6;
    border: 1px solid #f0dff2;
    height: 100vh;
    width:100vw;
    position: relative;


    @media (min-width: 400px) and (max-width: 698px) {
        width: 90vw;
        left: 5%;
    };

    @media (min-width: 699px) and (max-width: 1000px){
        width: 75vw;
        left: 17%;
    };

    @media (min-width: 1001px){
        width: 55vw;
        left: 40%;
    };
`;

const AlignBox = styled.div`
    display: flex;
    height: 85%;
    padding-bottom: 7%;
`;

const BoxMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    width: 100vw;

    @media (min-width: 690px){
        width: 60%
    }
`;

const MsgName = styled.p`
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 0px;
`;

const MsgText = styled.p`
    font-size: 1.1rem;
    font-weight: 480;
    margin-top: 5px;
    margin-left: 5px;
`;

const CaixaMensagem = styled.section`
    display: flex;
    flex-direction: column;
    margin: 15px;
    background-color: white;
    width: 60%;
    height: 5.2rem;
    word-wrap: break-word;
    border-radius: 8px;
    padding-left: 7px;
    border: 1px solid #978f9c;
    box-shadow: 3px 3px #4a464c;
`;

const BoxInput = styled.section`
    display:flex;
    align-items: center;
    position: relative;

    @media (min-width: 400px) and (max-width: 698px) {
        width: 95%;
        top: -3%;
    };

    @media (min-width: 690px) and (max-width: 1000px){
        left: 2%;
        bottom: 3%;
        width: 100%;
    };

    @media (min-width: 1001px){
        top: -3%;
    };    
`;

const InputMensenger = styled.input`
    border-radius: 10px;
    border: 1px solid;
    font-size: 1.2rem;
    padding-left: 10px;
    margin-left: 9px;
    width: ${props =>{
        if(props.tamanho === "pequeno"){
            return "20%"
        }else if(props.tamanho === "grande"){
            return "53%"
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
        box-shadow: -2px 3px #4a464c;
    };
`;

const SendButton = styled.img`
    width: 10%;
    height: 30px;
    border: 1px solid;
    border-radius: 10px;
    margin-left: 10px;
    box-shadow: -3px 2px;
    
    &:focus{
        outline: none;

    };
`;

const Logo = styled.img`
    width: 35vw;
    height:2vh;
    position: absolute;
    top: 2.6em;
    left: 6em;

    @media (min-width: 690px) and (max-width: 1000px){
        top: 3em;
        width: 25vw;
        left: 10em;
        bottom: 1em;
    };

    @media (min-width: 1001px){
        width: 30%;
        left: 30%;

    };
`;


export class Mensagens extends React.Component{
    state = {
        message: [
            {
            emetente: "Claudia",
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
        valorInputMensagem: "",
    };

    
    novoUsuario = () => {
        if(this.state.valorInputRemetente !== "" && this.state.valorInputMensagem !== ""){
            const novaMensagem = {
                remetente: this.state.valorInputRemetente,
                mensagem: this.state.valorInputMensagem
            };
                const mensagemNova = [...this.state.message, novaMensagem];
            this.setState({message: mensagemNova})
        };
        this.setState({valorInputRemetente: "", valorInputMensagem: ""});
    };

    onChangeInputRemetente = (event) =>{
        this.setState({valorInputRemetente: event.target.value});
    };

    onChangeInputMensagem = (event) =>{
        this.setState({valorInputMensagem: event.target.value});
    };

    onEnter = (event) =>{
        if(event.key === "Enter"){
            event.preventDefault();
            if(this.state.valorInputRemetente !== "" && this.state.valorInputMensagem !== ""){
                const novaMensagem = {
                    remetente: this.state.valorInputRemetente,
                    mensagem: this.state.valorInputMensagem
                };
                    const mensagemNova = [...this.state.message, novaMensagem];
                this.setState({message: mensagemNova})
            };
            this.setState({valorInputRemetente: "", valorInputMensagem: ""});
        };
    };

    onDuble = (event) =>{

    }

    render() {
        const listaDeMensagem = this.state.message.map ((messages) => {
            return (
                <CaixaMensagem>
                    <MsgName>{messages.remetente}</MsgName>
                     <MsgText>{messages.mensagem}</MsgText>
                </CaixaMensagem>
            );
        });

        return (
            <FullContainer>
                <AlignBox>
                    <BoxMessage>
                        {listaDeMensagem}
                    </BoxMessage>
                </AlignBox>
                 
                <BoxInput>
                    <InputMensenger tamanho = {"pequeno"}
                        value={this.state.valorInputRemetente}
                        onChange={this.onChangeInputRemetente}
                        onKeyDown={this.onEnter}
                        placeholder={"usuário"}
                    />
                    <InputMensenger tamanho = {"grande"}
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                        onKeyDown={this.onEnter}
                        placeholder={"mensagem"}
                    />
                    <SendButton src={img}  alt="botao enviar" onClick={this.novoUsuario}/>
                    <Logo src={imgLogo} alt="logo"/>
                </BoxInput>
            </FullContainer>
        
        );
    }

    
};

export default Mensagens;