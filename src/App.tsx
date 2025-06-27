import { useState } from "react";
import "./App.css";
import QRcomponent from "qr/QRcomponent";

function App() {
  const [portafolios, setPortafolios] = useState([
    {
      title: "Qr code component",
      url: "https://qr-code-component-git-main-roxanacamaras-projects.vercel.app/",
    },
    {
      title: "Qr code component",
      url: "https://qr-code-component-git-main-roxanacamaras-projects.vercel.app/",
    },
  ]);
  return (
    <div className="container">
      <h2 className="container__title">Frontend Mentor</h2>

      <h3 className="container__subtitle">
        Getting started on Frontend Mentor
      </h3>

      <QRcomponent />
    </div>
  );
}

export default App;
