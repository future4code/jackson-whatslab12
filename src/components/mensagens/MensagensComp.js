import React from 'react'
import styled from "styled-components"

const ContainerGrande = styled.div`
`;


const WrapMessages = styled.section`
    display: flex;
    flex-direction:column-reverse;
    justify-items:baseline;
    height: 70vh;
    width: 90vw;
    margin-bottom: 35px;
`
const CaixaMensagem = styled.section`
    display:flex;
    flex-direction: column;
    border: 1px solid #d3d3d3;
    justify-content: center;
    padding-left: 16px;
    margin: 17px 7px;
    height: 8vh;
    width: 70vw;
    border-radius: 25px;
    background-color: white;
    box-shadow: 5px 5px 3px #d3d3d3;
    font-size: 1.2rem;
`;

const WrapContainer = styled.section`
    display:flex;
    flex-direction: row;
    width: ;

`

const InputMensagem = styled.input`
    border-radius: 10px;
    border: 1px solid;
    box-shadow: -2px 3px 3px;
    font-size: 1.2rem;
    padding-left: 10px;
    margin: 10px 5px;
    width: ${props =>{
        if(props.tamanho === "pequeno"){
            return "90px"
        }else if(props.tamanho === "grande"){
            return "200px"
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
    }
`;

const Botao = styled.button`
    width: 150px;
    height: 30px;
    margin: 20px 0px 20px 90px;
    font-size: 1.2rem;
    font-weight: 700;
    border: 1px solid;
    box-shadow: 2px 3px 2px;
    &:focus{
        outline:none;
    }

`


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
                    {listaDeMensagem}
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

                    <Botao onClick={this.novoUsuario}>Enviar</Botao>
            </ContainerGrande>
        
        );
    }

    
};

export default Mensagens;