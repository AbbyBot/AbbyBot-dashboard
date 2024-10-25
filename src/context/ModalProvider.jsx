import { createContext, useContext, useState } from "react";
import { Modal } from "../components/Modal";

const ModalContext = createContext({
    createModal: ({ title, body, buttons }) => { },
    dismissModal: () => { }
})


export const useModal = () => useContext(ModalContext)


export const ModalProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState(null);
    const [buttons, setButtons] = useState([]);
    const [visible, setVisible] = useState(false)

    const createModal = ({ title, body, buttons }) => {
        const showModal = () => {
            setTitle(title)
            setBody(body)
            setButtons(buttons)
            setVisible(true)
            console.log(title, body, buttons)
        }
        return { show: showModal }
    }



    const dismissModal = () => setVisible(false)

    return <ModalContext.Provider value={{ createModal, dismissModal }}>
        {children}
        <Modal visible={visible}>
                <Modal.Body>
                    <Modal.Header dismiss={dismissModal}>
                        {title}
                    </Modal.Header>
                    <Modal.Content>
                        {body}
                    </Modal.Content>
                    <Modal.Footer>
                        {buttons}
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
    </ModalContext.Provider>
}