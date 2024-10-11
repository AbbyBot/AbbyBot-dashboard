import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Modal = ({ children }) => {
    return <div className='modal-backdrop'>{children}</div>
}

const ModalBody = ({ children }) => {
    return <div className='modal-body rounded'>{children}</div>
}

const ModalFooter = ({ children }) => {
    return <div className='modal-footer'>{children}</div>
}

const ModalHeader = ({ children }) => {
    return <div className='modal-header'>
        {children}
        <button className='modal-close-button'><FontAwesomeIcon icon={faClose} /></button>
    </div>
}
const ModalContent = ({ children }) => {
    return <div className='modal-content'>{children}</div>
}

const ModalButton = ({ children }) => {
    return <button className='btn-primary'>{children}</button>
}

Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.Header = ModalHeader
Modal.Button = ModalButton
Modal.Content = ModalContent


export default function Test() {
    return <main>
        <button className='btn-primary'>Open modal</button>
        <Modal>
            <Modal.Body>
                <Modal.Header>
                    <h1>Success</h1>
                </Modal.Header>
                <Modal.Content>
                    Hola!
                </Modal.Content>
                <Modal.Footer>
                    <Modal.Button>Ok</Modal.Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal>
    </main>
}
