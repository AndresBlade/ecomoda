import React from "react"
import { useState,useRef} from "react";
import Buttons from "./Buttons";
import imagenEliminar from "../../../assets/icons_finances/basura.png";
import imagenEditar from "../../../assets/icons_finances/escritura.png";
import { deleteAccount } from "../helpers/DeleteAccount";
import {updateAccount } from "../helpers/UpdateAccount";
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
    const [descripcionUpdate, setDescripcionUpdate]= useState("");
    const [deleteId, setDeleteId]= useState("");
    const [estadoUpdate, setEstadoUpdate]= useState("");
    const handleUpdate = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const id = accountId;
        const description = descripcionUpdate;
        const status = estadoUpdate;
        updateAccount({id, description});

        form.current?.reset();
        setIsOpen(false);
    }
    console.log(deleteId)
    const handleDelete = async ()=>{
        
    }
    return(
    <>
        <Modal  isOpen={isOpen} setIsOpen={setIsOpen}>
            <form ref={form} action="" method="post" onSubmit={handleUpdate}>
                <h2 className="POS__title">Actualizar Cuenta</h2>
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
                    <button className="button-content"><img src={imagenEliminar} alt="eliminar" className="button-image" onClick={()=>setDeleteId(id)} /></button>
                    <button className="button-content" onClick={()=> setIsOpen(true)}><img src={imagenEditar} alt="eliminar"className="button-image" /></button>
                    
                </div>
            </div>
    </>
    )
}

export default ModalContent
