(this.webpackJsonpwhatslab=this.webpackJsonpwhatslab||[]).push([[0],{16:function(e,n,t){e.exports=t(24)},21:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),i=t.n(o),l=(t(21),t(1)),u=t(13),c=t(8),s=t(9),m=t(15),g=t(14),p=t(2);function d(){var e=Object(l.a)(["\n    \n     \n"]);return d=function(){return e},e}function v(){var e=Object(l.a)(["\n    display:flex;\n    flex-direction: column;\n    border: 1px solid #d3d3d3;\n    margin-left: 5px;\n    padding: 10px;\n    margin-bottom: 12px;\n    height: 28px;\n    margin-right: 10px;\n    width: 208px;\n    border-radius: 30px;\n    margin-top: 10px;\n    background-color: white;\n"]);return v=function(){return e},e}var h=p.a.div(v()),f=p.a.input(d()),b=function(e){Object(m.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={message:[{remetente:"Claudia",mensagem:"Olar, tudo bom?"},{remetente:"Yvini",mensagem:"Oie. tudo sim. E vc?"},{remetente:"Caio",mensagem:"E ai, gente, tudo legal?"}],valorInputRemetente:"",valorInputMensagem:""},e.novoUsuario=function(){var n={remetente:e.state.valorInputRemetente,mensagem:e.state.valorInputMensagem},t=[].concat(Object(u.a)(e.state.message),[n]);e.setState({message:t})},e.onChangeInputRemetente=function(n){e.setState({valorInputRemetente:n.target.value})},e.onChangeInputMensagem=function(n){e.setState({valorInputMensagem:n.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state.message.map((function(e){return r.a.createElement(h,null,e.remetente," - ",e.mensagem)}));return r.a.createElement("div",null,r.a.createElement("div",null,e),r.a.createElement("div",null,r.a.createElement(f,{value:this.state.valorInputRemetente,onChange:this.onChangeInputRemetente,placeholder:"usu\xe1rio"}),r.a.createElement(f,{value:this.state.valorInputMensagem,onChange:this.onChangeInputMensagem,placeholder:"mensagem"}),r.a.createElement("button",{onClick:this.novoUsuario},"Enviar")))}}]),t}(r.a.Component);function x(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n    border: 1px solid;\n    width: 300px;\n    height: 20em;\n    margin-left: 30em;\n    background-color:#b8bfd8;\n  \n"]);return x=function(){return e},e}var E=p.a.main(x());var w=function(){return r.a.createElement(E,null,r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.5e4c8e71.chunk.js.map