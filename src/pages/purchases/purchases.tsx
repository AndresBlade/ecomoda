import React from "react";
import "../../assets/global.css"
import InvoiceDescription from './InvoiceDescription';
import InvoiceTotal from './InvoiceTotal';
import InvoiceHeader from './InvoiceHeader';
import InvoiceFooter from './InvoiceFooter';

// const Invoice = () => {
//   return (
//     <div className="invoice">
//       <InvoiceHeader />
//       <InvoiceDescription />
//       <InvoiceTotal />
//       <InvoiceFooter />
//     </div>
//   );
// };



const Invoice = () => {
  return (
    <table className="invoice-table">
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Precio/Unidad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <InvoiceHeader />
          </td>
          <td>
            <InvoiceDescription />
          </td>
          <td>
            <InvoiceTotal />
          </td>
          <td>
            <InvoiceFooter />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Invoice;


// const InvoiceHeader = () => {
//   return (
//     <div className="invoice-header">
//       <h2>Factura 01</h2>
//       <p>04/02/2024</p>
//       <p>FACTURADO POR</p>
//       <p>ECOMODA, C.A</p>
//       <p>1311 Cra.62, Bogotá, Colombia</p>
//     </div>
//   );
// };

// const InvoiceDescription = () => {
//   const items = [
//     { id: 1, name: "BOTONES", quantity: 1, unitPrice: 1000 },
//     { id: 2, name: "HILO PARA COSER", quantity: 3, unitPrice: 1500 },
//     { id: 3, name: "TELA DE ALGODÓN", quantity: 1, unitPrice: 6000 },
//   ];

//   return (
//     <div className="invoice-description">
//       {items.map((item) => (
//         <div key={item.id} className="item-description">
//           <p>{item.name}</p>
//           <p>Cantidad: {item.quantity}</p>
//           <p>P/UNIT: {item.unitPrice}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// const InvoiceTotal = () => {
//   const subtotal = 10000;
//   const total = subtotal;

//   return (
//     <div className="invoice-total">
//       <p>TOTAL COMPRA:</p>
//       <p>t {subtotal}</p>
//       <p>TOTAL:</p>
//       <p>₺ {total}</p>
//       <p>METODO DE PAGO</p>
//       <p>Banco: BANCOLOMBIA</p>
//       <p>Ref: 444466</p>
//       <p>Titular: ECOMODA, C.A</p>
//     </div>
//   );
// };

// const InvoiceFooter = () => {
//   return (
//     <div className="invoice-footer">
//       <p>
//         PAGADO POR <br />
//         ECOMODA, C.A <br />
//         1311 Cra 62, Bogotá, Colombia
//       </p>
//       <p>
//         CONTACTO <br />
//         ecomoda@compras.com <br />
//         +90 555 444 33 22 <br />
//         <a href="https://ecomoda.compras.com">https://ecomoda.compras.com</a>
//       </p>
//     </div>
//   );
// };


