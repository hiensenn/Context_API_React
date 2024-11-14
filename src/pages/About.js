import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext} from "../hooks/useTitleColorContext"


const About = () => {
  const { counter, setCounter } = useCounterContext();

  // 5 - context mais complexo
  const {color} = useTitleColorContext()
  
  // 6 - alterando context complexo


  return (
    <div>
      <h1 style={{color : color}}>About</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter and see it changing below
      </button>
      {/* <button onClick={() => setCounter(0)} >clean</button> */}
      <p>Valor do contador: {counter}</p>

      
    </div>
  );
};

export default About;
