type ModalProps = {
  estado: boolean;
  cambiarEstado: React.Dispatch<React.SetStateAction<boolean>>;
  mensaje?: string;
};

function Modal({ estado, cambiarEstado, mensaje }: ModalProps) {
  return (
    <>
      {estado && (
        <div
          className={`modal fade ${estado ? "show" : ""}`}
          tabIndex={-1}
          role="dialog"
          style={{ display: estado ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmación</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => cambiarEstado(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>{mensaje || "¿Deseas continuar?"}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => cambiarEstado(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    cambiarEstado(false);
                    console.log("Informe enviado");
                  }}
                >
                  Confirmar
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