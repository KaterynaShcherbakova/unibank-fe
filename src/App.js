import './App.css';
import './basic_components/Hexagon.css'
import { Card } from './basic_components/Card';
import './basic_components/Card.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import { MainPage } from './pages/MainPage';
import { TransactionPage } from './pages/TransactionPage';
import './pages/TransactionPage.css';

import { PiggyBankPage } from './pages/PiggyBankPage';
import './pages/MainPage.css';
import { ErrorMessage } from './basic_components/ErrorMessage';
import './basic_components/ErrorMessage.css';
import { Background } from './basic_components/Background';
import './basic_components/Background.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/login" element={<AuthPage />} />
          <Route path='/transactions' element={<TransactionPage />} />
          <Route path="/savings" element={<PiggyBankPage />} />
          <Route exact path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      {/* <ErrorMessage /> */}
      

    </>
  )
}

export default App;
