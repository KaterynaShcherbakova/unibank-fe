import React from 'react'
import { Background } from '../basic_components/Background';
import '../basic_components/Background.css';
import { Header } from '../complex_components/Header/Header';
import '../complex_components/Header/Header.css';
import { IoArrowBackCircleSharp } from 'react-icons/io5'
import { PageName } from '../basic_components/PageName';
import '../basic_components/PageName.css';


export const TransactionPage = () => {
  function goToMain() {
    window.location.assign('/');
}
  return (
    <div className='TransactionPage'>
      <Background page='transactions' />
      <Header user='Kateryna Shcherbakova' />
     <PageName page_name={'Transactions'}/>
    </div>
  )
}
