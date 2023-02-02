import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import styles from "./Header.module.css";

import EarthIcon from "../../assets/earth.svg";
import SearchIcon from "../../assets/search.svg";
import ShareIcon from "../../assets/share.svg";
import MenuIcon from "../../assets/menu.svg";

const Header = () => {
  return (
    <div className="header">
      <div
        className={`${styles.logoContainer} d-flex flex-column align-items-center justify-content-center`}
      >
        <Navbar.Brand
          className="d-flex align-items-center justify-content-center"
          href="/"
        >
          <Image src={EarthIcon} alt="Earth Icon" width={68} height={68} />
          <h1 className={styles.logoText}>NASA</h1>
        </Navbar.Brand>
      </div>
      <Container className="d-flex flex-column align-items-center">
        <Navbar
          collapseOnSelect
          bg="light"
          expand="md"
          className={styles.navbar}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={`${styles.navItems} flex-md-row justify-content-center w-100 navbar`}
            >
              <Nav.Link href="/missions">Missions</Nav.Link>
              <Nav.Link href="/galleries">Galleries</Nav.Link>
              <Nav.Link href="/audiences">NASA Audiences</Nav.Link>
              <Nav.Link href="/downloads">Downloads</Nav.Link>
              <Nav.Link href="/tv">NASA TV</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div
          className={`${styles.headerOptions} d-flex flex-row justify-content-end align-self-end`}
        >
          <Image src={SearchIcon} alt="Search Icon" width={24} height={24} />
          <Image src={ShareIcon} alt="Share Icon" width={26} height={26} />
          <Image src={MenuIcon} alt="Menu Icon" width={34} height={26} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
