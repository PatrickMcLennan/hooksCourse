//////////  VIDEO #13

import React, {
    useRef,
    createContext,
    useMemo,
    useEffect,
    useState
} from 'react';
import ToggleHook from './Toggle/ToggleHook';
import { useTitleInput } from './hooks/useTitleInput';
import Counter from './Counter/Counter';

export const UserContext = createContext();

const App = () => {
    ///////////////// GENERAL FORMULA
    // const [value, setValue] = useState(initialState);
    const [name, setName] = useTitleInput('');
    const ref = useRef();

    const [dishes, setDishes] = useState([]);

    const reverseWord = word => {
        console.log('function called');
        return word
            .split('')
            .reverse()
            .join('');
    };

    const fetchUsers = async () => {
        const res = await fetch(
            'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
        );
        const dishes = await res.json();
        setDishes(dishes);
    };

    useEffect(() => {
        fetchUsers();
    }, [name]);

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
                <Counter />
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        type="text"
                        onChange={({ target: { value } }) => setName(value)}
                        value={name}
                    />
                    <button>Submit</button>
                </form>

                {dishes.map(dish => (
                    <article className="dish-card dish-card--withImage">
                        <h3>{dish.name}</h3>
                        <p>{dish.desc}</p>
                        <div className="ingredients">
                            {dish.ingredients.map(ingredient => (
                                <span>{ingredient}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </UserContext.Provider>
    );
};

export default App;
