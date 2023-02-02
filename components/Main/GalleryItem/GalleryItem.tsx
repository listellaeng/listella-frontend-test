import styles from "./GalleryItem.module.css";

const GalleryItem = () => {
  return (
    <>
      <h3 className={`${styles.galleryText} w-100 text-center text-lg-start`}>
        Galleries <span>· Space Database</span>
      </h3>
      <img
        className="img-fluid"
        src="https://imagizer.imageshack.com/img922/2500/se984w.png"
        alt=""
      />
    </>
  );
};

export default GalleryItem;
