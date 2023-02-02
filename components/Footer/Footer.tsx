import { Container } from "react-bootstrap";
import Image from "next/image";

import styles from "./Footer.module.css";

import EarthIcon from "../../assets/earth-white.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className="d-flex justify-content-between align-items-center h-100">
        <ul className={styles.footerItems}>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
        <div className={`${styles.logoContainer} d-flex align-items-center`}>
          <Image src={EarthIcon} alt="Earth Icon" width={33} height={33} />
          <h3 className={`${styles.logoText} ms-3`}>NASA</h3>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
