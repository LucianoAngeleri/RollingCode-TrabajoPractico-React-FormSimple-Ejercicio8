import { Form, Button, Row, Col } from "react-bootstrap";
import TituloFormulario from "./TituloFormulario";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class Datos {
  constructor(nombre, apellido, dni, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.email = email;
  }
}

const Formulario = () => {
  const datosLocalStorage = JSON.parse(localStorage.getItem("listaDatos")) || [];
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [datos, setDatos] = useState(datosLocalStorage);
  const alerta = withReactContent(Swal);

  useEffect(() => {
    localStorage.setItem("listaDatos", JSON.stringify(datos));
  }, [datos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || apellido === "" || dni === "" || email === "") {
      alerta.fire(
        "Debe completar todos los campos.",
        "Completa todos los campos antes den enviar el formulario.",
        "error"
      );
    } else {
      const nuevosDatos = new Datos(nombre, apellido, dni, email);
      setDatos([...datos, nuevosDatos]);

      alerta.fire("Datos enviados.", "Los datos han sido enviados con éxito!", "success");
      setNombre("");
      setApellido("");
      setDni("");
      setEmail("");
    }
  };
  return (
    <Form className="p-5 shadow-lg rounded-5 text-bg-secondary" onSubmit={handleSubmit}>
      <TituloFormulario></TituloFormulario>
      <Row>
        <Col sm={12} md={6}>
          <Form.Group className="mb-4" controlId="fromNombre">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              type="text"
              placeholder="Ingrese su nombre"
              maxLength="60"
              minLength="3"></Form.Control>
          </Form.Group>
        </Col>
        <Col sm={12} md={6}>
          <Form.Group className="mb-4" controlId="fromApellido">
            <Form.Label>Apellido *</Form.Label>
            <Form.Control
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
              type="text"
              placeholder="Ingrese su Apellido"
              maxLength="60"
              minLength="3"></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-4" controlId="fromDNI">
        <Form.Label>DNI *</Form.Label>
        <Form.Control
          onChange={(e) => setDni(e.target.value)}
          value={dni}
          type="text"
          placeholder="Ingrese su DNI"
          maxLength="8"
          pattern="[0-9]{7,8}"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4" controlId="fromEmail">
        <Form.Label>Correo electrónico *</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Ingrese su correo electrónico"></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" className="px-3 rounded-pill shadow-sm">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
