import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Navigation.module.scss';

interface NavigationProps {
  brand: { logo: JSX.Element; name: string; path: string };
  sections: Array<{ name: string; path: string }>;
}

const Navigation: React.FC<NavigationProps> = ({ brand, sections }) => {
  return (
    <>
      <Navbar
        className="sticky-top"
        expand="md"
        bg="dark"
        variant="dark"
        fixed="top">
        <Container>
          <Navbar.Brand href={brand.path} className={styles.font}>
            <>{brand.logo}</> {brand.name}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {sections.map((section, index) => (
                <Nav.Link
                  key={index}
                  href={section.path}
                  className={styles.font}>
                  {section.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
