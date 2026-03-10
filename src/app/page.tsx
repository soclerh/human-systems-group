import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Approach } from '../components/Approach';
import { Brands } from '../components/Brands';
import { Manifesto } from '../components/Manifesto';
import { ResearchGovernance } from '../components/ResearchGovernance';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

/**
 * HUMAN SYSTEMS GROUP (HSG) - Corporate One-Page Site
 * Refactored into components
 */

const App = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0A1128] font-sans selection:bg-[#0A1128] selection:text-white">

      <Hero />
      <Approach />
      <Brands />
      <Manifesto />
      <ResearchGovernance />
      <Contact />

    </div>
  );
};

export default App;