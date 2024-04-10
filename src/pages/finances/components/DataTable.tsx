import React, { FC } from 'react';
import { GetRequest } from '../helpers/GetRequest';

interface InfoComponentProps {
  fecha: string;
  bs: string;
  dolares: string;
}


const InfoTableComponent: FC<InfoComponentProps> = ({ fecha, bs, dolares }) => {
  const data = GetRequest();
  return (
    <>
      <div className="info-component">
        <div className="info-component__fecha">Fecha: {fecha}</div>
        <div className="info-component__bs">Bs. {bs}</div>
        <div className="info-component__dolares">$ {dolares}</div>
        <hr className="info-component__hr-orange" />
      </div>
      <br />
      <br />
      <div className="info-component__info-table-container">
        <table className="info-component__info-table">
          <thead>
            <tr className="info-component__table-header">
              <th>ID</th>
              <th>Monto</th>
              <th>Descripción</th>
              <th>Tipo</th>
              <th>Status</th>
              <th>Creada</th>
              <th>Actualizada</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="info-component__table-row">
                <td>{row.id}</td>
                <td>{row.amount}</td>
                <td>{row.description}</td>
                <td>{row.type_id}</td>
                <td>{row.status}</td>
                <td>{row.createdAt}</td>
                <td>{row.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTableComponent;
