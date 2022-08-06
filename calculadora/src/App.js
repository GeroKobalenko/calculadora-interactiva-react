import React from 'react';
import './App.css';
import { evaluate } from 'mathjs';
import Pantalla from './componentes/pantalla/Pantalla';
import Boton from './componentes/boton/Boton';

const botonesAux = [
  { key: 1, texto: 'AC', esOperador: false },
  { key: 2, texto: '', esOperador: false, vacio: true },
  { key: 3, texto: '', esOperador: false, vacio: true },
  { key: 4, texto: '/', esOperador: true, separaFila: true },
  { key: 5, texto: '7', esOperador: false },
  { key: 6, texto: '8', esOperador: false },
  { key: 7, texto: '9', esOperador: false },
  { key: 8, texto: 'x', esOperador: true },
  { key: 9, texto: '4', esOperador: false },
  { key: 10, texto: '5', esOperador: false },
  { key: 11, texto: '6', esOperador: false },
  { key: 12, texto: '-', esOperador: true },
  { key: 13, texto: '1', esOperador: false },
  { key: 14, texto: '2', esOperador: false },
  { key: 15, texto: '3', esOperador: false },
  { key: 16, texto: '+', esOperador: true },
  { key: 17, texto: '.', esOperador: false },
  { key: 18, texto: '0', esOperador: false },
  { key: 19, texto: '⌫', esOperador: false },
  { key: 20, texto: '=', esOperador: true },

];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      texto: '',
      botones: botonesAux
    }

    this.agregarAInput = this.agregarAInput.bind(this);
    this.manejadorDeClick = this.manejadorDeClick.bind(this);
    this.calcularResultado = this.calcularResultado.bind(this);
    this.limpiar = this.limpiar.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.esOperador = this.esOperador.bind(this);
  }

  onKeyPressed(e) {
    if (
      e.key === '1' ||
      e.key === '2' ||
      e.key === '3' ||
      e.key === '4' ||
      e.key === '5' ||
      e.key === '6' ||
      e.key === '7' ||
      e.key === '8' ||
      e.key === '9' ||
      e.key === '0') {
      this.agregarAInput(e.key);
    }
    if (e.key === 'Enter') this.calcularResultado();
  }

  manejadorDeClick(boton) {
    if (boton.key === 20) this.calcularResultado();
    else if (boton.texto === 'AC') this.limpiar('todo')
    else if (boton.texto === '⌫') this.limpiar('')
    else this.agregarAInput(boton.texto);
  }

  agregarAInput(valor) {
    if ((this.esOperador(valor) && (this.esOperador(this.state.texto.substring(-1))))){
      alert("No puede ingresar dos operadores seguidos!");
      return;
    } 
    if (this.state.texto.length <= 11) {
      this.setState((state) => {
        return { texto: state.texto + valor }
      });
    }
    else {
      alert("Números maximos ingresados!");
    }
  }

  calcularResultado() {
    if (this.state.texto) {
      this.setState((state) => {
        return { texto: evaluate(state.texto).toString() }
      });
    }
    else {
      alert("Debe ingresar valores!");
    }
  }

  limpiar(texto) {
    if (texto === 'todo') {
      this.setState((state) => {
        return { texto: '' }
      });
    }
    else {
      this.setState((state) => {
        return { texto: state.texto.substring(0, state.texto.length - 1) }
      });
    }
  }

  esOperador(valor) {
    return isNaN(valor);
  }

  render() {
    return (
      <div className="App"
        tabIndex="0" onKeyDown={this.onKeyPressed}>
        <div className="contenedor-calculadora">
          <Pantalla texto={this.state.texto} />
          {
            this.state.botones.map(boton =>
              <Boton
                key={boton.key}
                boton={boton}
                click={this.manejadorDeClick}
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
