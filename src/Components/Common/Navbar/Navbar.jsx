import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolledPastBanner, setScrolledPastBanner] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', to: '/' },
    {
      name: 'Services',
      dropdown: [
        { name: 'General Dentistry', to: '/services/General' },
        { name: 'Cosmetic Dentistry', to: '/services/cosmetic' },
      ],
    },
    { name: 'Dentist', to: '/dentist' },
    { name: 'About', to: '/about' },
    { name: 'Contact Us', to: '/contact' },
  ];

  const activeClass = scrolledPastBanner
    ? 'text-black font-semibold'
    : 'text-white font-semibold';

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle visibility on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      // Toggle bg and text color after banner
      if (currentScrollY > 100) {
        setScrolledPastBanner(true);
      } else {
        setScrolledPastBanner(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 p-5 ${
        scrolledPastBanner ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-full mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0 z-10">
            <img
              src="https://i.ibb.co/ksn3YC7K/Dr-Rashed.png"
              alt="Logo"
              className="max-sm:w-[60px] w-[80px] rounded-full"
            />
          </NavLink>

          {/* Desktop Nav */}
          <ul
            className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6 text-[15px] font-medium ${
              scrolledPastBanner ? 'text-black' : 'text-white'
            }`}
          >
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="flex items-center cursor-pointer px-4 py-3">
                    <span>{link.name}</span>
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        scrolledPastBanner ? 'text-black' : 'text-white'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white text-black rounded-md shadow-md py-2 w-64 z-50">
                    {link.dropdown.map((item, i) => (
                      <li key={i}>
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            'px-4 py-3 hover:bg-blue-200 transition block ' +
                            (isActive ? activeClass : '')
                          }
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ) : (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      'px-4 py-2 rounded-md transition ' + (isActive ? activeClass : '')
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              )
            )}
          </ul>

          {/* Desktop Button */}
          <div className="hidden lg:flex z-10">
            <NavLink
              to="/book"
              className={`relative inline-block overflow-hidden px-6 py-2 rounded-md font-semibold transition-colors duration-500 group ${
                scrolledPastBanner ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              <span className="absolute inset-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 bg-blue-600" />
              <span className="relative z-10">Book Appointment</span>
            </NavLink>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={scrolledPastBanner ? 'text-black' : 'text-white'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-50 shadow-lg px-6 py-8"
            >
              <div className="flex justify-between items-center mb-8">
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  <img src="https://i.ibb.co/7dDj9zvr/download-14.png" alt="Logo" className="w-[100px]" />
                </NavLink>
                <button onClick={toggleMenu} className="text-2xl text-gray-700">✕</button>
              </div>

              <ul className="flex flex-col gap-4 text-[16px] font-medium text-gray-800">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07 }}
                  >
                    {link.dropdown ? (
                      <details className="group">
                        <summary className="cursor-pointer py-2 px-2 rounded hover:bg-gray-100 transition flex justify-between items-center">
                          {link.name}
                          <svg className="w-4 h-4 text-gray-500 group-open:text-blue-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <ul className="ml-4 mt-2 space-y-2">
                          {link.dropdown.map((item, i) => (
                            <li key={i}>
                              <NavLink
                                to={item.to}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                  'block px-2 py-1 hover:bg-blue-100 rounded transition ' + (isActive ? activeClass : '')
                                }
                              >
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <NavLink
                        to={link.to}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          'block px-2 py-2 hover:bg-blue-100 rounded transition ' + (isActive ? activeClass : '')
                        }
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </motion.li>
                ))}
                <li>
                  <NavLink
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="bg-blue-500 text-white text-center rounded-md px-4 py-2 hover:bg-blue-700 transition block"
                  >
                    Book Appointment
                  </NavLink>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black z-40"
            />
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
