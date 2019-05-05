import React from 'react';
import ToggleHook from './Toggle/ToggleHook';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
  ///////////////// GENERAL FORMULA
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput('');

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
