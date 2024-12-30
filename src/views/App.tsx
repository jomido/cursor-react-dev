import { trpc } from '../utils/trpc';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(15);
  const collatzQuery = trpc.collatz.useQuery(number, {
    enabled: false, // Don't run automatically
  });

  const handleClick = () => {
    collatzQuery.refetch().then((result) => {
      if (result.data) {
        setNumber(result.data);
      }
    });
  };

  return (
    <div>
      <button onClick={handleClick}>
        {number}
      </button>
    </div>
  );
}

export { App };
