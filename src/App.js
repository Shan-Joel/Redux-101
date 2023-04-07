import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
   const counter = useSelector((state) => state.counter);
   const isLogged = useSelector((state) => state.isLogged);

   const dispatch = useDispatch();

   return (
      <div className="App">
         <h1>Counter is: {counter}</h1>
         <button onClick={() => dispatch(increment())}>+</button>
         <button onClick={() => dispatch(decrement())}>-</button>

         <p>{isLogged ? 'you are logged in' : 'please log in first'}</p>
      </div>
   );
}

export default App;
