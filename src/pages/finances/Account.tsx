import React, { useState,useRef, useEffect } from 'react'
import ModalContent from './components/ModalContent'
import Input from './components/Input';
import imagen1 from '../../assets/icons_finances/buscando-trabajo (1).png';
import Buttons from './components/Buttons';
import { json } from 'react-router-dom';
import { createAccount } from './helpers/AccountFetching';
import { GetAccounts, GetInactiveAccounts, GetActiveAccount } from './helpers/GetAccounts';
import Search from './components/Search';


const Account = () => {
    const [descripcion, setDescripcion]= useState("");
    const accounts  = GetAccounts();
    const inactiveAccounts = GetInactiveAccounts();
    const activeAccounts = GetActiveAccount();
    const [allAccounts, setAllAccounts]= useState(false);
    const [inactive, setInactive]= useState(false);
    const [active, setActive]= useState(false);
    const form = useRef<HTMLFormElement>(null);

    //Aqui declaramos la funcion que recibe el Submit del formulario que procede a hacer el registro a la base de datos
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const description = descripcion;
        
        createAccount({description});

        form.current?.reset();
    };

    const [isOpenTable, setIsOpenTable] = useState(false);

    const handleToggleTable = () => {
        setIsOpenTable(!isOpenTable);
    };

    const [isOpenRegister, setIsOpenRegister] = useState(false);

    const handleToggleRegister = () => {
        setIsOpenRegister(!isOpenRegister);
    };

    return (
        <div className='account'>
            <div className='account-table'>
                <div className={`loan-creation__title loan-creation__title__modal ${isOpenTable ? "open-accordion__tittle" : "closed-accordion__tittle"}`} onClick={handleToggleTable}>
                    <h2>Consulta Cuenta</h2>
                </div>
                <div className={`loan-creation__content ${isOpenTable ? "open-accordion__content" : "closed-accordion__content"}`}>
                    <table className="modal-table">
                        {/* Aqui se llama el componente Search que es el encargado de hacer la busqueda de las cuentas */}
                        <Search/>
                        <div className='account-buttons__filter'>
                            <Buttons type={'submit'} children={'Inactivas'} title={'consultar'} className={'button-finances button-finances__account'} onClick={()=>{
                                setInactive(true)
                                setActive(false)
                            }}/>
                            <Buttons type={'submit'} children={'Activas'} title={'consultar'} className={'button-finances button-finances__account'} onClick={()=>{
                                setActive(true)
                                setInactive(false)
                            }}/>
                            <Buttons type={'submit'} children={'Todas'} title={'consultar'} className={'button-finances button-finances__account'} onClick={()=>{
                                setActive(false)
                                setInactive(false)
                            }}/>
                        </div>
                        <thead className='table '>
                            <tr className='table-thead'>
                                <td>Id</td>
                                <td>Descripcion</td>
                                <td>Status</td>
                                <td>Acciones</td>

                            </tr>
                        </thead>
                        <tbody className='modal-body'> 

                        {/* En esta parte recorremos la información que nos trae la api para mostrarla en la tabla de consulta cuenta */}
                            {   
                                inactive? inactiveAccounts.map(({id,description,status})=>(
                                    <tr className='modal-body modal-color' key={id}>
                                        <td>
                                            <ModalContent id={id} descripcion={description} estado={status} />
                                        </td>
                                        
                                    </tr>
                                )):
                                active? activeAccounts.map(({id,description,status})=>(
                                    <tr className='modal-body modal-color' key={id}>
                                        <td>
                                            <ModalContent id={id} descripcion={description} estado={status} />
                                        </td>
                                    </tr>
                                )):accounts.map(({id,description,status})=>(
                                    <tr className='modal-body modal-color' key={id}>
                                        <td>
                                            <ModalContent id={id} descripcion={description} estado={status} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>

                {/* Formulario para el registro de las cuentas */}
            <div className='account-register'>
                <div className={`loan-creation__title ${isOpenRegister ? "open-accordion__tittle" : "closed-accordion__tittle"}`} onClick={handleToggleRegister}>
                    <h2>Crear Cuenta</h2>
                </div>
                
                <div className={`account-register__elements ${isOpenRegister ? "open-accordion__content" : "closed-accordion__content"}`}>
                    <form ref={form} action="" method="post" onSubmit={handleSubmit}>
                        <Input onChange={(e)=>setDescripcion(e.target.value)} 
                            type='text' className='account-register__description' placeholder='Descripcion Cuenta' title='descripcion' imgSrc={imagen1} altImg='descripcion' classImg='loan-creation__image--width' children='Descripcion' /> 
                        <Buttons type={'submit'} children={'Crear'} title={'crear'} className={'button-finances button-finances__account'} />
                    </form>
                </div>                
            </div>
        </div>
    )
}

export default Account
