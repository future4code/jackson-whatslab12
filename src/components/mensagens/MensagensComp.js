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

const InputMensagem = styled.input`
    
     
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
                    
                 <InputMensagem
                     value={this.state.valorInputRemetente}
                     onChange={this.onChangeInputRemetente}
                     placeholder={"usuário"}
                     />
                 <InputMensagem
                     value={this.state.valorInputMensagem}
                     onChange={this.onChangeInputMensagem}
                     placeholder={"mensagem"}
                     />

                <button onClick={this.novoUsuario}>Enviar</button>
                 
                    
                </div>
            </div>
        
        );
    }

    
};

export default Mensagens;