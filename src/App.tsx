import { useState } from "react";
import "./App.css";

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

      <div className="container__card">
        <h4 className="card__title">{portafolios[0].title}</h4>
        <div className="card__section">
          <div className="section__desktop">
            <h5 className="desktop__title">Desktop</h5>
            <iframe
              src={portafolios[0].url}
              title={portafolios[0].title}
              className="desktop__iframe"
              allowFullScreen
            ></iframe>
          </div>
          <div className="section__mobile">
            <h5 className="mobile__title">Mobile</h5>
            <iframe
              src={portafolios[0].url}
              title={portafolios[0].title}
              className="mobile__iframe"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
