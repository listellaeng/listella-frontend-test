import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

import Header from "../components/Header";

import type { NasaData } from "../types";

const IndexPage = ({ data }: NasaData) => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container sx={{ maxWidth:1600  }} maxWidth={false}>
        <Header />
        {/* <AstronautSection data={data} /> */}
      </Container>
      {/* <UploadSection />  */}
    </Box>
  );
};
export default IndexPage;