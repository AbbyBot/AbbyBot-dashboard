import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
export function Dropdown({ children }) {
    return (
        <div className="dropdown">
            {children}
        </div>
    )
}
const DropdownButton = ({ children, bodyId }) => {

    const toggleDropdown = (event) => {
        event.stopPropagation();
        const dropdown = document.getElementById(bodyId)
        dropdown.classList.toggle('dropdown-show')
    }

    const handleOutsideClick = (event) => {
        const dropdown = document.getElementById(bodyId)
        dropdown.classList.remove('dropdown-show')
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [bodyId])

    return <button className='btn-link' onClick={toggleDropdown}>
        {children}
        <FontAwesomeIcon icon={faCaretDown} />
    </button>
}

const DropdownBody = ({ children, id }) => {
    return <div className="dropdown-body" id={id}> {children} </div>
}

const DropdownItem = ({ children, onClick }) => {
    return <button className="dropdown-item" onClick={onClick}> {children} </button>
};



Dropdown.Button = DropdownButton
Dropdown.Body = DropdownBody
Dropdown.Item = DropdownItem

