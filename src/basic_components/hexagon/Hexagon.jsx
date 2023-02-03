import React from 'react'
import './Hexagon.css'
import { VscArrowSwap } from 'react-icons/vsc'
import { FaPiggyBank } from 'react-icons/fa'
import { RiHistoryFill } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { MdGroups } from 'react-icons/md'
import { CgFileDocument } from 'react-icons/cg'
import { BiMessageDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

export const Hexagon = (props) => {

  const { t, i18n } = useTranslation();
  console.log(i18n.language);;
  return (
    <>


      <nav class="flip-box"
        style={props.size === 'big' ? { 'height': '35vh', 'width': '21vh', 'margin-right': '19vh' } :
          props.size === 'middle' ? { 'height': '32.5vh', 'width': '19vh', 'margin-right': '17vh' } :
            props.size === 'small' ? { 'height': '30vh', 'width': '18vh', 'margin-right': '15vh' } :
              props.size === 'smallest' ? { 'height': '27.5vh', 'width': '16.5vh', 'margin-right': '15vh', 'margin-left': '5vh', 'margin-bottom': '-0.5vh' } : null}>

        <Link to={props.theme === 'piggy bank' ? '/savings' :
          props.theme === 'transactions' ? '/transactions' :
            props.theme === 'settings' ? '/settings' : null}>
          <div class="flip-box-inner">


            <div className='Hexagon'
              style={props.size === 'big' ? { 'height': '35vh', 'width': '21vh', 'margin-right': '19vh' } :
                props.size === 'middle' ? { 'height': '32.5vh', 'width': '19vh', 'margin-right': '17vh' } :
                  props.size === 'small' ? { 'height': '30vh', 'width': '18vh', 'margin-right': '15vh' } :
                    props.size === 'smallest' ? { 'height': '27.5vh', 'width': '16.5vh', 'margin-right': '15vh' } : null
              }

              // onClick={props.theme === 'savings' ? window.location.assign('/savings') : null}
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
                  <h2 className='flip-box-back_text'>{t("navigation.transactions")}</h2> :
                  props.theme === 'piggy bank' ?
                    <h2 className='flip-box-back_text'>{t("navigation.piggy_bank")}</h2> :
                    props.theme === 'history' ?
                      <h2 className='flip-box-back_text'>{t("navigation.history")}</h2> :
                      props.theme === 'settings' && i18n.language === 'ua' ?
                        <h3 style={{'font-size':'3vh'}} className='flip-box-back_text'>{t("navigation.settings")}</h3> :
                        props.theme === 'settings' && i18n.language === 'en' ?
                          < h2 className='flip-box-back_text'>{t("navigation.settings")}</h2> :
                          props.theme === 'messages' ?
                            <h2 className='flip-box-back_text'>{t("navigation.help")}</h2> :
                            props.theme === 'blueprints' ?
                              <h2 className='flip-box-back_text'>{t("navigation.blueprints")}</h2> :
                              props.theme === 'shared wallet' ?
                                <h2 className='flip-box-back_text'>{t("navigation.shared_wallet")}</h2> : null
              }
            </div>
          </div>
        </Link>
      </nav >



    </>
  )
}

