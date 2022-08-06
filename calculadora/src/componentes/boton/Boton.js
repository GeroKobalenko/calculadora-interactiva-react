import React from 'react';
import './Boton.css';

class Boton extends React.Component {

  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    this.props.click(this.props.boton);
  }

  render() {
    return (
      <div>
        <div
          className={`boton-contenedor ${this.props.boton.esOperador ? 'operador' : ''} ${this.props.boton.vacio ? 'display-none' : ''}`.trimEnd()}
          onClick={this.click}>
          {this.props.boton.texto}
        </div>
        <div className={`contenedor-vacio ${!this.props.boton.vacio ? 'display-none' : ''}`.trimEnd()}>
      VACIO
        </div>
      </div>

    );
  }
}

export default Boton;