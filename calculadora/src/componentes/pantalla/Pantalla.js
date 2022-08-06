import React from 'react';
import './Pantalla.css';


class Pantalla extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='input'>
        <div className={`texto' ${!this.props.texto.length ? 'display-none' : ''}`.trimEnd()}>
          {this.props.texto}
        </div>
        <div className={`texto' ${this.props.texto.length ? 'display-none' : ''}`.trimEnd()}>
          0
        </div>
      </div>
    );
  }

}

export default Pantalla;