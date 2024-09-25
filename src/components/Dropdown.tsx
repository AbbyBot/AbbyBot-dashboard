import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"


const Dropdown = ({ children }: any) => {
    return <div className="dropdown">
        {children}
    </div>
}
const MenuItem = ({onClick, children }: any) => {
    return <button className="dropdown-item" onClick={onClick}>
        {children}
    </button>
}
const DropdownBody = ({ show, children }: any) => {
    return <>
       {show && <div className="dropdown-body">
            {children}
        </div>}
    </>
}
const DropdownButton = ({ onClick, children }: any) => {
    return <>
        <button className="btn-link text-condensed dropdown-button" onClick={onClick}>
            {children}
            <FontAwesomeIcon icon={faCaretDown} size="sm"></FontAwesomeIcon>
        </button>
    </>
}
Dropdown.Button = DropdownButton
Dropdown.Item = MenuItem
Dropdown.Body = DropdownBody
export { Dropdown }
