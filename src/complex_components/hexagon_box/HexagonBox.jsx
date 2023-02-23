import React from 'react'
import './HexagonBox.css'
import { Hexagon } from '../../basic_components/hexagon/Hexagon';

export const HexagonBox = () => {
    return (
        <>
            <div className='Hexagon_box'>
                <div className='hexagon_box_upper_row'>
                    <Hexagon size='small' theme='blueprints' />
                    <Hexagon size='smallest' theme='messages' />

                </div>
                <div className='hexagon_box_middle_row'>
                    <Hexagon size='big' theme='transactions' />
                    <Hexagon size='middle' theme='piggy bank' />
                    <Hexagon size='small' theme='history' />
                </div>
                <div className='hexagon_box_lower_row'>
                    <Hexagon size='small' theme='shared wallet' />
                    <Hexagon size='smallest' theme='settings' />
                </div>


            </div>
        </>

    )
}


