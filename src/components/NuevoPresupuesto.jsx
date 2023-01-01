import React from "react";

const NuevoPresupuesto = () => {
  return (
    <div className="contenedor contenedor-presupuesto sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input type="text" className="nuevo-presupuesto" placeholder="Añade tu presupuesto"/>
        </div>
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
