// src/components/Navbar.jsx
import React from 'react';
import closeIcon from '../../public/assets/close.svg';
import menuIcon from '../../public/assets/menu.svg';
import { navLinks } from '../constans/index';

const NavItems = () => {
  return (
    <div>
      <ul className="nav-ul">
        {navLinks.map(({ id, href, name, download }) => (
          <li key={id} className="nav-li">
            <a
              href={href}
              className="nav-li_a"
              {...(download ? { download: true } : {})}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto px-4">
          <a
            href="#"
            className="text-neutral-400 hover:text-white font-bold text-xl transition-colors"
          >
            Ivan David
          </a>

          {/* Botón Hamburguesa (visible en móvil/tablet) */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? closeIcon : menuIcon}
              alt={isOpen ? 'Close menu' : 'Open menu'}
              className="w-6 h-6"
            />
          </button>

          {/* Menú principal (visible si isOpen == true en mobile) */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Sidebar (menú lateral) */}
      <div
        className={`nav-sidebar transition-max-height duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
