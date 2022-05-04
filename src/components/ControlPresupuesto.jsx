

const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Grafica</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Control presupuesto: </span>${presupuesto}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto