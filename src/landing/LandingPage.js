import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import InfoSection from './components/InfoSection';
import Works from './components/Works';
import WhyUs from './components/WhyUs';
import Hood from './components/Hood';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Partners from './components/Partners';
function LandingPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Layout>
        <InfoSection />
        <Works />
        <WhyUs />
        <Hood />
        <Partners />
        <Feedback />
        <footer>
          <Footer />
        </footer>
      </Layout>
    </>
  );
}

export default LandingPage;
