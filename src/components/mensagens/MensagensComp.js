import React from 'react'


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
                <p>
                    {messages.remetente} - {messages.mensagem}
                </p>
            );
        });

        return (
            <div>
                {listaDeMensagem}
            </div>
        );
    }
};

export default Mensagens;