import Buttons from './components/Buttons';
import imagen from '../../assets/icons_finances/codigo-de-barras.png';
import imagen1 from '../../assets/icons_finances/buscando-trabajo (1).png';
import imagen2 from '../../assets/icons_finances/calendario (1).png';
import imagen3 from '../../assets/icons_finances/dar-dinero (1).png';
import imagen7 from '../../assets/icons_finances/advertencia (1).png';
import ApplicantData from './components/ApplicantData';
import Input from './components/Input';
import React, { useRef, useState } from 'react';
import Alert from './components/Alert';
import {Modal} from '../../components/ui/modal/Modal';
import ModalTable from './components/ModalTable';

export const Loan = () => {
    const [id, setId] = useState(0);
    const [fecha, setFecha] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [tipo, setTipo] = useState("");
    const [monto, setMonto] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(false);

    //Funcion para limpiar los campos del formulario
    const form = useRef<HTMLFormElement>(null);

    const clearInputs = ()=>{
        if(form.current){
            form.current.reset();
        }
        setId(0);
        setFecha("");
        setDescripcion('')
        setTipo('');
        setMonto(0);
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        if([id,fecha,descripcion,tipo,monto].includes('')){
            setError(true);
            return;
        }
        setError(false)

        const response = await fetch('url',{
            method:'POST',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-type':'application/json',
            },
            body:
            JSON.stringify({
                id:id,
                fecha:fecha,
                descripcion:descripcion,
                tipo:tipo,
                monto:monto,
            })
        }).then(Response=>{
            if(!Response.ok){
                
                throw new Error(Response.statusText)
    
                alert(Response.statusText);
            }
            return Response.json();
        })
        console.log(response);

        clearInputs();

    };

    return (
        <div className="principal-finances">  
        <form ref={form} action="" method="post" onSubmit={handleSubmit}>
            {error && <Alert
                            imgSrc={imagen7} altImg={'error'}
                            children="Hay algún campo vacio ó uno de los datos no corresponden al formato solicitado"
                        />}
            <div className="loan-creation"> {/* div for loan creation */}
                <div className="loan-creation__title">
                    <h2>Crear Prestamo</h2>
                </div>
                    <div className="loan-creation__elements">
                        <div className="loan-creation__container--input loan-creation__container--input-id">
                            <Input onChange={
                                (event)=>{
                                    setId(Number(event.target.value));
                                }
                            } type='number' className='loan__creation--input' placeholder='Su id' title='id' imgSrc={imagen} altImg={'ID'} classImg='loan-creation__image--width' children='ID'/>                           
                        </div>
                        <div className="loan-creation__container--input
                        loan-creation__container--input-fecha">
                            <Input onChange={
                                (event)=>{
                                    setFecha(event.target.value);
                                }
                            }
                            type='date' className='loan__creation--input' placeholder='' title='fecha' imgSrc={imagen2} altImg='fecha' classImg='loan-creation__image--width' children='Fecha' /> 
                        </div>
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
                                    setTipo(event.target.value);
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
                        <Buttons onClick={()=>setIsOpen(true)} type='button' title='consultar' children='Consultar' className='button-finances button-finances-grid'/>
                    </div>
                </div> 
            </form>
                {/* Here end div Principal-Finances */}
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <ModalTable className='modal-table modal-table__thead' titulo='Consulta Prestamos' descripcion='descripcion' fecha='Fecha' monto='Monto' />
            </Modal>
            <ApplicantData/>
        </div>
    )
}

export default Loan
