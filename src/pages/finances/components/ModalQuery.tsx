import React, { FC, useState } from "react"
import ModalTable from "./ModalContent"
interface modalprops{
    isOpen : false;
    children : React.ReactNode;
    onclose: true;
    onClick : React.MouseEventHandler<HTMLButtonElement> 
}
export interface modaltableprops extends React.HTMLAttributes<HTMLTableElement>{}

const ModalQuery = () => {
    return (
        <div className="modalquery">
            <ModalTable id="id" descripcion="descripcion" fecha={"Fecha"}/>
        </div>
    )
}

export default ModalQuery


