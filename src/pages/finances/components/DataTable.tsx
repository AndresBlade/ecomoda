import React, { FC } from 'react';

interface InfoComponentProps {
  fecha: string;
  bs: string;
  dolares: string;
}

const data = [
  { id: 1482, fecha: '01-01-2024', descripcion: 'Prestamo Ventas', monto: 'Bs.800,00' },
  { id: 1483, fecha: '01-01-2024', descripcion: 'Prestamo Otros', monto: 'Bs.800,00' },
  { id: 1488, fecha: '01-01-2024', descripcion: 'Prestamo Ventas', monto: 'Bs.800,00' },
  { id: 1485, fecha: '01-01-2024', descripcion: 'Prestamo Tecnologia', monto: 'Bs.800,00' },
  { id: 1487, fecha: '01-01-2024', descripcion: 'Prestamo Ventas', monto: 'Bs.800,00' },
];

const InfoTableComponent: FC<InfoComponentProps> = ({ fecha, bs, dolares }) => {
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
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="info-component__table-row">
                <td>{row.id}</td>
                <td>{row.fecha}</td>
                <td>{row.descripcion}</td>
                <td>{row.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTableComponent;
