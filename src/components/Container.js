import React, { useState, useContext } from "react";
import "bulma/css/bulma.min.css";
import SearchArea from "./SearchArea";
import {DarkModeContext} from "../context/DarkModeContext"

function Container() {

  const [country, setCountry] = useState('us');
  const [language, setLanguage] = useState('en');
  const [lightMode, setLightMode] = useState('light');

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };

  let allCountries = ['AE', 'AR', 'AT', 'AU', 'AZ', 'BE', 'BG', 'BR', 'CA', 'CH', 'CL', 'CO', 'CY', 'CZ', 'DE', 'DK', 'EC', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HK', 'HU', 'IE', 'ID', 'IL', 'IN', 'IS', 'IT', 'JP', 'KR', 'LT', 'LV', 'MD', 'MK', 'MX', 'MY', 'NL', 'NO', 'NZ', 'PA',  'PE', 'PH', 'PL', 'PT', 'RO', 'RS', 'RU', 'SE', 'SG', 'TH', 'TN', 'TR', 'UA', 'US', 'VE', 'VN', 'ZA']

  const handleCountryChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    let lowerCountry = value.toLowerCase();
    console.log(lowerCountry);
    setCountry(lowerCountry);
  };

  const handleLanguageChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    let verbage = value.toLowerCase();
    if (verbage === "english") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
  };

  const handleLightModeChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    let mode = value.toLowerCase();
    console.log(mode);
    setLightMode(mode);
  };

  document.addEventListener("DOMContentLoaded", () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add("is-active");
    }

    function closeModal($el) {
      $el.classList.remove("is-active");
    }

    function closeAllModals() {
      (document.querySelectorAll(".modal") || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll(".js-modal-trigger") || []).forEach(
      ($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);
        console.log($target);

        $trigger.addEventListener("click", () => {
          openModal($target);
        });
      }
    );

    // Add a click event on various child elements to close the parent modal
    (
      document.querySelectorAll(
        ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
      ) || []
    ).forEach(($close) => {
      const $target = $close.closest(".modal");

      $close.addEventListener("click", () => {
        closeModal($target);
      });
    });

    // Add a keyboard event to close all modals
    document.addEventListener("keydown", (event) => {
      const e = event || window.event;

      if (e.keyCode === 27) {
        // Escape key
        closeAllModals();
      }
    });
  });

  return (
    <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
      <div>
        <nav>
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
          <button
            className="navbar-end navbar-item js-modal-trigger button is-primary"
            data-target="modal-js-example"
          >
            Settings
          </button>

          <div class="field">
            <input id="switchColorWarning" type="checkbox" name="switchColorWarning" class="switch is-warning" checked="checked" onClick={handleClick}/>
             <label for="switchColorWarning">Switch Light Mode</label>
          </div>



          <button >
            MODE
          </button>
        </nav>
      </div>
      <SearchArea country={country} language={language} darkMode={darkMode} />

      <div id="modal-js-example"  className="modal">
        <div  className="modal-background"></div>

        <div  className="modal-content">
          <div  className="box">
          <div className="field">
            <label className="label">Language:</label>
            <div className="control">
              <div className="select is-primary">
                <select onChange={handleLanguageChange}>
                  <option>English</option>
                  <option>Espanol</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Select Country:</label>
            <div className="control">
              <div className="select is-multiple is-primary">
                <select multiple size="5" onChange={handleCountryChange}>
                  <option hidden>Choose</option>
                  {/* <option>Action</option>
                  <option>Adventure</option>
                  <option>Animation</option>
                  <option>Comedy</option>
                  <option>Crime</option>
                  <option>Drama</option>
                  <option>Fantasy</option>
                  <option>History</option>
                  <option>Horror</option>
                  <option>Mystery</option>
                  <option>Romance</option>
                  <option>Science Fiction</option>
                  <option>Thriller</option>
                  <option>Western</option> */}
                  {allCountries.map(allCountry => <option key={allCountry}> {allCountry}</option> )}
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Light Mode:</label>
            <div className="control">
              <div className="select is-primary">
                <select onChange={handleLightModeChange}>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-danger">
                Close
              </button>
            </div>
          </div>
          </div>
        </div>

        <button  className="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  );
}

export default Container;
