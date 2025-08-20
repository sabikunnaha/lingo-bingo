

import { FcVoicePresentation } from "react-icons/fc";
import { NavLink } from "react-router";

const Header = () => {
  const links = <>
    <li><NavLink className={ ({isActive})=> isActive? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='/'>Home</NavLink></li>
    <li><NavLink className={ ({isActive})=> isActive? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'}  to='learning/'>Start Learning</NavLink></li>
    <li><NavLink className={ ({isActive})=> isActive? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='tutorial/'>Tutorial</NavLink></li>
    <li><NavLink className={ ({isActive})=> isActive? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='about/'>About Us</NavLink></li>

  </>
  return (
    <div className="navbar  fixed z-20 px-9 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            {links}
          </ul>
        </div>
        <FcVoicePresentation className='text-purple-300 text-5xl'></FcVoicePresentation>
        <h2 className="font-bold text-blue-500">LINGO BINGO</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal bg-base-100 rounded-full px-5">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white rounded-full bg-blue-400">Login</a>
      </div>
    </div>
  );
};

export default Header;