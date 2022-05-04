import { useState } from "react"

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {

const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault()

    if(!Number(presupuesto)|| Number(presupuesto)<0){

      setMensaje("No es un presupuesto válido")
    }else{
      console.log("Es un presupuesto válido")
    }

  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
          <label>Definir presupuesto</label>
          <input type="text"
            className='nuevo-presupuesto'
            placeholder='añade tu presupuesto'
            value={presupuesto}
            onChange={e => setPresupuesto(e.target.value)}
          />
        </div>
        <input type="submit" value='añadir' />
      </form>
    </div>
  )
}

export default NuevoPresupuesto