import SetCounter from './SetCounter';
import { useCounter } from './use-counter';

export const Counter = () => {
  const incident = 'Incident';

  const { count, increment, decrement, set } = useCounter();

  const setCounter = (value) => {
    set(value);
  };

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => setCounter(10)}>Reset</button>
        <button onClick={() => decrement()}>Decrement</button>
      </section>
      <SetCounter parentCount={count} />
    </main>
  );
};

export default Counter;
