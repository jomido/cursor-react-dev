import { trpc } from '../utils/trpc';
import { useState } from 'react';
import { Collatz } from '../components/Hello/Collatz';

function App() {
  const [num, setNumber] = useState(15);
  
  const collatzQuery = trpc.collatz.useQuery(num, {
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
    <Collatz num={num} greeting="Collatz" onClick={handleClick} />
  );
}

export { App };
