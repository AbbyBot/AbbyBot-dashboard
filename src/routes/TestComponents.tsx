import { Modal } from "../components/Modal";
import { useModal } from "../context/ModalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
export default function TestComponents() {
    const { createModal, closeModal } = useModal();
    const openModal = () => {
        createModal({
            title: "Success",
            content: "Now you're logged in!",
            buttons: [
                <Modal.Button color="primary" onClick={closeModal}>Great!</Modal.Button>,
            ],
            icon: <FontAwesomeIcon color="green" icon={faCheckCircle} />,
        })
    }

    return (
        <button onClick={() => openModal()}>Open modal</button>
    )
}
