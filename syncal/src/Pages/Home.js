import React from 'react';
import Homebox from './components/homebox';
import Navegationbar from './components/navbar';
import './css/homebox.css';
function Home() {
    return (
        <div>
            <Navegationbar></Navegationbar>
            <Homebox></Homebox>
        </div>
    );
}

export default Home;