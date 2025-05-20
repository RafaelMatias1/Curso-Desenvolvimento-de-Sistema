import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const languages = ['JavaScript', 'Python'];

function App() {
  // implement Context here so can be used in child components
  return (
    <MainSection />
  );
}

function MainSection() {
  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: null</p>
      <button id="changeFavorite">toggle language</button>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);