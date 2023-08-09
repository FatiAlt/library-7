import {  Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Card from './components/Card';
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";


function App() {

  return (
    <BrowserRouter>
        <div className="App">
            <h1>LIBRAIRIE DE VENTE EN LIGNE SPECIALISÉE DANS LE CINÉMA</h1>

            <Routes>
                    <Route path="home"element={<HomePage  />} /><Route/>
                    <Route path="navbar" element={<NavBar />}/><Route/>
                    <Route path="card" element={<Card />}/><Route/>
                    <Route path="footer" element={<Footer />}/><Route/>

            </Routes>
         </div>

    </BrowserRouter>
)};


export default App;
