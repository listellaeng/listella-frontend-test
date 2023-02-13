import { getFormattedDate } from "@/getDateFormatted"
import { ImageType } from "@/types/Image"
import { useEffect, useState } from "react"

type GalleryProps = {
    images: Array<ImageType>
}
const ScrollingGallery = ({ images }: GalleryProps) => {
    const newArray = Array.from({ length: images.length }, _ => false)
    const [ hoverList, setHoverList ] = useState(newArray)

    const toggleButton = (i: number) => {
        setHoverList(prev => prev.map((bool, idx) => i == idx ? !bool : bool))
    }
    /**
     * Check to make sure we have list else if it changes re-run this
     */
    useEffect(() => {
        if (hoverList.length == 0 && images.length != 0) setHoverList(Array.from({ length: images.length }, _ => false))
    },[images])

    return (
        <div className="image-scroll-container">
            <div className="image-scroll-inner">
                {
                    images?.map((item, index) => {
                        const itemDetails = item.links[0]
                        const metaData = item.data[0]
                        return (
                            
                                <div key={index} className="col-3 hover-shadow scrolling-image-container" onMouseEnter={() => toggleButton(index)} onMouseLeave={() => toggleButton(index)}>
                                    <img src={itemDetails.href} style={{ height: 208, width: 240, objectFit: "cover", borderRadius: 10 }} alt={item.data[0].title}  />
                                    {
                                        /**
                                         * Only show hover event for those the item that is set to true
                                         */
                                        hoverList[index] && <div className="hover-container">
                                            <p className="hover-font">Title: {metaData.title}</p>
                                            <p className="hover-font">Created: {getFormattedDate(metaData.date_created)}</p>
                                            <p className="hover-font">Photographer: {metaData.photographer}</p>
                                        </div>
                                    }
                                </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ScrollingGallery
