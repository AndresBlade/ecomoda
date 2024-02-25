import React from "react"
import Buttons from "./Buttons";
import imagenEliminar from "../../../assets/icons_finances/basura.png";
import imagenEditar from "../../../assets/icons_finances/escritura.png";

interface ModalContentProps{
    id: string;
    descripcion:string;
    fecha: string;
    monto?: string;
}

export interface modalcontentprops extends React.HTMLAttributes<HTMLDivElement>{}

const ModalContent:React.FC<ModalContentProps> = ({id,descripcion,fecha,monto}) => {
    return (
        <div className="modalcontent">
            <p>{id}</p>
            <p>{descripcion}</p>
            <p>{fecha}</p>
            <p>{monto}</p>
            <div>
                <Buttons type={"submit"} children={imagenEliminar} title={"eliminar"} className={"button-finances"}/>
                <Buttons type={"submit"} children={imagenEditar} title={"editar"} className={"button-finances"}/>
            </div>
        </div>
    )
}

export default ModalContent
