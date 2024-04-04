// InvoiceHeader.tsx
import React from "react";

const InvoiceHeader = () => {
  return (
    <>
      <div className="invoice-header">
        <h2>Factura 01</h2>
        <p>04/02/2024</p>
        <p>FACTURADO POR</p>
        <p>ECOMODA, C.A</p>
        <p>1311 Cra.62, Bogotá, Colombia</p>
      </div>

      <div className="invoice-header">
        <h2>Factura 02</h2>
        <p>03/04/2024</p>
        <p>FACTURADO POR</p>
        <p>ECOMODA, C.A</p>
        <p>Urb La Rosaleda 56</p>
      </div>
    </>
  );
};

export default InvoiceHeader;
