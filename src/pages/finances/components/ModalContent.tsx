import React from "react"
import Buttons from "./Buttons";
import imagenEliminar from "../../../assets/icons_finances/basura.png";
import imagenEditar from "../../../assets/icons_finances/escritura.png";

interface ModalContentProps{
    id: string;
    descripcion:string;
    fecha?: string;
    monto?: string;
}

export interface modalcontentprops extends React.HTMLAttributes<HTMLDivElement>{}


const ModalContent:React.FC<ModalContentProps> = ({id,descripcion,fecha,monto}) => {
    return (
        <div className="modal-content">
            <p>{id}</p>
            <p>{descripcion}</p>
            <p className="modal-content__fecha">{fecha}</p>
            <p className="modal-content__monto">{monto}</p>
            <div>
                <button className="button-content"><img src={imagenEliminar} alt="eliminar" className="button-image"/></button>
                <button className="button-content"><img src={imagenEditar} alt="eliminar"className="button-image" /></button>
                
            </div>
        </div>
    )
}

export default ModalContent
