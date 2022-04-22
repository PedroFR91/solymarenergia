import React from 'react';

function Oferta(props) {
  return (
    <>
      <div className='filaoferta'>
        <tr>
          <td style={{ width: '140px' }}>{props.company}</td>
          <td style={{ width: '80px' }}>{props.tipo}</td>
          <td style={{ width: '300px' }}>{props.tarifa}</td>
          <td style={{ width: '60px' }}>{props.tp1}</td>
          <td style={{ width: '60px' }}>{props.tp2}</td>
          <td style={{ width: '60px' }}>{props.tp3}</td>
          <td style={{ width: '60px' }}>{props.tp4}</td>
          <td style={{ width: '60px' }}>{props.tp5}</td>
          <td style={{ width: '60px' }}>{props.tp6}</td>
          <td style={{ width: '60px' }}>{props.te1}</td>
          <td style={{ width: '60px' }}>{props.te2}</td>
          <td style={{ width: '60px' }}>{props.te3}</td>
          <td style={{ width: '60px' }}>{props.te4}</td>
          <td style={{ width: '60px' }}>{props.te5}</td>
          <td style={{ width: '60px' }}>{props.te6}</td>
        </tr>
      </div>
    </>
  );
}

export default Oferta;
