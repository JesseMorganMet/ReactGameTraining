import React, { useState } from 'react';
import './style.scss';
import Clicker from './AppContent/Clicker';
import Header from './UI/Header';
import Footer from './UI/Footer';
import TitleMenu from './AppContent/TitleMenu';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  let [title, setTitle] = useState('Subtle on brand CHEMET title');

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  function changeTitle(newTitle) {
    console.log('something');
    setTitle((title = newTitle));
  }

  return (
    <>
      <Header toggle={toggle} title={title} />
      {isOpen && (
        <TitleMenu toggle={toggle} changeTitle={changeTitle} title={title} />
      )}
      <main>
        <Clicker />
      </main>
      <Footer />
    </>
  );
}
