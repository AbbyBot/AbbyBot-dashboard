import React, { useState, useContext } from "react";
import { Modal } from "../components/Modal";
import { useCallback } from "react";

interface ModalOptions {
    title: string;
    content: any;
    buttons: any;
    icon: any;
}
// Definimos el contexto del modal
const ModalContext = React.createContext({
    createModal: (modalOptions: ModalOptions) => { },
    closeModal: () => { },
});



export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalOptions, setModalOPtions] = useState<ModalOptions>({
        title: "",
        content: "",
        buttons: [],
        icon: null
    });

    const createModal = useCallback((modalOptions: ModalOptions) => {
        setModalOPtions({
            title: modalOptions.title,
            content: modalOptions.content,
            buttons: modalOptions.buttons,
            icon: modalOptions.icon
        })
        setModalVisible(true);
    }, [])


    const closeModal = useCallback(() => {
        setModalOPtions({
            title: "",
            content: "",
            buttons: [],
            icon: null
        })
        setModalVisible(false);
    }, [])

    const value = {
        createModal,
        closeModal,
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
            <Modal id="abby-header" visible={modalVisible}>
                <Modal.Header icon={modalOptions.icon} title={modalOptions.title} onClose={closeModal} />
                <Modal.Body>
                    {modalOptions.content} 
                </Modal.Body>
                <Modal.Footer> {modalOptions.buttons} </Modal.Footer>
            </Modal>
        </ModalContext.Provider>
    );
}
