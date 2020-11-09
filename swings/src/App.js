import React from 'react';
import { Route } from 'react-router-dom';
import style from './css/footer.module.css'
import { Login } from './screens/auth/Login';
import { Register } from './screens/auth/Register';
import { Home } from './screens/home/Home';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPhone, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">ItlOvER</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            <Nav.Link href="/login">
              <FontAwesomeIcon icon={faUserCircle} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" component={Home} />
      </div>
      <div className={style.body}>
        <Container className={style.container}>
          <div className={style.section}>
            <div className={style.image}>
              <FontAwesomeIcon className={style.i} icon={faMapMarkedAlt} />
            </div>
            <div className={style.text}>Location</div>
          </div>
          <div className={style.section}>
            <div className={style.image}>
              <FontAwesomeIcon className={style.i} icon={faPhone} />
            </div>
            <div className={style.text}>+84 039 404656</div>
          </div>
          <div className={style.section}>
            <div className={style.image}>
              <FontAwesomeIcon className={style.i} icon={faFacebookSquare} />
              <FontAwesomeIcon className={style.i} icon={faTwitterSquare} />
              <FontAwesomeIcon className={style.i} icon={faInstagramSquare} />
            </div>
            <div className={style.text}>Follow us</div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
