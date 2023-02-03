import ProgressBar from 'react-bootstrap/ProgressBar'
import React from 'react'
import './ProgressBarStripe.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export const ProgressBarStripe = (props) => {
    return (
        <div className="ProgressBarStripe">
            <ProgressBar animated now={props.now} />
        </div>
    )
}

