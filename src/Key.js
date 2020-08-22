import React from 'react';

const Key = ({estaSonando, nota, handleClick}) => {
  return (
    <>
    <div
      className={`nota ${estaSonando === nota.nombre && 'suena'}`}
      onClick={() => handleClick(nota)}
    >
          {nota.tieneSostenido && <div className="negra"></div>}
    </div>

    </>
  );
};

export default Key;
