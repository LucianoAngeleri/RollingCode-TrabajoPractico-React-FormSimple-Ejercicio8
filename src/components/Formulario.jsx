import { Form, Button, Row, Col } from "react-bootstrap";
import TituloFormulario from './TituloFormulario'
import { useState } from "react";

const Formulario = () => {

    const [nombre,setNombre ] = useState("")
    const [apellido,setApellido ] = useState("")
    const [dni,setDni ] = useState("")
    const [email,setEmail ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        setNombre(nombre)
        setApellido(apellido)
        setDni(dni)
        setEmail(email)
        
        setNombre("")
        setApellido("")
        setDni("")
        setEmail("")
      };
    return (
        <Form className="p-5 shadow-lg rounded-5 text-bg-secondary" onSubmit={handleSubmit}>
            <TituloFormulario></TituloFormulario>
            <Row>
                <Col sm={12} md={6}>
                    <Form.Group className="mb-4" controlId="fromNombre">
                        <Form.Label>Nombre *</Form.Label>
                        <Form.Control onChange={(e) => setNombre(e.target.value)}
                  value={nombre} type="text" required placeholder="Ingrese su nombre" maxLength="60" minLength="3"></Form.Control>
                    </Form.Group> 
                </Col>
                <Col sm={12} md={6}>
                    <Form.Group className="mb-4" controlId="fromApellido">
                        <Form.Label>Apellido *</Form.Label>
                        <Form.Control onChange={(e) => setApellido(e.target.value)}
                  value={apellido} type="text" required placeholder="Ingrese su Apellido" maxLength="60" minLength="3"></Form.Control>
                    </Form.Group> 
                </Col>
            </Row>
            <Form.Group className="mb-4" controlId="fromDNI">
                <Form.Label>DNI *</Form.Label>
                <Form.Control onChange={(e) => setDni(e.target.value)}
                  value={dni} type="number" required placeholder="Ingrese su DNI" min="8"></Form.Control>
            </Form.Group> 
            <Form.Group className="mb-4" controlId="fromEmail">
                <Form.Label>Correo electrónico *</Form.Label>
                <Form.Control onChange={(e) => setEmail(e.target.value)}
                  value={email} type="email" required placeholder="Ingrese su correo electrónico"></Form.Control>
            </Form.Group> 
            <Button variant="primary" type="submit" className="px-3 rounded-pill shadow-sm">Enviar</Button>
        </Form>
    );
};

export default Formulario;