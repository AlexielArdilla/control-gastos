import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import { generarID } from './Helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'


function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  const guardarGasto = gasto => {

    gasto.id = generarID()
    gasto.fecha = Date.now()

    setGastos([...gastos, gasto])

    setModal(false)

    setTimeout(() => {

      setAnimarModal(false)
    }, 700);

  }

  const handleNuevoGasto = () => {

    setModal(true)

    setTimeout(() => {

      setAnimarModal(true)
    }, 700);
  }

  return (
    <div className={modal ? 'fijar': undefined}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}

      />
      {isValidPresupuesto && (<>

        <main>
          <ListadoGastos
          gastos={gastos}
          />
        </main> <div className="nuevo-gasto">
          <img src={IconoNuevoGasto} alt="Icono para agregar gasto"
            onClick={handleNuevoGasto}
          />
        </div></>)}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      />}

    </div>
  )
}

export default App
