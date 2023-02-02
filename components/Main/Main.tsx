import { Col, Container, Row } from "react-bootstrap";

import { Photo } from "@/types";
import styles from "./Main.module.css";

import GalleryItem from "./GalleryItem/GalleryItem";
import InfoCard from "./InfoCard/InfoCard";
import UploadSection from "./UploadSection/UploadSection";

interface Props {
  photos?: Photo[];
}

const Main = ({ photos }: Props) => {
  return (
    <main className={styles.main}>
      <Container>
        <Row>
          <Col
            lg={4}
            className="mb-md-5 mb-lg-0 d-flex flex-column align-items-center"
          >
            <GalleryItem />
          </Col>

          <Col lg={8}>
            <InfoCard photos={photos} />
          </Col>
        </Row>
      </Container>

      <UploadSection />
    </main>
  );
};

export default Main;
