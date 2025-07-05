
import './App.css'
import './Componets/Footer.css'

import React from 'react';
import ContactCard from './Componets/ContactCard.jsx'
import Loader from './Componets/Loader.jsx';
import { useEffect , useState } from "react";
import ScrollToTop from './Componets/ScrollToTop.jsx';
import Footer from './Componets/Footer.jsx';






function App() {

   const LOADER = Loader(ContactCard);
  const [isloading, setISloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setISloading(false);
    }, 1000);
  });

  return (
    <div>

      {isloading  ? (
        <LOADER isloading = {isloading}/>
      ):(
        <>

          <ContactCard/>
          <Footer/>
        </>
      )}
        
   
  
    
  
   <ScrollToTop/>

 
  
    </div>
  );
}

export default App;

