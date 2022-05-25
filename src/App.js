import React from "react";
import Container from "./components/Container.js";
import { DarkModeProvider } from "./context/DarkModeContext";
import "./App.css";


function App() {
    return(
        <>
            <DarkModeProvider>
                <Container />
            </DarkModeProvider>
        </>
    )
};

export default App;