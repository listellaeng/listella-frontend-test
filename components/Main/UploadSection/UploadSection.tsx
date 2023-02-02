import { useCallback, useState } from "react";
import Image from "next/image";
import { Alert, Container } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

import useImagesStore from "../store/Store";
import styles from "./UploadSection.module.css";

import MoonImage from "../../../assets/moon.jpg";
import UploadIcon from "../../../assets/upload.svg";

const UploadSection = () => {
  const [isAlertVisible, setAlertVisiblility] = useState<boolean>(false);

  const images = useImagesStore((state) => state.images);
  const setImages = useImagesStore((state) => state.setImages);

  const showAlert = () => {
    setAlertVisiblility(true);

    window.setTimeout(() => {
      setAlertVisiblility(false);
    }, 3000);
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => alert("Error reading file");
        reader.onerror = () => alert("Error reading file");
        reader.onload = () => {
          const binaryStr = reader.result;
          if (images === "") {
            setImages([binaryStr]);
          } else if (Array.isArray(images)) {
            let updatedImages = images;
            images.push(binaryStr);
            setImages(updatedImages);
          }
          showAlert();
        };
        reader.readAsArrayBuffer(file);
      });
    },
    [images, setImages]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 5,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    onDrop,
  });

  return (
    <div
      className={styles.uploadFileContainer}
      style={{ backgroundImage: `url(${MoonImage.src}) !important` }}
    >
      <Container className="d-flex justify-content-center align-items-center h-100">
        <div className={`${styles.uploadFilesCard} app-card`}>
          <h1 className="heading">Upload Your Photos</h1>

          <div className="divider"></div>

          <p className={`${styles.uploadText}`}>
            Select up to 5 high quality images to upload into our database. If
            your image is selected, a member of our team will contact you for
            atribution.
          </p>

          <div className={styles.uploadContainer}>
            <div
              {...getRootProps()}
              className={`${styles.upload} d-flex justify-content-center align-items-center`}
            >
              <input {...getInputProps()} />
              <Image
                src={UploadIcon}
                alt="Earth Icon"
                width={46}
                height={43}
                className="me-4"
              />
              Drag & Drop Your Images
            </div>
          </div>
        </div>
        {isAlertVisible && (
          <Alert variant="success" className="position-absolute">
            Image added successfully!
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default UploadSection;
