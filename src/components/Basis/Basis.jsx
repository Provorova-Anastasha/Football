import React from 'react';
import './BasisStyles.css';

const Basis = () => {
    return (
<div className='ligi'>
    <div className='ligiHight'>
    <a href = '/'className='russia-button'>
        <img src='./icons/rpl.jpg' alt='Россия.Премьер-лига' className='link'/>
<br/>
Россия.Премьер-лига
    </a>
    <a href = '/'className='bd-button'>
        <img src='./icons/bd.jpg' alt='Германия.Бундеслига' className='link'/>
<br/>
Германия.Бундеслига
    </a>
    </div>
<div className='ligis'>
    <a href = '/'className='apl-button'>
        <img src='./icons/apl.jpg' alt='Англия.Премьер-лига' className='link'/>
<br/>
Англия.Премьер-лига
    </a>
    <a href = '/'className='itl-button'>
        <img src='./icons/ital.jpg' alt='Италия.СерияА' className='link'/>
<br/>
Италия.Серия А
    </a>
    </div>   
    </div> 
        )
}
    export default Basis 