// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
// 4 - refatorando hook
import { useCounterContext } from "../hooks/useCounterContext";


const Home = () => {
  // const {counter, setCounter} = useContext(CounterContext);
  const {counter, setCounter} =  useCounterContext()

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setCounter(counter + 1)}>Add value to counter and see it changing below</button>
      {/* <button onClick={() => setCounter(0)} >clean</button> */}
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Home;
