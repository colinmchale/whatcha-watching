import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import SearchArea from "./components/SerachArea";

function App() {

  const [country, setCountry] = useState('us');
  const [language, setLanguage] = useState('en');
  const [lightMode, setLightMode] = useState('light');

  

  return (
    <div>
      <div>
        <nav className="navbar is-transparent">
          {/* <div className="navbar-end navbar-item has-dropdown is-hoverable">
          <span className="navbar-link">
            Language
          </span>
          <div className="navbar-dropdown is-right is-boxed">
            <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
              English
            </a>
            <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
              Espanol
            </a>
          </div>
        </div> */}
          <button className="navbar-end navbar-item js-modal-trigger button is-primary" data-target="modal-js-example">
            Settings
          </button>
        </nav>
      </div>
      <SearchArea country={country} language={language} />
    </div>
  );
}

export default App;
