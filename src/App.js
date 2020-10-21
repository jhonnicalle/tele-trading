import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';
import Header from './components/Header/Header';
import Services from './components/Services/Services';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Services />
        <ContactUs />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
