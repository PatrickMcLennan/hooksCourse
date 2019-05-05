import React, { useState, useEffect } from 'react';
import ToggleHook from './Toggle/ToggleHook';

const App = () => {
  ///////////////// GENERAL FORMULA
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');
  useEffect(() => {
    document.title = name;
  });

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <ToggleHook />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}>
        <input
          type="text"
          onChange={({ target: { value } }) => setName(value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
