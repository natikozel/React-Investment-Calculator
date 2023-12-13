import './App.css';
import {Header} from "./components/Header";
import React from "react";
import {AppContainer} from "./components/AppContainer";

function App(): React.JSX.Element {
    return (
        <>
            <Header/>
            <AppContainer/>
        </>
    );
}

export default App;
