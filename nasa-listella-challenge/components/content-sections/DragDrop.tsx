import { Typography } from "@mui/material";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { styled } from "@mui/material/styles";
import Image from "next/image";

import Uploads from "./UploadModal";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [imagesForUpload, setImagesForUpload] = useState<File[]>([]);
  const handleChange = (fileInput: File[]) => {
    validateImagesForUpload(fileInput);
  };
  const validateImagesForUpload = (files: File[]) => {
    const errors = [];
    const validImageFiles = [];
    console.log("files", files);
    if (files.length > 5) {
      errors.push("Only 5 files are permitted for upload. ");
    }
    let file: File;
    for (let i = 0; i < files.length; i++) {
      file = files[i];
      const fileName = file.name;
      const fileTypeDotIndexPosition = fileName.lastIndexOf(".") + 1;
      const slicedFileTypeFromFilePath = fileName.slice(
        fileTypeDotIndexPosition
      );
      const hasImageFile = /(image\/(png|jpg|jpeg))/gi;
      console.log("file", file);
      if (
        !hasImageFile.test(file.type) &&
        !hasImageFile.test(slicedFileTypeFromFilePath)
      ) {
        errors.push(`${fileName} is not an image`);
      } else {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles?.length > 0) {
      setImagesForUpload(validImageFiles);
    }
  };

    // const uploadToServer = async (event: React.SyntheticEvent<EventTarget>) => {
    //   const body = new FormData();
    //   body.append("file", imagesForUpload);
    //   const response = await fetch("/apis/upload", {
    //     method: "POST",
    //     body,
    //   });
    // };

  const onClose = () => {
    setImagesForUpload([]);
  };

  return (
    <>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        multiple={true}
        children={<DropButtonHolder />}
      />
      <Uploads imagesForUpload={imagesForUpload} onClose={onClose} />
    </>
  );
}
const DropButtonHolder = () => {
  return (
    <div className="dropzone-holder">
    <Typography  variant="subtitle1" component="p" className="dropzone-text">Drag & Drop Your Images</Typography>
  </div>
  );
};


export default DragDrop;
