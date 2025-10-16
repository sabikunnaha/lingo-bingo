
import { useContext } from "react";
import { FcVoicePresentation } from "react-icons/fc";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Header = () => {

  const { user, logoutUser } = useContext(AuthContext);

  const links = <>
    <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='/'>Home</NavLink></li>
    <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='/learning'>Start Learning</NavLink></li>
    <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='/tutorial'>Tutorial</NavLink></li>
    <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='/about'>About Us</NavLink></li>

  </>

  const addLink = <>
    <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='/'>Home</NavLink></li>
    <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='/learning'>Start Learning</NavLink></li>
    <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='/tutorial'>Tutorial</NavLink></li>
    <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='/about'>About Us</NavLink></li>
    <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-blue-400 font-bold rounded-full' : 'font-bold'} to='/profile'>My Profile</NavLink></li>
  </>

  //Greeting User

  const hour = new Date().getHours();

  let greeting = "";
  if (hour < 12) {
    greeting = `☀️ Good Morning! ${user?.displayName || ''}`;
  } else if (hour < 18) {
    greeting = `🌤️ Good Afternoon! ${user?.displayName || ''} `;
  } else {
    greeting = `🌙 Good Evening! ${user?.displayName || ''}`;
  }



  return (
    <div>

      <div className="navbar bg-gradient-to-br from-indigo-50 to-purple-100 fixed z-20 backdrop-blur px-11">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dark:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {user?.email ? addLink : links}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <FcVoicePresentation className=' text-purple-300 text-5xl'></FcVoicePresentation>
            <h2 className=" font-bold text-base sm:text-2xl text-blue-500 whitespace-nowrap">Lingo Bingo</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-gray-700 px-5">
            {user?.email ? addLink : links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email ? <div className="flex gap-2">
              <h1
                className={`text-sm p-2  bg-gradient-to-r from-purple-500 via-blue-400 to-blue-800 bg-clip-text text-transparent font-bold animate-pulse ${user?.email ? 'hidden sm:block' : ''}`}
              >
                {user?.email ? greeting : ''}
              </h1>
              <button onClick={logoutUser} className="btn text-white border-none rounded-full bg-blue-400 ">Logout</button> </div> :
              <Link to={'/login'} className="btn text-white border-none rounded-full bg-blue-400">Login</Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Header;