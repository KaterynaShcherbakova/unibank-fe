import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import { MainPage } from './pages/MainPage';
import { TransactionPage } from './pages/TransactionPage';
import { PiggyBankPage } from './pages/PiggyBankPage';
import { Header } from './complex_components/header/Header';
import { SettingsPage } from './pages/SettingsPage';
import { ErrorMessage } from './basic_components/message/ErrorMessage';
import { Checkbox } from './basic_components/checkbox/Checkbox';
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


function App() {
  const recent = [{
    id: 1,
    title: '0987 **** **** 9876',
    amount: 10000,

  }, {
    id: 2,
    title: '0987 **** **** 9876',
    amount: 10200,

  }, {
    id: 3,
    title: '0987 **** **** 9876',
    amount: 3999000,

  }]

  const popular = [{
    id: 1,
    title: '0987 **** **** 9876',
    amount: 10000,

  }, {
    id: 8,
    title: '0021 **** **** 9876',
    amount: 1050000,

  }, {
    id: 6,
    title: '0945 **** **** 9876',
    amount: 10,

  }]

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [messageTheme, setMessageTheme] = useState('');

  const messageFunc = (state, text, theme) => {
    setShowMessage(state);
    setMessage(text);
    setMessageTheme(theme);
  }


  return (
    <>
      {!window.location.pathname.includes('/login') ? <Header user='Kateryna Shcherbakova' /> : null}

      <div className={!window.location.pathname.includes('/login') ? 'MainContent' : ''}>
        <ErrorMessage
          showMessage={showMessage}
          message={message}
          messageTheme={messageTheme}
        />
        <BrowserRouter>
          <Routes >
            <Route path="/login" element={<AuthPage messageFunc={messageFunc} />} />
            <Route exact path="/" element={<MainPage messageFunc={messageFunc} />} />
            <Route path='/transactions' element={<TransactionPage recent={recent} popular={popular} />} />
            <Route path="/savings" element={<PiggyBankPage />} />
            <Route path='settings' element={<SettingsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Checkbox/> */}
    </>
  )
}
export default App;
