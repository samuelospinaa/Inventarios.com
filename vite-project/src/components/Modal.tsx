type ModalProps = {
  estado: boolean;
  cambiarEstado: React.Dispatch<React.SetStateAction<boolean>>;
};
function Modal({ estado, cambiarEstado }: ModalProps) {
  return (
    <>
      {estado && (
        <div className="modal" tabIndex={0}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Guardar gastos</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>{}</p>
                <ul>
                  {/* {ModifiedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))} */}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => cambiarEstado(false)}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Editar
                </button>
                <button type="button" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
