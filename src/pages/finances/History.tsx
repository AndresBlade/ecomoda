import React from 'react';
import DataTable from './components/DataTable';

function History() {
  return (
    <>
    <div className="History">
      <DataTable fecha="01-01-2024" bs="800,00" dolares="20,00" />
    </div>
    </>
  );
}

export default History;
