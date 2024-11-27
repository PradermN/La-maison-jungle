import React from 'react';
import '../styles/Banner.css';

import logo from '../assets/logo.png'

export default function Banner(){

    const title = "La Maison Jungle";

    return(

        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>

    );
}
