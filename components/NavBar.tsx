import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const commonLinkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkClasses = "bg-blue-600 text-white";
  const inactiveLinkClasses = "text-gray-600 hover:bg-blue-500 hover:text-white";

  const getLinkClass = ({ isActive }: { isActive: boolean }) => 
    `${commonLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`;

  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Logbook', href: '/logbook' },
    { name: 'Medications', href: '/medications' },
    { name: 'AI Insights', href: '/insights' },
    { name: 'AI Assistant', href: '/assistant' },
    { name: 'Profile', href: '/profile' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to={user ? "/dashboard" : "/"} className="text-2xl font-bold text-blue-600">
            HyperCare AI
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {links.map((link) => (
                  <NavLink key={link.name} to={link.href} className={getLinkClass}>
                    {link.name}
                  </NavLink>
                ))}
                <button onClick={handleLogout} className={`${commonLinkClasses} ${inactiveLinkClasses}`}>
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" className={getLinkClass}>
                Login
              </NavLink>
            )}
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && user && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block ${commonLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                {link.name}
              </NavLink>
            ))}
             <button onClick={() => { handleLogout(); setIsOpen(false); }} className={`block w-full text-left ${commonLinkClasses} ${inactiveLinkClasses}`}>
                Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
