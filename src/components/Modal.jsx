import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Modal = ({ children, visible }) => {
    return <div className={`modal-backdrop ${visible ? 'modal-show' : ''}`}>{children}</div>
}

const ModalBody = ({ children, id }) => {
    return <div id={id} className='modal-body rounded'>{children}</div>
}

const ModalFooter = ({ children }) => {
    return <div className='modal-footer'>{children}</div>
}

const ModalHeader = ({ children, dismiss }) => {
    return <div className='modal-header'>
        {children}
        <button className='modal-close-button' onClick={dismiss}><FontAwesomeIcon icon={faClose} /></button>
    </div>
}
const ModalContent = ({ children }) => {
    return <div className='modal-content'>{children}</div>
}

const ModalButton = ({ className, children, onClick }) => {
    return <button className={className} onClick={onClick}>{children}</button>
}


Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.Header = ModalHeader
Modal.Button = ModalButton
Modal.Content = ModalContent