import { useState } from "react"
import { color } from "@/types/colors"
import Image from "next/image"
import PurpleLine from "./PurpleLine"
import { ConfirmationModal } from "./ConfirmationModal"
import { File } from "@/types/file"

type ImageUploaderProps = {
    parentCallback: () => void
}
export default function ImageUploader({ parentCallback }: ImageUploaderProps) {
    const [uploadImages, setUploadedImages] = useState<File[]>([])
    const [isDisabled, setIsDisabled] = useState(false)

    const handleFileSelect = (e) => {
        // quick fail if they try to upload more then 5 files
        const imageCount = e.target.files.length
        if (imageCount >= 5) setIsDisabled(true)
        else {
            uploadImages.push(e.target.files)
            setUploadedImages(uploadImages)
            
        }
    }
    
    // When user drops in files
    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()

        // get files from event on the dataTransfer object as an array
        let files = [...e.dataTransfer.files]

        // ensure a file or files are dropped
        if (files && files.length > 0) {
            uploadImages.push(files)
            setUploadedImages(uploadImages)
            parentCallback(uploadImages)
        }
    }

    return (
        <>
        <div onDrop={(e) => handleDrop(e)} style={{ justifyContent: "center" }}>
            <div style={{
                borderRadius: 20,
                height: "auto",
                position: "absolute",
                zIndex: 100,
                top: 0,
                justifyContent: "center",
                backgroundColor: color.White,
                padding: 24,
                marginTop: `${(860 * .7 / 2)}px`,
                cursor: "pointer",
                width: "50%",
                justifyItems: "center"
            }}>
                <div>
                    <p style={{
                        fontFamily: "Noto Sans",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "40px",
                        lineHeight: "54px",
                    }}>Upload Your Photos</p>
                </div>
                <PurpleLine />
                <div style={{ marginTop: 12 }}>
                    <p>Select up to 5 high quality images to upload into our database. If your image is selected, a member of our team will contact you for attribution.</p>
                </div>
                
                <div style={{ display: "flex", flex: 1, borderStyle: "solid", borderColor: isDisabled ? color.Cool_gray : color.RISD_Blue, borderRadius: 30, justifyContent: "center" }}>
                    <div style={{ display: "flex", flex: 1, borderStyle: "dashed", borderColor: isDisabled ? color.Cool_gray : color.RISD_Blue, borderRadius: 30, margin: 5 }}>
                        <div style={{ position: "relative", display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <div style={{ backgroundColor: color.White, alignItems: "center", position: "absolute", display: "flex", borderRadius: 30, cursor: "pointer" }}>
                                <div className="col-4">
                                    <Image
                                        src={`/assets/${isDisabled ? 'upload-gray' : 'upload'}.svg`}
                                        width={40}
                                        height={40}
                                        alt="upload file"
                                        style={{ flex: 1}}
                                    />
                                </div>
                                <div className="col-8"><p>Drag & Drop Your Images</p></div>
                            </div>
                            <input style={{ borderRadius: 30, padding: "48px", width: "100%", display: "flex", color: "transparent", border: "none", flex: 1 }} className="form-control" onChange={(e) => handleFileSelect(e)} type="file" multiple />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}