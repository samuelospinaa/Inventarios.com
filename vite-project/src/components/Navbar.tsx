type NavProps = {
  Prima: string[];
  Bebidas: string[];
  Empaques: string[];
  Salsas: string[];
  Implementos?: string[];
};

function Navbar({ Prima, Bebidas, Empaques, Salsas }: NavProps) {
  return (
    <div>
      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a
          className="navbar-brand"
          href="https://www.instagram.com/brooklynstreetwings?igsh=MWsxMHNtbHEzYW16YQ=="
        >
          Grupo SPOG
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              Materia Prima
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Bebidas
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Otros
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Empaques
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Salsas
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabIndex={0}
      >
        <h4 id="scrollspyHeading1">Materia Prima</h4>
        <p>
          Ingrese aqui todo lo relacionado para preparar todos los platos,
          Ingrese por favor la unidad en la que ingresa el gasto
        </p>
        <ul>
          {/* //Iterate over the array of Prima and create a list with the items */}
          {Prima.map((item, index) => (
            <div key={index}>
              <li>{item}</li>
              <Inputs />
            </div>
          ))}
        </ul>

        <h4 id="scrollspyHeading2">Bebidas</h4>
        <p>
          En estos campos debe ingresar el gasto en todos los gastos de
          productos para realizar bebidas, o el gasto de bebidas en si
        </p>
        <ul>
          {Bebidas.map((item, index) => (
            <div key={index}>
              <li>{item}</li>
              <Inputs />
            </div>
          ))}
        </ul>

        <h4 id="scrollspyHeading3">Empaques</h4>
        <p>
          En estos campos se debe ingresar todos los gastos relacionados con los
          empaques u otros que se utilicen para la entrega del producto
        </p>
        <ul>
          {Empaques.map((item, index) => (
            <div key={index}>
              <li>{item}</li>
              <Inputs />
            </div>
          ))}
        </ul>

        <h4 id="scrollspyHeading4">Salsas</h4>
        <p>Todo el gasto en salsas</p>
        <ul>
          {Salsas.map((item, index) => (
            <div key={index}>
              <li>{item}</li>
              <Inputs />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

//Inputs for receive the information of the user for every item
export function Inputs() {
  const inputStyles = {
    width: "350px",
    margin: "10px",
    display: "inline-block",
  };
  return (
    <div>
      <input
        style={inputStyles}
        className="form-control"
        type="number"
        placeholder="Cantidad"
        aria-label="default input example"
      ></input>
      <select
        style={inputStyles}
        className="form-select"
        aria-label="Default select example"
      >
        <option selected>Unidad </option>
        <option value="1">Kg</option>
        <option value="2">Cajas</option>
        <option value="3">Bolsas</option>
        <option value="4">Litros</option>
        <option value="5">Gramos</option>
        <option value="6">Libras</option>
      </select>
    </div>
  );
}

export default Navbar;
