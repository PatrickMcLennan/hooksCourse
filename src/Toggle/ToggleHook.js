import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

const ToggleHook = () => {
  const [isToggled, setToggle] = useState(false);
  const userInfo = useContext(UserContext);
  console.log(`userInfo: ${userInfo}`);
  if (!userInfo.user) return null;
  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>hello</button>
      {isToggled && <h2>hello</h2>}
    </div>
  );
};

export default ToggleHook;
