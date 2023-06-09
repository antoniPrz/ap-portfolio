import { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';
import { MyProjects } from './components/MyProjects/MyProjects';
import './App.css';

export function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <About />
        <MyProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
