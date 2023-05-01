import React from 'react';
import './HeaderStyles.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerMain'>
        <div className = 'img'>
            <img src='./icons/logo.jpg' alt='Наш логотип' className='logo'/>
        </div>
		<Link to="/" className="liga-button">
            <img src="./icons/ligi.png" alt='Лиги' className='iconlink'/>
            <br/>
            Лиги
            </Link> 
		<Link to="/teams" className='tem-button'>
            <img src="./icons/team.png" alt='Команды' className='iconlink'/>
            <br/>
            Команды
            </Link>
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