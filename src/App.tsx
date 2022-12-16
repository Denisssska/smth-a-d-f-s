import React from 'react';
import Header from "./components/header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
    return (
        <div style={{height:"100vh",margin:"0 5%",backgroundColor:"lightcoral"}}>

            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
