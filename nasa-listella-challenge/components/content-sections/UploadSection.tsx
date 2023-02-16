import React, { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { ChangeEvent } from "react";
import DragDrop from "./DragDrop";

const UploadSection = () => {
  const [imagesForUpload, setImagesForUpload] = useState<File[]>([]);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const validateImagesForUpload = (files: FileList) => {
    const errors = [];
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
      if (
        !hasImageFile.test(file.type) &&
        !hasImageFile.test(slicedFileTypeFromFilePath)
      ) {
        errors.push(`${fileName} is not an image`);
      } else {
        console.log("add file");
        setImagesForUpload((existing) =>
          existing.concat(Array.from(imagesForUpload))
        );
        console.log("");
      }
    }
  };
  // const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log("event.target.files", event.target.files);
  //   validateImagesForUpload(event.target.files);
  //   if (event.target.files && event.target.files[0]) {
  //     const i = event.target.files[0];
  //     setCreateObjectURL(URL.createObjectURL(i));
  //   }
  // };

  //   const uploadToServer = async (event: React.SyntheticEvent<EventTarget>) => {
  //     const body = new FormData();
  //     body.append("file", imagesForUpload);
  //     const response = await fetch("/apis/upload", {
  //       method: "POST",
  //       body,
  //     });
  //   };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(/img/moon.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <Card
        sx={{
          width: 790,
          display: "flex",
          flexDirection: "column",
          p: 2,
          
        }}
      >
        <Typography  variant="h3" component="h4">
          Upload Your Photos
        </Typography>
        <Divider
              sx={{
                backgroundColor: "rgba(151, 71, 255, 0.3)",
                height: 4,
                borderRadius: 4,
                
              }}
              
            />
        <Typography p={2}>
          Select up to 5 high quality images to upload into our database. If
          your image is selected, a member of our team will contact you for
          attribution.
        </Typography>
        <Box sx={{ alignItems: "center" }}>
          <DragDrop />

        </Box>
      </Card>
    </Box>
  );
};



export default UploadSection;
