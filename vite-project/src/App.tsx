import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  };
  const matPrima = ["Queso", "Tocineta", "Papas", "Aceite", "Pollo", "Carne"];

  const matBebidas = [
    "Pitillos",
    "Vasos",
    "Tapas",
    "Bubols",
    "Sirope",
    "Sodas",
  ];

  const matEmpaques = [
    "Cajas",
    "Bolsas",
    "Parafinado",
    "Tenedores",
    "Servilletas",
  ];

  const matSalsas = [
    "Mayonesa",
    "Roja",
    "Mostaza",
    "Ajo",
    "BBQ",
    "BBQ Citrica",
    "BBQ Dulce",
    "BBQ Picante",
    "BBQ Tamarindo",
    "Chipotle",
    "Ahumada",
    "Rosada",
    "Siracha",
    "Dulce Maíz",
    "Miel Mostaza",
    "Mayonesa Siracha",
    "Mayonesa Cilantro",
    "Mayonesa Relish",
  ];

  return (
    <div>
      <Navbar
        Prima={matPrima}
        Bebidas={matBebidas}
        Empaques={matEmpaques}
        Salsas={matSalsas}
      />
      <button onClick={abrirCerrarModal} className="btn btn-primary">
        Enviar Informe
      </button>
      <Modal estado={modal} cambiarEstado={setModal} />
    </div>
  );
}

export default App;
