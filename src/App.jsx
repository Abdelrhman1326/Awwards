import React from 'react'
import './App.css'

import Hero from './components/Hero';
import About from './components/About';
import NavBar from "./components/NavBar.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <NavBar />
            <Hero />
            <About />
            <section className="min-w-screen min-h-screen bg-black" />
        </main>
    )
}
export default App;
