import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <Navbar
        className="sticky-top"
        expand="md"
        bg="dark"
        variant="dark"
        fixed="top">
        <Container>
          <Navbar.Brand href="/" className={styles.font}>
            My College
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/" className={styles.font}>
                Login
              </Nav.Link>
              <Nav.Link href="/signup" className={styles.font}>
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
