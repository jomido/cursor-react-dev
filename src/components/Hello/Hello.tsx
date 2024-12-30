import { useState } from 'react';
import './Hello.scss';

interface HelloProps {
  greeting: string;
  count?: number;
}

export const Hello = ({ greeting, count = 2 }: HelloProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className={`hello-container ${isAnimating ? 'animate' : ''}`}>
      <h2>{greeting}</h2>
      <button onClick={handleClick}>Hello {count}</button>
    </div>
  );
};
