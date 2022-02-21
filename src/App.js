import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import RenderResult from "./components/RenderResult";
import SearchArea from "./components/SerachArea";

function App() {

  const [country, setCountry] = useState('us');
  const [language, setLanguage] = useState('en');
  const [lightMode, setLightMode] = useState('light');

  return (
    <div>
      <div>
      <nav className="navbar is-transparent">
        <div className="navbar-end navbar-item has-dropdown is-hoverable">
          <span className="navbar-link">
            Settings
          </span>
          <div className="navbar-dropdown is-right is-boxed">
            <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
              Language
            </a>
            <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
              Country
            </a>
            <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Dark Mode
            </a>
          </div>
        </div>
      </nav>
      </div>
      <SearchArea
      country={country}
      language={language}
      />
    </div>
  );
}

export default App;
