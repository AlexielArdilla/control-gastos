import React from 'react'

const NuevoPresupuesto = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input type="text"
                className='nuevo-presupuesto'
                placeholder='añade tu presupuesto'
                />
            </div>
            <input type="submit" value='añadir'/>
        </form>
    </div>
  )
}

export default NuevoPresupuesto