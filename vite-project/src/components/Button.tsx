function Button() {
  const styles = {
    margin: "10px",
    fontFamily: "Helvetica",
  };

  return (
    <button type="button" className="btn btn-primary" style={styles}>
      Enviar Informe
    </button>
  );
}

export default Button;
