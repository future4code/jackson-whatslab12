import React from 'react'
import styled from "styled-components"


const CaixaMensagem = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid #d3d3d3;
    margin-left: 5px;
    padding: 10px;
    margin-bottom: 12px;
    height: 28px;
    margin-right: 10px;
    width: 208px;
    border-radius: 30px;
    margin-top: 10px;
    background-color: white;
`
const Botao = styled.button`
        width:85px;
        height:25px;
        margin-left:10px;
        font-weight:900;
`


const InputMensagem = styled.input`
    border-radius:5px;
    height:20px;
    margin-top:75px;
    padding-left:10px;
    padding-right:10px;
    margin-left: 5px;

    width:${props => {
        if(props.tamanho === "pequeno"){
            return "75px"

        }else if(props.tamanho === "grande"){
            return "250px"
        }

    }};
     
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
        const novaMensagem = {
            remetente: this.state.valorInputRemetente,
            mensagem: this.state.valorInputMensagem
        };

        const mensagemNova = [...this.state.message, novaMensagem];
        this.setState({message: mensagemNova})
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
            <div>
                <div>
                    {listaDeMensagem}
                </div>
                 
                <div>
                    
                 <InputMensagem tamanho={"pequeno"}
                     value={this.state.valorInputRemetente}
                     onChange={this.onChangeInputRemetente}
                     placeholder={"usuário"}
                     />
                 <InputMensagem tamanho ={"grande"}
                     value={this.state.valorInputMensagem}
                     onChange={this.onChangeInputMensagem}
                     placeholder={"mensagem"}
                     />

                <Botao onClick={this.novoUsuario}>Enviar</Botao>
                 
                    
                </div>
            </div>
        
        );
    }

    
};

export default Mensagens;