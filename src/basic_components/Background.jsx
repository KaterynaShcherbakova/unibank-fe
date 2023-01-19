import React from 'react'

export const Background = (props) => {
    return (
        <div className='background'
            style={
                props.page === 'main' ? { 'background-color': '#758392' } :
                    props.page === 'auth' ? { 'background': 'linear-gradient(#171C27, #000000)' } :
                        props.page === 'transactions' ? { 'background-color': '#E5EBEC' } : null}

        ></ div >

    )
}

