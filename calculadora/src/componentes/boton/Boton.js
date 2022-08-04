import React from 'react';
import './Boton.css';

class Boton extends React.Component {

  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    this.props.click(this.props.boton.texto);
  }

  render() {
    return (
      <div
        className={`boton-contenedor ${this.props.boton.esOperador ? 'operador' : ''}`.trimEnd()}
        onClick={this.click}>
        {this.props.boton.texto}
      </div>
    );
  }
}

export default Boton;