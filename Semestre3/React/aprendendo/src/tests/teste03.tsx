import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function DataList(props) {
  return (
    <h2>code goes here</h2>
  );
}

const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<DataList data={ data } />);