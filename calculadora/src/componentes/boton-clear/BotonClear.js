import React from 'react';
import './BotonClear.css';

class BotonClear extends React.Component {

  constructor(props) {
    super(props);
    this.limpiar = this.limpiar.bind(this);
    this.limpiarTodo = this.limpiarTodo.bind(this);
  }

  limpiar() {
    this.props.limpiar('');
  }

  limpiarTodo() {
    this.props.limpiar('todo');
  }

  render() {
    return (
      <div>
        <div className='boton-clear' onClick={this.limpiar}>
          Limpiar
        </div>
        <div className='boton-clear' onClick={this.limpiarTodo}>
          Limpiar todo
        </div>
      </div>
    );
  }
}

export default BotonClear;
