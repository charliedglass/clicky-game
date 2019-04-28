import React from "react"
import "./style.css"

function Status(props) {
    return (
        <div className = "row status-row">
            <div className="col-4" id = "status">
                Click on each player only once to win!
                <br></br>
                {props.status}
            </div>
        </div>
        )
}

export default Status;