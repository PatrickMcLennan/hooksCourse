import React, { useState, useContext } from 'react';
import { UserContext } from '../App';
import DishForm from '../DishForm';

const ToggleHook = () => {
    const [isToggled, setToggle] = useState(false);
    const userInfo = useContext(UserContext);
    if (userInfo.user) return null;
    return (
        <div>
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
            {isToggled && <DishForm />}
        </div>
    );
};

export default ToggleHook;
