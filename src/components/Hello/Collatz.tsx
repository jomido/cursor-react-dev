import { useState } from 'react';

import './Collatz.scss';

interface Props {
  greeting: string;
  num?: number;
  // -- 
  onClick?: () => void;
}

export const Collatz = ({ greeting, num = 2, onClick }: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
    onClick?.();
  };

  return (
    <div className={`collatz-container ${isAnimating ? 'animate' : ''}`}>
      <h2>{greeting}</h2>
      <button onClick={handleClick}>Collatz {num}</button>
    </div>
  );
};
