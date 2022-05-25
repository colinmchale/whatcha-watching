import React from "react";
import Container from "./components/Container.js";
import { DarkModeProvider } from "./context/DarkModeContext";


function App() {
    return(
        <div>
            <DarkModeProvider>
                <Container />
            </DarkModeProvider>
        </div>
    )
};

export default App;