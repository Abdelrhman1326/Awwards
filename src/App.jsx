import React from 'react'
import './App.css'

import Hero from './components/Hero';
import About from './components/About';
import NavBar from "./components/NavBar.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";
import StoryExtend from "./components/StoryExtend.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <NavBar />
            <Hero />
            <About />
            <Features />
            <Story />
            <StoryExtend />
            <Footer />
        </main>
    )
}
export default App;
