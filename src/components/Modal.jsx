import CerrarBtn from '../img/cerrar.svg'

const Modal = () => {
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="Boton para cerrar" />
        </div>
    </div>
  )
}

export default Modal