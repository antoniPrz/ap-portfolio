import { Navbar } from '../Navbar/Navbar';
import { header } from '../../data';

import './Header.css';

export function Header() {
  const { homepage, title } = header;
  return (
    <header className='header center' id='header'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
}

// export function Header() {
//   return (
//     <header className='header center'>
//       <h3>AP</h3>
//       <Navbar />
//     </header>
//   );
// }
