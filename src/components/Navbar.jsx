import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import React from 'react'
import {links} from '../data'
//import {GoThreeBars} from 'react-icons/go'
// @ts-ignore
import Logo from '../images/logo.png'
 
 const Navbar = () => { 
   return (
     <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className='nav__links'>
                {
                    links.map(({name, path}, index) => {
                        return(
                            <li>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' :
                                ''}>{name}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
            <button type="button" className="quotebutton">Get A Quote</button>
            </div> 
         {/*   <button className="nav__toggle-btn">
                <GoThreeBars/>
            </button> */}
        </div>
     </nav>
   )
 }
 
 export default Navbar
 