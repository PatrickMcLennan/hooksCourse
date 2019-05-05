import React, { useRef, createContext } from 'react';
import ToggleHook from './Toggle/ToggleHook';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {
  ///////////////// GENERAL FORMULA
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  return (
    <UserContext.Provider value={{ user: false }}>
      <div className="main-wrapper" ref={ref}>
        <h1
          onClick={() =>
            console.log(ref.current.classList.add('new-fake-class'))
          }>
          Level Up Dishes
        </h1>
        <ToggleHook />
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            onChange={({ target: { value } }) => setName(value)}
            value={name}
          />
          <button>Submit</button>
        </form>
      </div>
    </UserContext.Provider>
  );
};

export default App;
