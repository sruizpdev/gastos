import React from "react";

const Gasto = ({ gasto }) => {
  const { id, nombre, categoria } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="gasto">{nombre}</p>
        </div>
      </div>
    </div>
  );
};

export default Gasto;
