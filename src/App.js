import React, { useState } from 'react';
import ToggleHook from './Toggle/ToggleHook';

const App = () => {
  ///////////////// GENERAL FORMULA
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <h3>{name}</h3>
      <input
        type="text"
        onChange={({ target: { value } }) => setName(value)}
        value={name}
      />
      <ToggleHook />
    </div>
  );
};

export default App;
