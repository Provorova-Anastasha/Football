import React from 'react';
import './Error403Styles.css';
import { Link } from 'react-router-dom';

const Error403 = () => {
    return (
<div className='error403'>
    <p className='access'> К сожалению, на данный момент данные не доступны </p>
    <Link to="/"> <button className='back'>Вернуться</button> </Link> 
      
</div>
    )
}
export default Error403;