import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter and see it changing below
      </button>
      {/* <button onClick={() => setCounter(0)} >clean</button> */}
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;
