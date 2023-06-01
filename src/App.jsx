import { Container } from 'react-bootstrap'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Formulario from './components/Formulario'

function App() {
  return (
    <>
    <Container className="py-3">
      <h1 className="display-1">Ejercicio 8</h1>
      <h2 className="display-2">Fromulario Simple</h2>
      <hr />
    </Container>
    <Container className="py-3">
      <Formulario></Formulario>
    </Container>
    <Container fluid className="text-center text-bg-dark py-4 mt-5">
      <footer>
        <p>&copy; Todos los derechos reservados.</p>
      </footer>
    </Container>
    </>
  )
}

export default App
