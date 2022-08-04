import React from 'react';
import './Pantalla.css';


class Pantalla extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='input'>
        <div className='texto'>
          {this.props.texto}
        </div>
      </div>
    );
  }

}

export default Pantalla;