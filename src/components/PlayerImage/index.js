import React from "react"
import "./style.css"

function PlayerImage(props) {
    return (
        // <div className="col-2">
            <img className = "player-img img-thumbnail" id = {props.id} src = {props.src} alt = "Player" onClick={() => props.clickImage(props.id)}>
            </img>
        // </div>
    )
}

export default PlayerImage;