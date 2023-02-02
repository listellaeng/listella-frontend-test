import Image from "next/image";

import { Photo } from "@/types";
import { imageLoader } from "../../../utils";
import styles from "./InfoCard.module.css";

import EarthIcon from "../../../assets/planet.svg";
import AngleRight from "../../../assets/right.svg";

interface Props {
  photos?: Photo[];
}

const InfoCard = ({ photos }: Props) => {
  return (
    <div className={`${styles.card} app-card`}>
      <div className="d-flex flex-column overflow-hidden">
        <div className="d-flex mb-3">
          <Image src={EarthIcon} alt="Earth Icon" />

          <div className="d-flex flex-column justify-content-center ms-3">
            <h1 className="heading">NASA&apos;s Space Database</h1>
            <h3 className="sub-heading">Our Public Gallery for Outer Space</h3>
          </div>
        </div>

        <div className="divider"></div>

        <p className="paragraph mt-3">
          We want to see space through your eyes! Take photos and upload them to
          our public library. Our goal is to provide the largest database of
          quality images. Space is amazing! Let’s capture it together!
        </p>

        <h1 className="heading mt-5">Featured Images</h1>

        <h3 className="sub-heading">Scroll to see more</h3>

        <div className={`${styles.assetsImages} d-flex`}>
          {photos?.map((item, index) => {
            return (
              <Image
                loader={imageLoader}
                unoptimized={true}
                key={`${item.id + index}`}
                className="img-fluid"
                src={item.img_src}
                alt=""
                width={240}
                height={208}
              />
            );
          })}
        </div>

        <div className="d-flex align-items-center justify-content-center align-self-end mt-5 me-5">
          <a href="#" className={`${styles.viewGalleryText} me-2`}>
            View Gallery
          </a>
          <Image src={AngleRight} alt="Angle Right" width={8} height={15} />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
