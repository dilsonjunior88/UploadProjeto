import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './Rotas';

function App() {

  return (

    <><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/deputados">Deputados</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/partidos">Partidos</Nav.Link>
        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    
    
    <Container>
        
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </Container></>
  );
}

export default App;
  