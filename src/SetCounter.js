import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { set } from './action';

const SetCounter = ({ parentCount }) => {
  const [currentCount, setCurrentCount] = useState(parentCount);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentCount(parentCount);
  }, [parentCount]);

  const submitNewCountValue = (event) => {
    event.preventDefault();
    dispatch(set(currentCount));
  };

  return (
    <section className="controls">
      <form onSubmit={submitNewCountValue}>
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={currentCount}
          onChange={(e) => setCurrentCount(e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default SetCounter;
