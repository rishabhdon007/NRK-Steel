import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center max-w-[1920px] mx-auto bg-white/80 backdrop-blur-xl transition-all duration-300 border-b border-slate-100">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl md:text-2xl font-black tracking-tighter text-primary uppercase"
      >
        <Link to="/">NRK STEEL</Link>
      </motion.div>
      
      <div className="hidden md:flex items-center space-x-12">
        {navItems.map((item) => (
          <Link 
            key={item.name}
            to={item.path}
            className={`font-bold tracking-tight uppercase transition-colors duration-200 text-sm ${
              location.pathname === item.path 
                ? 'text-primary border-b-2 border-primary pb-1' 
                : 'text-slate-500 hover:text-primary'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary text-on-primary px-6 py-3 font-bold tracking-tighter uppercase text-xs hover:bg-primary-container transition-colors hidden sm:block"
        >
          Get a Quote
        </motion.button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col space-y-4 md:hidden z-50 shadow-lg"
        >
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`font-bold tracking-tight uppercase ${
                location.pathname === item.path ? 'text-primary' : 'text-slate-500'
              }`}
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-primary text-on-primary px-6 py-4 font-bold tracking-tighter uppercase text-sm">
            Get a Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
};
