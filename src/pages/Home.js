// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
// 4 - refatorando hook
import { useCounterContext } from "../hooks/useCounterContext";
//5 - Context complexo
import { useTitleColorContext} from "../hooks/useTitleColorContext"

const Home = () => {
  // const {counter, setCounter} = useContext(CounterContext);
  const {counter, setCounter} =  useCounterContext()

  // 5 - context mais complexo
  const {color, dispatch} = useTitleColorContext()
  
  // 6 - alterando context complexo
  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <button onClick={() => setCounter(counter + 1)}>Add value to counter and see it changing below</button>
      {/* <button onClick={() => setCounter(0)} >clean</button> */}
      <p>Valor do contador: {counter}</p>
      {/* alterando contexto complexo*/}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("GREEN")}>Verde</button>
       
      </div>
    </div>
  );
};

export default Home;
