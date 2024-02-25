import React from "react";
import ModalContent from "./ModalContent";

interface ModalTableProps{
    descripcion:string;
    fecha?: string;
    monto?: string;
}
export interface modaltableprops extends React.HTMLAttributes<HTMLTableElement>{}

const ModalTable: React.FC<ModalTableProps> = ({descripcion,fecha,monto}) => {
    return (
        <table className="modalcontent">
            <div className="loan-creation__title">
                <h2>Consulta prestamos</h2>
            </div>
            <thead>
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
