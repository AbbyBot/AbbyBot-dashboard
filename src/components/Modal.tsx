import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faQuestionCircle, faWarning } from "@fortawesome/free-solid-svg-icons"

function Modal({ id, visible, children }: any) {
    useEffect(() => {
        if (visible) {
            document.getElementById(id)?.classList.add('modal-visible')
        } else {
            document.getElementById(id)?.classList.remove('modal-visible')
        }
    }, [visible])
    if (visible) {
        return (
            <div id={id} className="modal-backdrop">
                <div className="modal rounded">
                    {children}
                </div>
            </div>
        )
    } else return null;

}

function ModalHeader({ title = "", icon,onClose }: any) {
    return (
        <header className="modal-header no-select">
            <div className="d-flex gap-2 flex-center-items">
                {icon && icon}
                <h5 className="m-0 p-0">{title}</h5>
            </div>
            <button className="modal-dismiss-btn" onClick={onClose}>
                <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
            </button>
        </header>
    )
}

function ModalBody({ children }: any) {
    return (
        <div className="modal-body no-select">
            {children}
        </div>
    )
}

function ModalFooter({ children }: any) {
    return (
        <div className="modal-footer">
            {children}
        </div>
    )
}

function ModalButton({ onClick, children, color }: any) {
    return (
        <button className={"rounded p-2 fs-1 " + `btn-${color}`} onClick={onClick}>
            {children}
        </button>
    )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.Button = ModalButton

export { Modal }