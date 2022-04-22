import React from 'react';
import Navbar from '../components/Navbar';
import Panel from '../components/Panel';

function Login() {
  return (
    <>
      <Navbar />
      <Panel />
      <div className='login'>
        <div className='inputs'>
          <input type='text' name='usuario' placeholder='Usuario' />
          <input type='text' name='contraseña' placeholder='Contraseña' />
        </div>
        <div className='btn'>
          <div>Acceder</div>
        </div>
      </div>
    </>
  );
}

export default Login;
