import React, { useRef, createContext, useMemo } from 'react';
import ToggleHook from './Toggle/ToggleHook';
import { useTitleInput } from './hooks/useTitleInput';
// import Counter from './Counter/Counter';

export const UserContext = createContext();

const App = () => {
  ///////////////// GENERAL FORMULA
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const reverseWord = word => {
    console.log('function called');
    return word
      .split('')
      .reverse()
      .join('');
  };

  const title = 'Level Up Dishes';
  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <UserContext.Provider value={{ user: false }}>
      <div className="main-wrapper" ref={ref}>
        <h1
          onClick={() =>
            console.log(ref.current.classList.add('new-fake-class'))
          }>
          {TitleReversed}
        </h1>
        <ToggleHook />
        {/* <Counter /> */}
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
