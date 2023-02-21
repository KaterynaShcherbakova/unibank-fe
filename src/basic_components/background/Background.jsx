import React from 'react'
import './Background.css'

export const Background = (props) => {
    return (
        <div className='background'
            style={
                props.page === 'main' ? { 'background-color': '#758392' } :
                    props.page === 'auth' ? { 'background': 'linear-gradient(#171C27, #000000)' } :
                        props.page === 'transactions' ? { 'background-color': '#E5EBEC' } :
                            props.page === 'settings' ? { 'background-color': '#6B7B81' } :
                                props.page === 'loading' ? { 'background-color': '#171C27' } :
                                    props.page === 'savings' ? { 'background-color': '#6B7B81' } :
                                        props.page === 'shared wallet' ? {  'background-color': '#E5EBEC'} : null}

                                        ></ div >

            )
}

