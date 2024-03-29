import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import { MainPage } from './pages/MainPage';
import { TransactionPage } from './pages/TransactionPage';
import { PiggyBankPage } from './pages/PiggyBankPage';
import { Header } from './complex_components/header/Header';
import { SettingsPage } from './pages/SettingsPage';
import SharedWalletPage from './pages/SharedWalletPage';
import './pages/Pages.css'
import './App.css';

export const cards = [{
  id: 1,
  title: '0987 **** **** 9876',
  card_number: '0987 7654 3645 9876',
  deadline: '26/09',
  amount: 10000,
  cvv: 345,

}, {
  id: 2,
  title: '0987 **** **** 1112',
  card_number: '0987 7654 3645 1112',
  deadline: '26/09',
  amount: 3000,
  cvv: 345,


}, {
  id: 3,
  title: '0987 **** **** 1111',
  card_number: '0987 7654 3645 1111',
  deadline: '26/09',
  amount: 106,
  cvv: 345,

},
{
  id: 4,
  title: '0987 **** **** 2222',
  card_number: '0987 7654 3645 2222',
  deadline: '26/09',
  amount: 10000,
  cvv: 345,


}, {
  id: 6,
  title: '0987 **** **** 3333',
  card_number: '0987 7654 3645 3333',
  deadline: '26/09',
  amount: 13200,
  cvv: 345,


}, {
  id: 5,
  title: '0987 **** **** 4444',
  card_number: '0987 7654 3645 4444',
  deadline: '26/10',
  amount: 405,
  cvv: 345,

}]

export const wallets = [{
  id: 1,
  title: '0987 **** **** 9876',
  card_number: '0987 7654 3645 9876',
  deadline: '26/09',
  amount: 10000,
  cvv: 345,

}, {
  id: 2,
  title: '0987 **** **** 1112',
  card_number: '0987 7654 3645 1112',
  deadline: '26/09',
  amount: 3000,
  cvv: 345,


}, {
  id: 3,
  title: '0987 **** **** 1111',
  card_number: '0987 7654 3645 1111',
  deadline: '26/09',
  amount: 106,
  cvv: 345,

},
{
  id: 4,
  title: '0987 **** **** 2222',
  card_number: '0987 7654 3645 2222',
  deadline: '26/09',
  amount: 10000,
  cvv: 345,


}, {
  id: 6,
  title: '0987 **** **** 3333',
  card_number: '0987 7654 3645 3333',
  deadline: '26/09',
  amount: 13200,
  cvv: 345,


}, {
  id: 5,
  title: '0987 **** **** 4444',
  card_number: '0987 7654 3645 4444',
  deadline: '26/10',
  amount: 405,
  cvv: 345,

}]


function App() {
  const recent = [{
    id: 1,
    title: '0987 **** **** 9876',
    cardNum: '0987 6253 1234 9876',
    amount: '10000',
    message: 'For your skincare♥',

  }, {
    id: 2,
    title: '0987 **** **** 9876',
    cardNum: '0987 6253 1234 9876',
    message: 'For your skincare♥',

    amount: '10200',

  }, {
    id: 3,
    title: '0987 **** **** 9876',
    cardNum: '0987 6253 1234 9876',
    message: 'For your skincare♥',

    amount: '3999000',

  }]

  const popular = [{
    id: 4,
    title: '0987 **** **** 9876',
    cardNum: '0987 6253 1234 9876',
    message: 'For your skincare♥',
    amount: '10000',

  }, {
    id: 5,
    title: '0021 **** **** 9876',
    cardNum: '0987 6253 1234 9876',
    message: 'For your skincare♥',
    amount: '1050000',

  }, {
    id: 6,
    title: '0945 **** **** 9876',
    cardNum: '0987 6253 1234 9876',
    message: 'For your skincare♥',
    amount: '10',

  }]



  return (
    <>
      {!window.location.pathname.includes('/login') ? <Header user='Kateryna Shcherbakova' /> : null}

      <div className={!window.location.pathname.includes('/login') ? 'MainContent' : ''}>

        <BrowserRouter>
          <Routes >
            <Route path="/login" element={<AuthPage />} />
            <Route exact path="/" element={<MainPage />} />
            <Route path='/transactions' element={<TransactionPage recent={recent} popular={popular} />} />
            <Route path="/savings" element={<PiggyBankPage />} />
            <Route path='settings' element={<SettingsPage />} />
            <Route path='sharedwallet' element={<SharedWalletPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App;
