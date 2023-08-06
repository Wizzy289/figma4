import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navabr';
import Welcome from './Components/Welcome';
import Intro from './Components/Intro';
import Social from './Components/Social';
import Cta from './Components/Cta';
import Rect from './Components/Rect';
import Footer from './Components/Footer';







function App() {
  return (
    <>
    <React.Fragment>
    <Navbar />
    <Header />
    <Welcome />
    <Intro />
    <Social />
    <Cta />
    <Rect />
    <Footer />
   
    </React.Fragment>   
    </>   
  );
}

export default App;
