import { Modal } from "../components/Modal";
import { useModal } from "../context/ModalProvider"

export default function Test() {
    const { createModal, dismissModal } = useModal();
    const modal = createModal({
        title: 'Logout',
        body:  <h1>Are you sure?</h1>,
        buttons: [
            <Modal.Button className='btn-primary' onClick={dismissModal}>Yeah</Modal.Button>
        ]
    })


    return <main>
        <button onClick={modal.show} className='btn-primary'>Open modal</button>
    </main>
}
