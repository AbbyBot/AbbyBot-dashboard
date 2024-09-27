import { useState } from "react"
import { Modal } from "../components/Modal"


export default function TestComponents() {
    const [show, setShow] = useState(false)
    return <div>
        <h1>Test components</h1>
        <button onClick={() => setShow(!show)}>Open Modal</button>
        <Modal id="modal" visible={show}>
            {/* <Modal.Header title="Modal title" onClose={() => setShow(false)} /> */}
            <Modal.Body> a body </Modal.Body>
            <Modal.Footer>
                <Modal.Button color="btn-primary" onClick={() => setShow(false)}>Close</Modal.Button>
                <Modal.Button color="btn-secondary" onClick={() => {console.log("Yes!")}}>Ok</Modal.Button>
            </Modal.Footer>
        </Modal>
    </div>
}
