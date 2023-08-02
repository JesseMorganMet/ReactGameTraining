import React, { useState } from 'react';
import Header from './UI/Header';
import Clicker from './AppContent/Clicker';
import TitleMenu from './AppContent/TitleMenu';
import Footer from './UI/Footer';
import './style.scss';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [statsIsOpen, setStatsIsOpen] = useState(true);
  const [shopIsOpen, setShopIsOpen] = useState(true);
  const [clickSave, setClickSave] = useState(true);
  const [loading, setLoading] = useState(true);
  let [title, setTitle] = useState('Subtle on brand CHEMET title');

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  function changeTitle(newTitle) {
    setTitle((title = newTitle));
  }

  function statsToggle() {
    setStatsIsOpen((statsIsOpen) => !statsIsOpen);
  }

  function shopToggle() {
    setShopIsOpen((shopIsOpen) => !shopIsOpen);
  }

  function saveClicked() {
    setClickSave((clickSave) => !clickSave);
  }
  function saveLoading() {
    setLoading((loading) => !loading);
  }

  return (
    <>
      <Header
        toggle={toggle}
        title={title}
        statsToggle={statsToggle}
        shopToggle={shopToggle}
        saveClicked={saveClicked}
        saveLoading={saveLoading}
      />
      {isOpen && (
        <TitleMenu toggle={toggle} changeTitle={changeTitle} title={title} />
      )}
      <main>
        <Clicker
          statsIsOpen={statsIsOpen}
          shopIsOpen={shopIsOpen}
          saveClicked={saveClicked}
          loading={loading}
        />
      </main>
      <Footer />
    </>
  );
}
