import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'

const ToggleBtn = () => {
    return (
        <div id="toggleSection">
            <button type="button" className="btn toggle">
                <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default ToggleBtn
