import { File } from "@/types/file"

type ConfirmationProps = {
    images?: Array<File>
    type: "success" | "error" | "warning"
    onClose: () => void
}

/**
 * We can use type to render various modals
 */
export const ConfirmationModal = ({ images, type, onClose }: ConfirmationProps) => {
    const handleOnClose = (e) => {
        e.preventDefault()
        onClose()
    }
    return (
        <>
            <div className="modal" role="dialog" style={{ display: "block" }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Images uploaded</h5>
                        </div>
                        <div className="modal-body">
                            <p>You uploaded {images?.[0].length} images.</p>
                            <ul>
                                {images?.[0].map((image, index) => {
                                    return <li key={index}>{image.name}</li>
                                })}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button onClick={(e) => handleOnClose(e)} type="button" className="btn btn-primary">Save changes</button>
                            <button onClick={(e) => handleOnClose(e)} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
