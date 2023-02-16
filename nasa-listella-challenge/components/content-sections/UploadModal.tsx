import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export interface UploadModalProps {
  onClose: (value: string) => void;
  imagesForUpload: File[];
}

const modalStyle = {
  boxShadow: 24,
  p: 4,
};

export default function Uploads(props: UploadModalProps) {
  const { onClose, imagesForUpload } = props;
  const [open, setOpen] = React.useState(false);
  const handleClose = (value: string) => {
    setOpen(false);
  };

  const submitUpload = (value: string) => {
    onClose(value);
  };
  const humanFileSize = (size: number) => {
    const i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    return (
      Number((size / Math.pow(1024, i)).toFixed(2)) +
      " " +
      ["B", "kB", "MB", "GB", "TB"][i]
    );
  };
  const humanDate = (date: number) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={imagesForUpload.length > 0}
      sx={modalStyle}
    >
      <DialogTitle>Images for upload</DialogTitle>
      <Box sx={modalStyle}>
        <Grid container spacing={4}>
          {imagesForUpload.map((image, i) => (
            <React.Fragment key={`imageUpload_${i}`}>
              <Grid item xs={3}>
                {image.name}
              </Grid>
              <Grid item xs={3}>
                {humanFileSize(image.size)}
              </Grid>
              <Grid item xs={3}>
                {image.type}
              </Grid>
              <Grid item xs={3}>
                {humanDate(image.lastModified)}
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        <Box textAlign="right">
          <Button
            id="modal-modal-description"
            sx={{ mt: 2 }}
            onClick={() => submitUpload("upload")}
          >
            Upload Images
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
