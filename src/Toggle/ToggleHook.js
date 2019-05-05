import React, { useState } from 'react';

const ToggleHook = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>hello</button>
      {isToggled && <h2>hello</h2>}
    </div>
  );
};

export default ToggleHook;
