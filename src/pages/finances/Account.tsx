import React, { useState,useRef, useEffect } from 'react'
import ModalTable from './components/ModalTable'
import ModalContent from './components/ModalContent'
import Input from './components/Input';
import imagen1 from '../../assets/icons_finances/buscando-trabajo (1).png';
import Buttons from './components/Buttons';
import { json } from 'react-router-dom';
import { createAccount } from './helpers/AccountFetching';
import { GetAccounts } from './helpers/GetAccounts';
import Search from './components/Search';


const Account = () => {
    const [descripcion, setDescripcion]= useState("");
    const accounts  = GetAccounts();
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const description = descripcion;
        
        createAccount({description});

        form.current?.reset();
    };


    
    return (
        <div className='account'>
            <div className='account-table'>
            <table className="modal-table">
            <div className="loan-creation__title loan-creation__title__modal">
                <h2>Consulta Cuenta</h2>
            </div>
            <Search/>
            <thead className='table table-thead'>
                <td>Id</td>
                <td>descripcion</td>
                <td>Acciones</td>
            </thead>
            <tbody>
                {
                    accounts.map(({id,description})=>(
                        <tr>
                            <td>
                                <ModalContent id={id} descripcion={description}/>
                            </td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>
    
            </div>
            <div className='account-register'>
                <div className="loan-creation__title">
                    <h2>Crear Cuenta</h2>
                </div> 
                <form ref={form} action="" method="post" onSubmit={handleSubmit}>
                    <div className='account-register__elements'>
                        <Input onChange={(e)=>setDescripcion(e.target.value)} 
                            type='text' className='account-register__description' placeholder='Descripcion Cuenta' title='descripcion' imgSrc={imagen1} altImg='descripcion' classImg='loan-creation__image--width' children='Descripcion' /> 
                        <Buttons type={'submit'} children={'Crear'} title={'crear'} className={'button-finances button-finances__account'} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Account
