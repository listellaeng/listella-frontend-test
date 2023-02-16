import Image from "next/image";
import Box from "@mui/material/Box";

interface photos {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

interface ImageSliderProps {
  // photos: {};
  data?: any;
}

const Content = {
  height: "240px",
  display: "inline-flex",
  width: "auto",
  overflowX: "scroll",
  img: {
    borderRadius: "10px",
  },
};

const ImageSlider = ({ data }: ImageSliderProps) => {
  return (
    <Box sx={Content}>
      {data?.map((pic: any, i: number) => (
        <Box m={1} key={`image_${i}`}>
          <Image
            src={pic.img_src}
            height={208}
            width={240}
            alt={pic.camera.full_name}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ImageSlider;
