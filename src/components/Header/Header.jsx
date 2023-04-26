import React from 'react';
import './HeaderStyles.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerMain'>
        <div className = 'img'>
            <img src='./icons/logo.jpg' alt='Наш логотип' className='logo'/>
        </div>
		<a href="/" className="liga-button">
            <img src="./icons/ligi.png" alt='Лиги' className='iconlink'/>
            <br/>
            Лиги
            </a>
		<a href="/" className='tem-button'>
            <img src="./icons/team.png" alt='Команды' className='iconlink'/>
            <br/>
            Команды
            </a>
            </div>
<form className='form'>
		<input 
        type='text' 
        name='text'
        className='search'
        placeholder='Search here!'
        />
		<input type='submit' name='submit' className='submit' value='Поиск' />
   </form>	
    
</div>
    );
};
export default Header