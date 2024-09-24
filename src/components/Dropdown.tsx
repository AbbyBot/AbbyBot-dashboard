import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"


const Dropdown = ({show, children}: any ) => {
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        setShowModal(showModal)
    }, [show])
    return <>
        {showModal && children}
    </>
}

const MenuItem = ({children}:any) => {
    return <>
        {children}
    </>
}


const DropdownButton = ({onClick ,children} : any) => {
    return <>
        <button className="btn-link text-condensed dropdown-button" onClick={onClick}>
            {children}
            <FontAwesomeIcon icon={faCaretDown} size="sm"></FontAwesomeIcon>
        </button>
    </>
}

export { Dropdown, DropdownButton, MenuItem }
