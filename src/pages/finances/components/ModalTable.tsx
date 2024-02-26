import React from "react";
import ModalContent from "./ModalContent";
import Search from "./Search";
interface ModalTableProps{
    descripcion:string;
    fecha?: string;
    monto?: string;
}
export interface modaltableprops extends React.HTMLAttributes<HTMLTableElement>{}

const ModalTable: React.FC<ModalTableProps> = ({descripcion,fecha,monto}) => {
    return (
        <table className="modal-table">
            <div className="loan-creation__title loan-creation__title__modal">
                <h2>Consulta prestamos</h2>
            </div>
            <Search/>
            <thead className="modal-table modal-table__thead">
                <td>Id</td>
                <td>{descripcion}</td>
                <td>{fecha}</td>
                <td>{monto}</td>
                <td>Acciones</td>
            </thead>
            <tbody>
                <ModalContent id={'1'} descripcion={"Compra de maquinaria"} fecha={"01/01/2024"} monto={'800.00'} />
                <ModalContent id={'1'} descripcion={"Compra de maquinaria"} fecha={"01/01/2024"} monto={'800.00'} />
                <ModalContent id={'1'} descripcion={"Compra de maquinaria"} fecha={"01/01/2024"} monto={'800.00'} />
                <ModalContent id={'1'} descripcion={"Compra de maquinaria"} fecha={"01/01/2024"} monto={'800.00'} />
            </tbody>
        </table>
    )
}

export default ModalTable
