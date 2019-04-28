import React from "react"
import "./style.css"

function ImagesRow(props) {
    return (
        <div className = "row images-row">{props.children}</div>
    )
}

export default ImagesRow;