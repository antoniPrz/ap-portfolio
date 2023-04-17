import { useContext, useState } from 'react';
import './Navbar.css';
export function Navbar() {
  // const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(true);

  return (
    <nav className='nav center'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item' href=''>
          <a className='link link--nav'>Projects</a>
        </li>
        <li className='nav__list-item'>
          <a className='link link--nav'>Skills</a>
        </li>
        <li className='nav__list-item'>
          <a className='link link--nav'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
