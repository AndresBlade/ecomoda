import React from "react";
import ModalContent from "./ModalContent";
import Search from "./Search";
interface ModalTableProps{
    descripcion:string;
    fecha?: string;
    monto?: string;
    children?: React.ReactNode;
    titulo: string
    className: string;
}
export interface modaltableprops extends React.HTMLAttributes<HTMLTableElement>{}

const ModalTable: React.FC<ModalTableProps> = ({descripcion,fecha,monto,children,titulo, className}) => {
    return (
        <table className="modal-table">
            <div className="loan-creation__title loan-creation__title__modal">
                <h2>{titulo}</h2>
            </div>
            <Search/>
            <thead className={className}>
                <td>Id</td>
                <td>{descripcion}</td>
                <td>{fecha}</td>
                <td>{monto}</td>
                <td>Acciones</td>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default ModalTable
