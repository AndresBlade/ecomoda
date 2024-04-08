import React from 'react'
import { GetRequestEnEspera } from './helpers/GetRequest';	
import ModalContentRequest from './components/ModalContentRequest';

const AcceptLoan = () => {
    const request = GetRequestEnEspera();

    return (
        <div className='request-table'>
            <table className="modal-table">
            <div className="loan-creation__title loan-creation__title__modal">
                <h2>Asignar cuenta</h2>
            </div>
            {/* Aqui se llama el componente Search que es el encargado de hacer la busqueda de las cuentas */}
            <thead className='table '>
                <tr className='table-thead'>
                    <td>Id</td>
                    <td>Monto</td>
                    <td>Descripcion</td>
                    <td>Tipo</td>
                    <td>Status</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody className='modal-body'> 
                {/* En esta parte recorremos la información que nos trae la api para mostrarla en la tabla de consulta cuenta */}
                    {   
                        request.map(({id,amount,description,type_id,status})=>(
                            <tr className='modal-body modal-color' key={id}>
                                <td>
                                    <ModalContentRequest id={id} amount={amount} description={description} type_id={type_id} status={status} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AcceptLoan
