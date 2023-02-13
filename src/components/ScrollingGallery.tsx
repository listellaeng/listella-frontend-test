import { ImageType } from "@/types/Image"

type GalleryProps = {
    images: Array<ImageType>
}
const ScrollingGallery = ({ images }: GalleryProps) => {

    return (
        <div className="image-scroll-container">
            <div className="image-scroll-inner">
                {
                    images?.map((item, index) => {
                        return (
                            <div key={index} className="col-3">
                                <img src={item.links[0].href} style={{ height: 208, width: 240, objectFit: "cover", borderRadius: 10 }} alt={item.data[0].title}  />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ScrollingGallery
