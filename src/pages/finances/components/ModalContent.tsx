import React from "react"
import Buttons from "./Buttons";
import imagenEliminar from "../../../assets/icons_finances/basura.png";
import imagenEditar from "../../../assets/icons_finances/escritura.png";
import {updateAccount} from "../helpers/UpdateAccount";
import { Modal } from "../../../components/ui/modal/Modal";

interface ModalContentProps{
    id: string;
    descripcion?:string;
}

export interface modalcontentprops extends React.HTMLAttributes<HTMLDivElement>{}

const ModalContent:React.FC<ModalContentProps> = ({id,descripcion}) => {
    const accountId= id;
    const accountDescription= descripcion;
    const handleUpdate = async (id:string, descripcion:string | undefined)=>{
        <Modal/>
    }

    console.log(handleUpdate)
    return (
        <div className="modal-content">
            <p>{id}</p>
            <p>{descripcion}</p>
            <div>
                <button className="button-content"><img src={imagenEliminar} alt="eliminar" className="button-image"/></button>
                <button className="button-content" onClick={()=>handleUpdate(accountId,accountDescription)}><img src={imagenEditar} alt="eliminar"className="button-image" /></button>
                
            </div>
        </div>
    )
}

export default ModalContent
