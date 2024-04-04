import React from "react";

const InvoiceDescription = () => {
  const items = [
    { id: 1, name: "BOTONES", quantity: 1, unitPrice: 1000 },
    { id: 2, name: "HILO PARA COSER", quantity: 3, unitPrice: 1500 },
    { id: 3, name: "TELA DE ALGODÓN", quantity: 1, unitPrice: 6000 },
  ];
  const secondItem = items[1];

  return (
    <>
      <div className="invoice-description">
        {items.map((item) => (
          <div key={item.id} className="item-description">
            <p>{item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>P/UNIT: {item.unitPrice}</p>
          </div>
        ))}
      </div>

      <div className="invoice-description">
        <div key={secondItem.id} className="item-description">
          <p>{secondItem.name}</p>
          <p>Cantidad: {secondItem.quantity}</p>
          <p>P/UNIT: {secondItem.unitPrice}</p>
        </div>
      </div>
    </>
  );
};

export default InvoiceDescription;
