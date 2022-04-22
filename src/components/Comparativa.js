import React, { useRef, useState } from 'react';
import Logo from './Logo';
import logo from '../assets/iberdrola.png';
import jsPDF from 'jspdf';
import pdfImg from '../assets/pdf.svg.png';
import comers from '../data/data';
function Comparativa() {
  const [cliente, setCliente] = useState('');
  const [tarifa, setTarifa] = useState('');
  const [tipotarifa, setTipotarifa] = useState('');
  const [dias, setDias] = useState('');
  const [fecha, setFecha] = useState('');
  const [potencia1, setPotencia1] = useState('');
  const [potencia2, setPotencia2] = useState('');
  const [potencia3, setPotencia3] = useState('');
  const [potencia4, setPotencia4] = useState('');
  const [potencia5, setPotencia5] = useState('');
  const [potencia6, setPotencia6] = useState('');
  const [potcon1, setPotcon1] = useState('');
  const [potcon2, setPotcon2] = useState('');
  const [potcon3, setPotcon3] = useState('');
  const [potcon4, setPotcon4] = useState('');
  const [potcon5, setPotcon5] = useState('');
  const [potcon6, setPotcon6] = useState('');
  const [actual, setActual] = useState('');
  const alq = 1;
  const pdfRef = useRef(null);

  const handleDownload = () => {
    const content = pdfRef.current;

    const doc = new jsPDF();
    doc.html(content, {
      callback: function (doc) {
        doc.save('oferta.pdf');
      },
      html2canvas: { scale: 0.25 },
    });
  };
  return (
    <>
      <div className='comparativa'>
        <form className='inputForm'>
          <div>
            <div>
              <label>Fecha de oferta:</label>
              <input type='date' onChange={(e) => setFecha(e.target.value)} />
            </div>
            <div>
              <label>Tipo de Tarifa:</label>
              <select
                name='tarifa'
                className='tarifa'
                id=''
                onChange={(e) => setTipotarifa(e.target.value)}
              >
                <option value='2.0'>2.0</option>
                <option value='3.0'>3.0</option>
                <option value='6.0'>6.0</option>
              </select>
            </div>
            <div>
              <label>Nombre Tarifa:</label>
              <input
                type='text'
                name='nt'
                onChange={(e) => setTarifa(e.target.value)}
              />
            </div>
            <div className='cliente'>
              <label>Nombre Cliente:</label>
              <input
                type='text'
                name='cliente'
                onChange={(e) => setCliente(e.target.value)}
              />
            </div>
            <div>
              <label>Días de Factura:</label>
              <input type='number' onChange={(e) => setDias(e.target.value)} />
            </div>

            <div>
              <label>Comercializadora:</label>

              <select name='comercializadora' id=''>
                <option value='endesa'>ENDESA</option>
                <option value='iberdrola'>IBERDROLA</option>
                <option value='naturgy'>NATURGY</option>
                <option value='plenitude'>PLENITUDE</option>
              </select>
            </div>

            <div>
              <label>Paga actualmente:</label>
              <input type='text' onChange={(e) => setActual(e.target.value)} />
            </div>
          </div>

          <div className='potenciacon'>
            <label>Potencia contratada: </label>
            <div>
              <label>P1:</label>
              <input
                type='text'
                name='pt'
                id=''
                onChange={(e) => setPotcon1(e.target.value)}
              />
            </div>
            <div>
              <label>P2:</label>
              <input
                type='text'
                name='pt'
                id=''
                onChange={(e) => setPotcon2(e.target.value)}
              />
            </div>
            <div>
              <label>P3:</label>
              <input
                type='text'
                name='pt'
                id=''
                onChange={(e) => setPotcon3(e.target.value)}
              />
            </div>
            <div>
              <label>P4:</label>
              <input
                type='text'
                name='pt'
                id=''
                onChange={(e) => setPotcon4(e.target.value)}
              />
            </div>
            <div>
              <label>P5:</label>
              <input
                type='text'
                name='pt'
                id=''
                onChange={(e) => setPotcon5(e.target.value)}
              />
            </div>
            <div>
              <label>P6:</label>
              <input
                type='text'
                name='pt'
                id=''
                onChange={(e) => setPotcon6(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label>Consumo:</label>
            <div className='consumos'>
              <div>
                <label>P1:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia1(e.target.value)}
                />
              </div>
              <div>
                <label>P2:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia2(e.target.value)}
                />
              </div>
              <div>
                <label>P3:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia3(e.target.value)}
                />
              </div>
              <div>
                <label>P4:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia4(e.target.value)}
                />
              </div>
              <div>
                <label>P5:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia5(e.target.value)}
                />
              </div>
              <div>
                <label>P6:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia6(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='pdfimg' onClick={handleDownload}>
            <img src={pdfImg} alt='' width={'60px'} />
          </div>
        </form>

        <div className='dina4' ref={pdfRef}>
          <div className='cabecera'>
            <div className='logocabecera'>
              <Logo />
            </div>
            <div className='logocomer'>
              <img src={logo} alt='' />
            </div>
            <div class='detalles'>
              <div className='left'>
                <div>Fecha de oferta:{fecha}</div>
                <div>Tipo de Tarifa:{' ' + tipotarifa}</div>
                <div>Nombre de Tarifa: {' ' + tarifa}</div>
                <div>Nombre Cliente:{' ' + cliente} </div>
              </div>
              <div className='right'>
                <div>Potencia Contratada:</div>
                <div>Días de Factura:{dias}</div>
                <div>Consumo:</div>
              </div>
            </div>
          </div>
          <table className='table-potencias'>
            <tr>
              <th>Término de Potencia</th>
              <th>Potencia (KW)</th>
              <th>Días</th>
              <th>Precio (€/KWh)</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>P1</td>
              <td>{potencia1}</td>
              <td>{dias}</td>
              <td>{comers.tp1}</td>
              <td>{potencia1 * dias * comers.tp1}</td>
            </tr>
            <tr>
              <td>P2</td>
              <td>{potencia2}</td>
              <td>{dias}</td>
              <td>{comers.tp2}</td>
              <td>{potencia2 * dias * comers.tp2}</td>
            </tr>
            <tr>
              <td>P3</td>
              <td>{potencia3}</td>
              <td>{dias}</td>
              <td>{comers.tp3}</td>
              <td>{potencia3 * dias * comers.tp3}</td>
            </tr>
            <tr>
              <td>P4</td>
              <td>{potencia4}</td>
              <td>{dias}</td>
              <td>{comers.tp4}</td>
              <td>{potencia4 * dias * comers.tp4}</td>
            </tr>
            <tr>
              <td>P5</td>
              <td>{potencia5}</td>
              <td>{dias}</td>
              <td>{comers.tp5}</td>
              <td>{potencia5 * dias * comers.tp5}</td>
            </tr>
            <tr>
              <td>P6</td>
              <td>{potencia6}</td>
              <td>{dias}</td>
              <td>{comers.tp6}</td>
              <td>{potencia6 * dias * comers.tp6}</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {' '}
                {(
                  potencia1 * dias * comers.tp1 +
                  potencia2 * dias * comers.tp2 +
                  potencia3 * dias * comers.tp3 +
                  potencia4 * dias * comers.tp4 +
                  potencia5 * dias * comers.tp5 +
                  potencia6 * dias * comers.tp6
                ).toFixed(2)}
              </td>
            </tr>
          </table>
          <table className='table-energias'>
            <tr>
              <th>Consumo</th>
              <th>Potencias (KW)</th>

              <th>Precio (€/KWh)</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>P1</td>
              <td>{potcon1}</td>

              <td>{comers.te1}</td>
              <td>{(potcon1 * dias * comers.te1).toFixed(2)}</td>
            </tr>
            <tr>
              <td>P2</td>
              <td>{potcon2}</td>

              <td>{comers.te2}</td>
              <td>{(potcon2 * dias * comers.te2).toFixed(2)}</td>
            </tr>
            <tr>
              <td>P3</td>
              <td>{potcon3}</td>

              <td>{comers.te3}</td>
              <td>{(potcon3 * dias * comers.te3).toFixed(2)}</td>
            </tr>
            <tr>
              <td>P4</td>
              <td>{potcon4}</td>

              <td>{comers.te4}</td>
              <td>{(potcon4 * dias * comers.te4).toFixed(2)}</td>
            </tr>
            <tr>
              <td>P5</td>
              <td>{potcon5}</td>

              <td>{comers.te5}</td>
              <td>{(potcon5 * dias * comers.te5).toFixed(2)}</td>
            </tr>
            <tr>
              <td>P6</td>
              <td>{potcon6}</td>

              <td>{comers.te6}</td>
              <td>{(potcon6 * dias * comers.te6).toFixed(2)}</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td></td>
              <td></td>

              <td>
                {(
                  potcon1 * comers.te1 +
                  potcon2 * comers.te2 +
                  potcon3 * comers.te3 +
                  potcon4 * comers.te4 +
                  potcon5 * comers.te5 +
                  potcon6 * comers.te6
                ).toFixed(2)}
              </td>
            </tr>
          </table>

          <div className='oferta'>
            <div>
              Nueva Oferta:{' '}
              {(
                potcon1 * dias * comers.te1 +
                potcon2 * dias * comers.te2 +
                potcon3 * dias * comers.te3 +
                potcon4 * dias * comers.te4 +
                potcon5 * dias * comers.te5 +
                potcon6 * dias * comers.te6 +
                0.1 *
                  (alq +
                    0.005 *
                      (potcon1 * dias * comers.te1 +
                        potcon2 * dias * comers.te2 +
                        potcon3 * dias * comers.te3 +
                        potcon4 * dias * comers.te4 +
                        potcon5 * dias * comers.te5 +
                        potcon6 * dias * comers.te6))
              ).toFixed(2) + '€'}{' '}
            </div>
            <div>Paga actualmente:{actual + '€'}</div>
            <div>
              Ahorro:{' '}
              {/*(
                potcon1 * dias * con +
                potcon2 * dias * con +
                potcon3 * dias * con +
                0.1 *
                  (alq +
                    0.005 *
                      (potcon1 * dias * con +
                        potcon2 * dias * con +
                        potcon3 * dias * con)) -
                actual
                      ).toFixed(2) + '€'*/}
            </div>
            <div id='anual'>
              Ahorro anual:
              {/*(
                (potcon1 * dias * con +
                  potcon2 * dias * con +
                  potcon3 * dias * con +
                  0.1 *
                    (alq +
                      0.005 *
                        (potcon1 * dias * con +
                          potcon2 * dias * con +
                          potcon3 * dias * con)) -
                  actual) *
                12
                        ).toFixed(2) + '€'*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comparativa;
