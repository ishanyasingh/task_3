import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  const colors = [
    '#FF5733',
    '#33FF57',
    '#5733FF',
    '#33FFFF',
    '#FFFF33',
    '#FF3399',
    '#99FF33',
    '#3366FF',
  ];

  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const handleChangeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Picker</h1>
      </header>
      <main style={{ backgroundColor }}>
        <ColorPicker colors={colors} onChangeColor={handleChangeColor}/>
      </main>
    </div>
  );
}

export default App;