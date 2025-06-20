import React, { useState} from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './index.css'

import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs';
import GettouchForm from './components/GettouchForm';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import About from './pages/About';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import MobileDevelopment from './pages/MobileDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import BlockchainDevelopment from './pages/BlockchainDevelopment'
import AiDevelopment from './pages/AiDevelopment'
import { useEffect } from 'react';
import Careers from './pages/Careers';
import SEODevelopment from './components/SEODevelopment';
import Careers1 from './pages/Careers1';
import JobApply from './pages/JobApply';
import QualityAnalysis from './pages/QualityAnalysis';
import Iistaff from './pages/ItTeam';




function Scroll() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return null
}
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <BrowserRouter>
      <Scroll />
      {/* Navbar always on top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow m-auto">
        <Routes>
          <Route path="/" element={<Homepage setIsModalOpen={openModal} />} />
          <Route path="/about" element={<About />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Careers />} />
           <Route path="/" element={<SEODevelopment />} />
            <Route path="/careers1" element={<Careers1 />} />
              <Route path="/JobApply" element={<JobApply />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gettouch" element={<GettouchForm />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/services/quality-analysis" element={<QualityAnalysis />} />
          <Route path="/services/mobile-app-development" element={<MobileDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/blockchain-development" element={<BlockchainDevelopment />} />
          <Route path="/services/ai-development" element={<AiDevelopment />} />
          <Route path="/services/it_staff" element={<Iistaff />} />
        </Routes>
      </main>
      

    
     

      <GettouchForm isOpen={isModalOpen} onClose={closeModal} />
      

    
      <Footer onContactClick={openModal} />

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
