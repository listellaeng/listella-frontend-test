import React, { useCallback, useState } from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { useUploadContextProvider } from '../../contexts';
import UploadIcon from '../../assets/upload-gray.svg';
import MoonImage from '../../assets/moon.jpg';

const ImageUpload = () => {
  const { setImages } = useUploadContextProvider();
  const [imagesToUpload, setImagesToUpload] = useState<
    Array<string | ArrayBuffer | null>
  >([]);

  const handleUpload = () => {
    // Should call upload api, instead save to store
    setImages(imagesToUpload);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setImagesToUpload((prev) => [...prev, binaryStr]);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 5,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/bmp': [],
    },
    onDrop,
  });

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        mt: 4,
        backgroundColor: 'grey',
        backgroundImage: `url(${MoonImage.src})`,
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          maxWidth: 790,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#ffffff',
          px: 4,
          py: 3,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: 2.5,
        }}
      >
        <Typography
          variant='h4'
          sx={{ fontSize: '40px', lineHeight: '54.48px', fontWeight: 700 }}
        >
          Upload Your Photos
        </Typography>
        <Divider sx={{ my: 1.5 }} />
        <Typography sx={{ fontSize: '20px', lineHeight: '27.24px' }}>
          Select up to 5 high quality images to upload into our database. If
          your image is selected, a member of our team will contact you for
          atribution.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '66%',
            border: '2px solid #4D54FF',
            borderRadius: 2.5,
            mt: 5,
            mx: 'auto',
          }}
        >
          <Box
            {...getRootProps()}
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px dashed #4D54FF',
              borderRadius: 2.5,
              py: 4,
              color: '#4D54FF',
            }}
          >
            <input {...getInputProps()} />
            <IconButton color='inherit' sx={{ p: 0 }}>
              <Box
                component='img'
                src={UploadIcon.src}
                alt='Upload'
                sx={{ width: 44, height: 46 }}
              ></Box>
            </IconButton>
            <Typography sx={{ ml: 3, fontSize: '24px', lineHeight: '36.69px' }}>
              Drag & Drop Your Images
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageUpload;
