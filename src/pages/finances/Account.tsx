import React, { useState,useRef } from 'react'
import ModalTable from './components/ModalTable'
import ModalContent from './components/ModalContent'
import Input from './components/Input';
import imagen1 from '../../assets/icons_finances/buscando-trabajo (1).png';
import Buttons from './components/Buttons';

const Account = () => {
    const [descripcion, setDescripcion]= useState("");
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    
        const response = await fetch('url',{
            method:'POST',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-type':'application/json',
            },
            body:
            JSON.stringify({
                descripcion:descripcion
            })
        }).then(Response=>{
            if(!Response.ok){
                
                throw new Error(Response.statusText)

                alert(Response.statusText);
            }
            return Response.json();
        })
        console.log(response);
    };
    return (
        <div className='account'>
            <div className='account-table'>
                <ModalTable className='table table-thead' titulo='Consulta Cuenta' descripcion='Descripcion'
                    children={
                    <>
                    <ModalContent id='Id' descripcion='Descripcion'/>
                    <ModalContent id='Id' descripcion='Descripcion'/>
                    </>
                }/>
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
