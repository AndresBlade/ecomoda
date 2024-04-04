import React from "react";

const InvoiceTotal = () => {
  const subtotal = 10000;
  const total = subtotal;

  return (
    <>
      <div className="invoice-total">
        <p>TOTAL COMPRA:</p>
        <p>t {subtotal}</p>
        <p>TOTAL:</p>
        <p>₺ {total}</p>
        <p>METODO DE PAGO</p>
        <p>Banco: BANCOLOMBIA</p>
        <p>Ref: 444466</p>
        <p>Titular: ECOMODA, C.A</p>
      </div>

      <div className="invoice-total">
        <p>TOTAL COMPRA:</p>
        <p>t {subtotal + 5000}</p>
        <p>TOTAL:</p>
        <p>₺ {total + 5000}</p>
        <p>METODO DE PAGO</p>
        <p>Banco: BANCAAMIGA</p>
        <p>Ref: 78943456</p>
        <p>Titular: ECOMODA, C.A</p>
      </div>
    </>
  );
};

export default InvoiceTotal;
