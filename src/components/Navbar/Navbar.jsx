import { useContext, useState } from 'react';
import './Navbar.css';
import { Close, Menu } from '@mui/icons-material';
export function Navbar() {
  // const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <a
            className='link link--nav'
            href='#projects'
            onClick={toggleNavList}
          >
            Proyectos
          </a>
        </li>
        <li className='nav__list-item'>
          <a className='link link--nav' href='#skills' onClick={toggleNavList}>
            Habilidades
          </a>
        </li>
        <li className='nav__list-item'>
          <a className='link link--nav' href='#contact' onClick={toggleNavList}>
            Contacto
          </a>
        </li>
      </ul>
      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <Close /> : <Menu />}
      </button>
    </nav>
  );
}
