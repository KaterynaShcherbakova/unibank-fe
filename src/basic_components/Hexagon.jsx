import React from 'react'
import { VscArrowSwap } from 'react-icons/vsc'
import { FaPiggyBank } from 'react-icons/fa'
import { RiHistoryFill } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { MdGroups } from 'react-icons/md'
import { CgFileDocument } from 'react-icons/cg'
import { BiMessageDetail } from 'react-icons/bi'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import { TransactionPage } from '../pages/TransactionPage'
import { PiggyBankPage } from '../pages/PiggyBankPage'
import { MainPage } from '../pages/MainPage'
export const Hexagon = (props) => {
  return (
    <>


      <nav class="flip-box"
        style={props.size === 'big' ? { 'height': '35vh', 'width': '21vh', 'margin-right': '19vh' } :
          props.size === 'middle' ? { 'height': '32.5vh', 'width': '19vh', 'margin-right': '17vh' } :
            props.size === 'small' ? { 'height': '30vh', 'width': '18vh', 'margin-right': '15vh' } :
              props.size === 'smallest' ? { 'height': '27.5vh', 'width': '16.5vh', 'margin-right': '15vh', 'margin-left': '5vh', 'margin-bottom': '-0.5vh' } : null}>

        <Link to={props.theme === 'piggy bank' ? '/savings' :
          props.theme === 'transactions' ? '/transactions' : null}>
          <div class="flip-box-inner">


            <div className='Hexagon'
              style={props.size === 'big' ? { 'height': '35vh', 'width': '21vh', 'margin-right': '19vh' } :
                props.size === 'middle' ? { 'height': '32.5vh', 'width': '19vh', 'margin-right': '17vh' } :
                  props.size === 'small' ? { 'height': '30vh', 'width': '18vh', 'margin-right': '15vh' } :
                    props.size === 'smallest' ? { 'height': '27.5vh', 'width': '16.5vh', 'margin-right': '15vh' } : null
              }

              onClick={props.theme === 'savings' ? window.location.assign('/savings') : null}
            >
              {
                props.theme === 'transactions' ?
                  <VscArrowSwap className='hexagon_icon' size={'8vh'} /> :
                  props.theme === 'piggy bank' ?
                    <FaPiggyBank className='hexagon_icon' size={'8vh'} /> :
                    props.theme === 'history' ?
                      <RiHistoryFill className='hexagon_icon' size={'7vh'} /> :
                      props.theme === 'settings' ?
                        <FiSettings className='hexagon_icon' size={'6vh'} /> :
                        props.theme === 'messages' ?
                          <BiMessageDetail className='hexagon_icon' size={'7vh'} /> :
                          props.theme === 'blueprints' ?
                            <CgFileDocument className='hexagon_icon' size={'7vh'} /> :
                            props.theme === 'shared wallet' ?
                              <MdGroups className='hexagon_icon' size={'8vh'} /> : null
              }
            </div >
            <div class="flip-box-back">

              {
                props.theme === 'transactions' ?
                  <h2 className='flip-box-back_text'>Transactions</h2> :
                  props.theme === 'piggy bank' ?
                    <h2 className='flip-box-back_text'>Piggy Bank</h2> :
                    props.theme === 'history' ?
                      <h2 className='flip-box-back_text'>History</h2> :
                      props.theme === 'settings' ?
                        <h2 className='flip-box-back_text'>Settings</h2> :
                        props.theme === 'messages' ?
                          <h2 className='flip-box-back_text'>Help</h2> :
                          props.theme === 'blueprints' ?
                            <h2 className='flip-box-back_text'>Blueprints</h2> :
                            props.theme === 'shared wallet' ?
                              <h2 className='flip-box-back_text'>Shared Wallet</h2> : null
              }
            </div>
          </div>
        </Link>
      </nav >



    </>
  )
}

