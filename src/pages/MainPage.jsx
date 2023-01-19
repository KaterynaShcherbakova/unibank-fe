import React from 'react'
import { Background } from '../basic_components/Background';
import '../basic_components/Background.css';
import { CardMenu } from '../complex_components/CardMenu/CardMenu';
import '../complex_components/CardMenu/CardMenu.css';

import { Header } from '../complex_components/Header/Header';
import '../complex_components/Header/Header.css';

import { HexagonBox } from '../complex_components/HexagonBox/HexagonBox';
import '../complex_components/HexagonBox/HexagonBox.css';


export const MainPage = () => {
    return (
        <div className='MainPage'>
            <Background page='main' />
            <Header user='Kateryna Shcherbakova' />
            <CardMenu />
            <HexagonBox />
           
        </div>
    )
}
