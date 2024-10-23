import React from 'react';
import BioContent from '../components/BioContent';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Bio() {
  return (
    <div>
      <Header/>
      <Banner/>
      <BioContent />
      <Footer/>
    </div>
  );
}

export default Bio;
