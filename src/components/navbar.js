// https://d33epyjwhmr3r5.cloudfront.net/assets/currency/{ Coin short name }.png
import React from 'react';
import Logo from './logo';

class Navbar extends React.Component {
    render () {
        return (
            <nav className='navbar'>
                <Logo />
            </nav>
        )
    }
}

export default Navbar;