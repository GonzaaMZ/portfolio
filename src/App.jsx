import { Fragment } from "react"
import Header from "./components/Header"
import Presentacion from "./components/Presentacion"
import About from "./components/About"
import Skills from "./components/Skills"
import Experiencia from "./components/Experiencia"
import Portfolio from "./components/Portfolio"
import Contacto from "./components/Contacto"


function App() {

  return (
    <Fragment>
      <Header />
      <Presentacion />
      <About />
      <Skills />
      <Experiencia />
      <Portfolio />
      <Contacto />
    </Fragment>
  )
}

export default App
