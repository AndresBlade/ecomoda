import Buttons from './components/Buttons';
import imagen from '../../assets/icons_finances/codigo-de-barras.png';
import imagen1 from '../../assets/icons_finances/buscando-trabajo (1).png';
import imagen2 from '../../assets/icons_finances/calendario (1).png';
import imagen3 from '../../assets/icons_finances/dar-dinero (1).png';
import ApplicantData from './components/ApplicantData';
import Input from './components/Input';
import React, { useRef, useState } from 'react';
import { LoanPost } from './helpers/LoanPost';

export const Loan = () => {
    //const [id, setId] = useState(0);
    const [fecha, setFecha] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [tipo, setTipo] = useState(0);
    const [monto, setMonto] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(false);

    //Funcion para limpiar los campos del formulario
    const form = useRef<HTMLFormElement>(null);

    const clearInputs = ()=>{
        if(form.current){
            form.current.reset();
        }
        setDescripcion('')
        setTipo(0);
        setMonto(0);
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        if([descripcion,tipo,monto].includes('')){
            setError(true);
            return;
        }else{
            LoanPost({descripcion,tipo,monto});
        }
        setError(false)
        clearInputs();
    };

    const [isOpenRegister, setIsOpenRegister] = useState(false);

    const handleToggleRegister = () => {
        setIsOpenRegister(!isOpenRegister);
    };

    return (
        <div className="principal-finances">  
            
            <div className="loan-creation"> {/* div for loan creation */}
                <div className={`loan-creation__title ${isOpenRegister ? "open-accordion__tittle" : "closed-accordion__tittle"}`} onClick={handleToggleRegister}>
                    <h2>Crear Prestamo</h2>
                </div>
                <div className={`loan-creation__content ${isOpenRegister ? "open-accordion__content" : "closed-accordion__content"}`}>
                    <form ref={form} action="" method="post" onSubmit={handleSubmit}>
                        <div className="loan-creation__elements">
                            <div className="loan-creation__container--input
                            loan-creation__container--input-descripcion">
                                <Input onChange={
                                    (event)=>{
                                        setDescripcion(event.target.value);
                                    }
                                } 
                                type='text' className='loan__creation--input' placeholder='Descripcion prestamo' title='descripcion' imgSrc={imagen1} altImg='descripcion' classImg='loan-creation__image--width' children='descripcion' /> 
                            </div>
                            <div className="loan-creation__container--input
                            loan-creation__container--input-tipo">
                                <Input onChange={
                                    (event)=>{
                                        setTipo(Number(event.target.value));
                                    }
                                } type='text' className='loan__creation--input' placeholder='Tipo' title='tipo' imgSrc={imagen} altImg={'ID'} classImg='loan-creation__image--width' children='Tipo' /> 
                            </div>
                            <div className="loan-creation__container--input loan-creation__container--input-monto">
                                <Input onChange={
                                    (event)=>{
                                        setMonto(Number(event.target.value));
                                    }
                                }type='number' className='loan__creation--input' placeholder='800,00Bs' title='monto' imgSrc={imagen3} altImg='monto' classImg='loan-creation__image--width' children='monto' /> 
                            </div>
                        </div>
                        <div className="loan-creation__input-submit">
            
                        </div>
                        <div className='button-finances__center'>
                            <Buttons type='submit' title='solicitar' children="Solicitar" className='button-finances button-finances-grid'/>
                            <Buttons onClick={clearInputs} type='reset' title='limpiar' children="Limpiar" className='button-finances'/>
                            <Buttons onClick={()=> setIsOpen(true)} type='button' title='consultar'children='Consultar' className='button-finances button-finances-grid'/>
                        </div>
                    </form>
                </div>
            </div> 
            
                    {/* Here end div Principal-Finances */}
                <ApplicantData/>
        </div>
    )
}

export default Loan
