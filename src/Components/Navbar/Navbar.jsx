import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../../assets/Mac App iconW.png';

const Navbar = () => {
  return (
    <nav className='container'>
      <Link to='/'> {/* Specify the correct 'to' prop */}
        <img src={logo} alt="" className='logo' />
      </Link>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/TheWeekend'>The Weekend</Link></li>
        <li><Link to='/RacePhotos'>Race Photos</Link></li>
        <li><Link to='/RaceCourse'>Race Course</Link></li>
        <li><Link to='/Performance'>Performance</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
