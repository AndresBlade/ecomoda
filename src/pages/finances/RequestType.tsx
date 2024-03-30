import React,{ useState,useRef, useEffect } from 'react'
import Buttons from './components/Buttons'
import ModalContent from './components/ModalContent'
import Input from './components/Input';
import { PostRequestType } from './helpers/PostRequestType';
import imagen1 from '../../assets/icons_finances/buscando-trabajo (1).png';
import { GetRequestType, GetActiveRequestType, GetInactiveRequestType} from './helpers/GetRequestType';

const RequestType = () => {
    const [descripcion, setDescripcion]= useState("");
    const requestTypes = GetRequestType();
    const activeRequestTypes = GetActiveRequestType();
    const inactiveRequestTypes = GetInactiveRequestType();
    const [inactive, setInactive]= useState(false);
    const [active, setActive]= useState(false);
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const description = descripcion;
        
        PostRequestType({description});

        form.current?.reset();
    }
    return (
        <div className='request-type__container'>
        <div className='request-type__table'>
            
                <div className="loan-creation__title loan-creation__title__modal">
                    <h2>Consulta Tipo Prestamos</h2>
                </div>
                {/* Aqui se llama el componente Search que es el encargado de hacer la busqueda de las cuentas */}
                <div className='account-buttons__filter'>
                    <Buttons type={'submit'} children={'Inactivas'} title={'consultar'} className={'button-finances button-finances__account'} onClick={()=>{
                        setInactive(true);
                        setActive(false);
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
            <table className="modal-table">
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
                        active?activeRequestTypes.map(({id,description,status})=>(
                            <tr className='modal-body modal-color' key={id}>
                                <td>
                                    <ModalContent id={id} descripcion={description} estado={status} />
                                </td>
                            </tr>
                        )):
                        inactive? inactiveRequestTypes.map(({id,description,status})=>(
                            <tr className='modal-body modal-color' key={id}>
                                <td>
                                    <ModalContent id={id} descripcion={description} estado={status} />
                                </td>
                            </tr>
                        )):
                        requestTypes.map(({id,description,status})=>(
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
                {/* Formulario para el registro de las cuentas */}
        <div className='account-register'>
            <div className="loan-creation__title">
                <h2>Crear Tipo Prestamo</h2>
            </div> 
            <form ref={form} action="" method="post" onSubmit={handleSubmit}>
                <div className='account-register__elements'>
                    <Input onChange={(e)=>setDescripcion(e.target.value)} 
                        type='text' className='account-register__description' placeholder='Descripcion tipo prestamo' title='descripcion' imgSrc={imagen1} altImg='descripcion' classImg='loan-creation__image--width' children='Descripcion' /> 
                    <Buttons type={'submit'} children={'Crear'} title={'crear'} className={'button-finances button-finances__account'} />
                </div>
            </form>
        </div>
    </div>
  )
}

export default RequestType
