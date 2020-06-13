import React from "react";
import "./styles.css";
import { ThemeProvider } from "context/ThemeContext";
import Aside from "./components/Aside";
import Main from "./components/Main";

/**
 * ThemeProvider
 *   Aside
 *     ConfigurationPanel
 *      ThemeToggle -> Boton
 *   Main
 *    Card/Article -> Se cambien los estilos
 *
 * */

export default function App() {
  return (
    <ThemeProvider className="App">
      <Aside />
      <Main />
    </ThemeProvider>
  );
}
