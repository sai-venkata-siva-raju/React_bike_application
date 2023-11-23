import React from 'react';
import {Link} from 'react-router-dom';

const header = () => {
  return (
    <div className='nav'>
       <h1>RIDE <span className='pro'>PRO</span><span className='wheels'> WHEELS</span> <br/><center>Ducati</center> </h1>
       
      <ul>
       
       
        <Link to='/'><li>Home</li></Link>
        <Link to='/sports'><li>Sports</li></Link>
        <Link to='/adventure'><li>Adventure</li></Link>
        <Link to='/cruiser'><li>Cruiser</li></Link>
        <Link to='/form'><li>Contact-us</li></Link>
      </ul>
      
    </div>
  )
}

export default header
