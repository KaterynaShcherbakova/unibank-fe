import React from 'react'
import './Loader.css'

export const Loader = () => {
    return (
        <div className="loader_background">
            <div class="spinner-box">
                <div class="leo-border-1">
                    <div class="leo-core-1"></div>
                </div>
                <div class="leo-border-2">
                    <div class="leo-core-2"></div>
                </div>
            </div>
        </div>
    )
}
