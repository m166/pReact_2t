import React, { Component } from "react"

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value
  }

  handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value
  }

  criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }


  render() {
    return (
      <form
        onSubmit={this.criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          placeholder="Escreva sua Nota..."
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button>
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
