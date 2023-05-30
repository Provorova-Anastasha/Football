import React  from 'react';
import './HeaderStyles.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerMain'>
        <div className = 'img'>
           <Link to='/'>
           <img src='/icons/logo.jpg' alt='Наш логотип' className='logo'/>
           </Link> 
        </div>
		<Link to="/" className="ligaButton">
            <img src="/icons/ligi.png" alt='Лиги' className='iconlink'/>
            <p>Лиги</p>
            </Link> 
		<Link to="/teams" className='temButton'>
            <img src="/icons/team.png" alt='Команды' className='iconlink'/>
            <p>Команды</p>
            </Link>
            </div>
</div>
    );
};
export default Header