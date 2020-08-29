import React from 'react';
import Header from './Header';
import Showcase from './Showcase';
import About from './About';
import Details from './Details'
import Footer from './Footer';



function App(){
    return(
        <div>
            <Header />
            <Showcase />
            <About head="Why choose Easybank?" ptext="We levarage Open Banking to turn your bank account into your financial hub.
            Control your finances like never before." />
            <Details />
           <Footer />
        </div>
    )
}

export default App;