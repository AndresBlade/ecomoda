import React from "react"
import { useState,useRef} from "react";
import Buttons from "./Buttons";
import imagenEliminar from "../../../assets/icons_finances/basura.png";
import imagenEditar from "../../../assets/icons_finances/escritura.png";
import { deleteAccount } from "../helpers/DeleteAccount";
import {updateAccount } from "../helpers/UpdateAccount";
import { updateRequestTypes } from "../helpers/UpdateRequestType";
import { Modal } from "../../../components/ui/modal/Modal";

interface ModalContentProps{
    id: string;
    descripcion?:string;
    estado?:string;
}

export interface modalcontentprops extends React.HTMLAttributes<HTMLDivElement>{}

const ModalContent:React.FC<ModalContentProps> = ({id,descripcion,estado}) => {
	const [isOpen, setIsOpen] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const accountId= id;
    const [descripcionUpdate, setDescripcionUpdate]= useState(descripcion);
    const [deleteId, setDeleteId]= useState("");
    const [estadoUpdate, setEstadoUpdate]= useState(estado);
    const handleUpdate = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const id = accountId;
        const description = descripcionUpdate ?? "hubo un problema";
        const status = estadoUpdate ?? "hubo un problema";
        if(window.location.pathname === "/finanzas/account"){
            console.log("entro aca")
            updateAccount({id, description, status});
        }else{
            console.log("entro desde request type")
            updateRequestTypes({id, description, status});
        }
        setIsOpen(false);
    }
    const handleDelete = async ()=>{
        deleteAccount({id:deleteId});
    }
    return(
    <>
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
                            Descripcion
                        </label>
                        <input
                            required
                            id="name"
                            name="name"
                            type="text"
                            className="POS__input"
                            value={descripcionUpdate}
                            onChange={(e)=>setDescripcionUpdate(e.target.value)}
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
                        onChange={(e)=>setEstadoUpdate(e.target.value)}
                        />
                    </div>
                    <Buttons type={'submit'} children={'Actualizar'} title={'crear'} className={'button-finances button-finances__account'} />
                </fieldset>
            </form>
        </Modal>
        <div className="modal-content">
                <p>{id}</p>
                <p>{descripcion}</p>
                <p>{estado}</p>
                <div>
                    <button className="button-content"><img src={imagenEliminar} alt="eliminar" className="button-image" onClick={()=>{
                        setDeleteId(id)
                        handleDelete()
                    }} /></button>
                    <button className="button-content" onClick={()=> setIsOpen(true)}><img src={imagenEditar} alt="eliminar"className="button-image" /></button>
                    
                </div>
            </div>
    </>
    )
}

export default ModalContent
