import React from 'react';
import logosol from '../assets/solymarenergia.png';
import Image from './Image';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <Image urlImg={logosol} />
        </div>
        <div className='menu'>
          <Link to='/comercializadoras' className='item'>
            Comercializadoras
          </Link>
          <Link to='/comparador' className='item'>
            Comparador
          </Link>
          <Link to='/contratos' className='item'>
            Contratos
          </Link>
          <Link to='/comisiones' className='item'>
            Comisiones
          </Link>
          <Link to='/ofertas' className='item'>
            Ofertas
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
