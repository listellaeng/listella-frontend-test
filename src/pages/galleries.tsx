import { useEffect, useState } from "react"
import Image from "next/image"
import { color } from "@/types/colors"
import { ConfirmationModal, ImageUploader, PurpleLine, ScrollingGallery } from "@/components"
import { ImageType } from "@/types/Image"
import Link from "next/link"

function Galleries() {
    const [images, setImages] = useState<ImageType[]>([])
    const [imageGallery, setImageGallery] = useState("Space Database")
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [uploadedImages, setUploadedImages] = useState([])
    
    /**
     * To improve this: in subheader component we can save the chosen album
     * and use the name here from storage
     */
    const [albumName, setAlbumName] = useState("201907_Apollo_50th_in_DC")
    if (imageGallery) {
        // only call this when rendering the page
        useEffect(() => {
            if (images?.length <= 0 || !images) {
                fetch(`https://images-api.nasa.gov/album/${albumName}`)
                    .then((response) => response.json())
                    .then((data) => {
                        const batchOfEight = data.collection.items.slice(0, 8)
                        setImages(batchOfEight)
                    })
            }
        }, [])
    } else {
        return (
            <div style={{ height: "100vh", textAlign: "center"}}>
                <p>There was a problem loading the data, please try again later.</p>
            </div>
        )
    }
    const parentCallback = (data: Array<File>) => {
        setIsModalVisible(true)
        setUploadedImages(data)
    }

    return (
        <>
            <div className="container-fluid px-0">
                <div style={{ paddingRight: 62, paddingLeft: 65, height: "730px" }}>
                    <div className="row">
                        <div className="col-4">
                            <div style={{ display: "inline-flex", alignItems: "center" }}>
                                <p style={{ color: color.Dim_gray }}>Galleries</p> <div className="custom-dot" style={{ backgroundColor: color.Dim_gray }}></div> <p>{imageGallery} </p>
                            </div>
                            <div style={{ width: "516px", height: "671px", overflow: "hidden", borderRadius: "30px" }}>
                                <img style={{ width: "100%", objectFit: "cover" }} src="/assets/astronaut.jpg" width="auto" height="100%" alt={"astronaut on moon"} />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="right-container">
                                <div className="row">
                                    <div className="col-1">
                                        <Image src="/assets/planet.svg" width={108} height={108} alt={"planet"} />
                                    </div>
                                    <div className="col-8" style={{ marginLeft: 48, marginBottom: 16 }}>
                                        <h4 className="h4">NASA’s Space Database</h4>
                                        <p className="p2" style={{ color: color.RISD_Blue }}>Our Public Gallery for Outer Space</p>
                                    </div>
                                    <PurpleLine />
                                    <div className="row">
                                        <p className="p2" style={{ marginTop: "24px"}}>
                                            We want to see space through your eyes! Take photos and upload them to our public library. Our goal is to provide the largest database of quality images. Space is amazing! Let’s capture it together!
                                        </p>
                                    </div>
                                    <h4 className="h4">Featured Images</h4>
                                    <p className="p2" style={{ color: color.RISD_Blue }}>Scroll to see more</p>
                                    <div>
                                        <ScrollingGallery images={images} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                                        <div style={{ display: "inline-flex", alignItems: "center" }}>
                                            <Link className="nav-link link-dark" href="#">
                                                <h5 className="h5 gallery-underline">View Gallery</h5>
                                            </Link>
                                            <img src="/assets/right.svg" width="auto" height={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {isModalVisible && <ConfirmationModal images={uploadedImages} type="success" onClose={() => setIsModalVisible(false)} />}
            <div className="row">
                <div className="col-12">
                    <div className="galleries-bottom-container">
                        <Image
                            src={"/assets/moon.jpg"}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            alt="moon"
                        />
                        <div className="col-4 offset-3">
                            <ImageUploader parentCallback={parentCallback} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Galleries
