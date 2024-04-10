import React from 'react'
import { GetRequest } from './helpers/GetRequest';
import { GetActiveAccount } from './helpers/GetAccounts';
import Input from './components/Input';
import ImagenAll from '../../assets/icons_finances/todas.png';
import DonutsCharts from './components/DonutsCharts';
const Main = () => {
    const data = GetRequest();
    const data2 = data.slice(0,2)
    const allAccountsActive = GetActiveAccount().length;
    return (
        <div className='main-container'>
            <div className='main-resume__one'>
                <div className='main-account__container'>
                    <div className='main-account__resume'>
                            <p className='main-account__resume_text'>{allAccountsActive}</p>
                    </div>
                    <p>Cuentas Activas</p>
                </div>
                <div className='main-graphic'>
                    <DonutsCharts />
                </div>  
                <div className='main-money__resume'>
                    <div className='main-money__resume_bs'>
                        <p>Bs.800,00</p>
                    </div>
                    <div className='main-money__resume_dollar'>
                        <p>$20,00</p>
                    </div>
                </div>
            </div>
            <div className='main-resume__two'>
                <div className='main-history__resume'>
                    <table className="info-component__info-table main-resume__table">
                        <thead>
                            <tr className="info-component__table-header main-resume__table-thead">
                            <th>ID</th>
                            <th>Monto</th>
                            <th>Descripción</th>
                            <th>Creada</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((row, index) => (
                            <tr key={index} className="info-component__table-row main-resume__table-tr">
                                <td>{row.id}</td>
                                <td>{row.amount}</td>
                                <td>{row.description}</td>
                                <td>{row.createdAt}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    
                        <a href="http://localhost:5173/finanzas/history" className='main-history__resume-button'>Ver mas</a>
                </div>
                <div className='main-loan__resume'>
                    <h2>Prestamos solicitados</h2>
                    <div className='main-loan__resume-info'>
                        <div className='main-loan__resume-flex'>
                            <img src={ImagenAll} alt="todos" />
                            <p>Total Prestamos Solicitados</p>
                        </div>
                        <input type="text" className='account-register__description main-loan__resume-text' value={data.length} disabled={true} /> 
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>                    
        </div>
    )
}

export default Main
