import React from 'react';
import Navbar from '../components/Navbar';
import Oferta from '../components/Oferta';
import Panel from '../components/Panel';
import comers from '../data/data';

function Ofertas() {
  return (
    <div>
      <Navbar />
      <Panel />
      <div className='mapofertas'>
        <table className='table'>
          <tr>
            <th style={{ width: '140px' }}>Comercializadora</th>
            <th style={{ width: '80px' }}>Tarifa</th>
            <th style={{ width: '300px' }}>Denominación</th>
            <th style={{ width: '60px' }}>TP1</th>
            <th style={{ width: '60px' }}>TP2</th>
            <th style={{ width: '60px' }}>TP3</th>
            <th style={{ width: '60px' }}>TP4</th>
            <th style={{ width: '60px' }}>TP5</th>
            <th style={{ width: '60px' }}>TP6</th>
            <th style={{ width: '60px' }}>TE1</th>
            <th style={{ width: '60px' }}>TE2</th>
            <th style={{ width: '60px' }}>TE3</th>
            <th style={{ width: '60px' }}>TE4</th>
            <th style={{ width: '60px' }}>TE5</th>
            <th style={{ width: '60px' }}>TE6</th>
          </tr>
        </table>
        {comers.map((oferta) => (
          <Oferta
            company={oferta.company}
            tipo={oferta.tipo}
            tarifa={oferta.tarifa}
            tp1={(oferta.tp1 / 365).toFixed(2)}
            tp2={(oferta.tp2 / 365).toFixed(2)}
            tp3={(oferta.tp3 / 365).toFixed(2)}
            tp4={(oferta.tp4 / 365).toFixed(2)}
            tp5={(oferta.tp5 / 365).toFixed(2)}
            tp6={(oferta.tp6 / 365).toFixed(2)}
            te1={oferta.te1.toFixed(2)}
            te2={oferta.te2.toFixed(2)}
            te3={oferta.te3.toFixed(2)}
            te4={oferta.te4.toFixed(2)}
            te5={oferta.te5.toFixed(2)}
            te6={oferta.te6.toFixed(2)}
          />
        ))}
      </div>
    </div>
  );
}

export default Ofertas;
