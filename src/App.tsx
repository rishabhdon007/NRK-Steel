/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import ProductDetails from './pages/ProductDetails.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { PageTransition } from './components/PageTransition.tsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-[9999]" 
          style={{ scaleX }} 
        />
        <Navbar />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
