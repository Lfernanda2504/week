import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions';




const App = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>dispatch(actions.increment())}>Increment</button>
            <button onClick={()=>dispatch(actions.decrement())}>Decrement</button>
            <button onClick={()=>dispatch(actions.reset())}>Reset</button>
        </div>
    );
};

export default App;
