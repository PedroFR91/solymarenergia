import React from 'react';
import img from '../assets/iberdrola.png';

function Comercializadora() {
  return (
    <div className='comercializadora'>
      <div className='comercont'>
        <div>
          <img src={img} alt='img' width={'100%'} />
        </div>
        <div>
          <div>
            <p>Precio Kwh:</p>
            <p></p>
          </div>
          <div>
            <p>Precio potencia (anual):</p>
            <p></p>
          </div>
          <div>
            <p>Precio potencia (día):</p>
            <p></p>
          </div>
          <div>
            <button className='btn-style'>Imprimir Oferta</button>
            <button className='btn-style'>Información</button>
            <button className='btn-style'>Contratar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comercializadora;
