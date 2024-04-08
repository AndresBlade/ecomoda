import React from "react"
import { useState,useRef} from "react";
import Buttons from "./Buttons";
import imagenAceptar from "../../../assets/icons_finances/aceptar-el-contorno-del-boton-circular.png";
import imagenEliminar from "../../../assets/icons_finances/basura.png";
import { Modal } from "../../../components/ui/modal/Modal";
import { GetActiveRequestType } from "../helpers/GetRequestType";
interface ModalContentProps{
    id: string,
    amount: string;
    description: string;
    type_id: number;
    status: string;
}

export interface modalcontentprops extends React.HTMLAttributes<HTMLDivElement>{}

const ModalContentRequest:React.FC<ModalContentProps> = ({id,amount,description,type_id,status}) => {
	const [isOpen, setIsOpen] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const accountId= id;
    const [descripcionUpdate, setDescripcionUpdate]= useState(description);
    const [deleteId, setDeleteId]= useState("");
    const [estadoUpdate, setEstadoUpdate]= useState(status);
    const account = GetActiveRequestType();
    const [account_id, setAccount_id]= useState("");
    const [debeHaber, setDebeHaber]= useState("");
    const [accept, setAccept]= useState(false);
    const [decline, setDecline]= useState(false);
    const [razonUpdate, setRazonUpdate]= useState("");

    const tipoDebeHaber = {
        "data":[
            { 
                id:1,
                description:"Haber"
            },
        
            {
                id:2,
                description:"Debe"
            }
        ]
    }

    console.log(razonUpdate)
    const handleUpdate = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const id = accountId;
        const description = descripcionUpdate ?? "hubo un problema";
        const status = estadoUpdate ?? "hubo un problema";
        
        setIsOpen(false);
    }    
    return(
        <>  
            {accept? <Modal  isOpen={isOpen} setIsOpen={setIsOpen} >
                <form ref={form} action="" method="post" onSubmit={handleUpdate} className="form-request">
                    <h2 className="POS__title">Actualizar</h2>
                    <fieldset className="POS__fieldset">
                        <div className="POS__field-wrapper">
                            <label htmlFor="code" className="POS__label">
                                Código
                            </label>
                            <input
                                id="code"
                                name="code"
                                required
                                type="text"
                                className="POS__input"
                                value={id}
                                disabled={true}
                            />
                        </div>
                        <div className="POS__field-wrapper">
                            <label htmlFor="name" className="POS__label">
                                Monto
                            </label>
                            <input
                                required
                                id="name"
                                name="name"
                                type="text"
                                className="POS__input"
                                value={amount}
                                disabled={true}

                            />
                        </div>
                        <div className="POS__field-wrapper">
                            <label htmlFor="name" className="POS__label">
                                Descripcion
                            </label>
                            <input
                                required
                                id="name"
                                name="name"
                                type="text"
                                className="POS__input"
                                value={descripcionUpdate}
                                disabled={true}

                            />
                        </div>
                        <div className="POS__field-wrapper">
                            <label htmlFor="type" className="POS__label">
                                Tipo
                            </label>
                            <input
                                required
                                id="type"
                                name="type"
                                type="text"
                                className="POS__input"
                                value={type_id}
                                disabled={true}

                            />
                            </div>
                        <div className="POS__field-wrapper">
                            <label htmlFor="status" className="POS__label">
                                Status
                            </label>
                            <input 
                            required
                            id="status"
                            name="status"
                            type="text" 
                            className="POS__input"
                            value={estadoUpdate}
                            disabled={true}

                            />
                        </div>
                        <div className="POS__field-wrapper">
                            <label htmlFor="account" className="POS__label">
                                Seleccionar Cuenta
                            </label>
                            <select name="account" id="account" className="POS__input" onChange={(e)=>setAccount_id(e.target.value)}>
                                {account.map(({id,description})=>(
                                    <option value={id}>{description}</option>
                                ))}
                            </select>
                        </div>
                        <div className="POS__field-wrapper">
                            <label htmlFor="account" className="POS__label">
                                Debe o Haber
                            </label>
                            <select name="account" id="account" className="POS__input" onChange={(e)=>setDebeHaber(e.target.value)}>
                                {tipoDebeHaber.data.map(({id,description})=>(
                                    <option value={description} key={id}>{description}</option>
                                ))}
                            </select>
                        </div>
                        
                        <Buttons type={'submit'} children={'Actualizar'} title={'crear'} className={'button-finances button-finances__account'} />
                    </fieldset>
                </form>
            </Modal> :
            <Modal  isOpen={isOpen} setIsOpen={setIsOpen}>
            <form ref={form} action="" method="post" onSubmit={handleUpdate}>
                <h2 className="POS__title">Actualizar</h2>
                <fieldset className="POS__fieldset">
                    <div className="POS__field-wrapper">
                        <label htmlFor="code" className="POS__label">
                            Código
                        </label>
                        <input
                            id="code"
                            name="code"
                            required
                            type="text"
                            className="POS__input"
                            value={id}
                            disabled={true}
                        />
                    </div>
                    <div className="POS__field-wrapper">
                        <label htmlFor="name" className="POS__label">
                            Monto
                        </label>
                        <input
                            required
                            id="name"
                            name="name"
                            type="text"
                            className="POS__input"
                            value={amount}
                            disabled={true}

                        />
                    </div>
                    <div className="POS__field-wrapper">
                        <label htmlFor="name" className="POS__label">
                            Descripcion
                        </label>
                        <input
                            required
                            id="name"
                            name="name"
                            type="text"
                            className="POS__input"
                            value={descripcionUpdate}
                            disabled={true}

                        />
                    </div>
                    <div className="POS__field-wrapper">
                        <label htmlFor="type" className="POS__label">
                            Tipo
                        </label>
                        <input
                            required
                            id="type"
                            name="type"
                            type="text"
                            className="POS__input"
                            value={type_id}
                            disabled={true}

                        />
                        </div>
                    <div className="POS__field-wrapper">
                        <label htmlFor="status" className="POS__label">
                            Status
                        </label>
                        <input 
                        required
                        id="status"
                        name="status"
                        type="text" 
                        className="POS__input"
                        value={estadoUpdate}
                        disabled={true}

                        />
                    </div>
                    <div className="POS__field-wrapper">
                        <label htmlFor="account" className="POS__label">
                            Razon
                        </label>
                        <input 
                            required
                            id="status"
                            name="status"
                            type="text" 
                            className="POS__input"
                            value={razonUpdate}
                            onChange={(e)=>setRazonUpdate(e.target.value)}
                        />
                        
                    </div>
                    <Buttons type={'submit'} children={'Enviar'} title={'crear'} className={'button-finances button-finances__account'} />
                </fieldset>
            </form>
        </Modal> 
            
            }
            <div className="modal-content">
                <p>{id}</p>
                <p>{amount}</p>
                <p>{description}</p>
                <p>{type_id}</p>
                <p>{status}</p>
                <div className="container-button">
                    <button className="button-accept" onClick={() => {
                            setAccept(true);
                            setIsOpen(true);
                        }}>
                        <img src={imagenAceptar} alt="aceptar" className="button-image" />
                    </button>
                    <button className="button-accept" onClick={() =>{
                        setDecline(true)
                        setIsOpen(true)
                    }}>
                        <img src={imagenEliminar} alt="eliminar" className="button-image" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ModalContentRequest