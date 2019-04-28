import React from "react"
import "./style.css"

function Scores(props) {
    return (
        <div className = "row scores-row">
            <div className="col-4" id = "scores">
                Top Score: {props.top_score} | Score: {props.score}
            </div>
        </div>
        )
}

export default Scores;