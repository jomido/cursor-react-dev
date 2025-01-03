
import './Collatz.scss'

interface Props {
  greeting: string
  num?: number
  // --
  onClick?: () => void
}

export const Collatz = ({ greeting, num = 2, onClick }: Props) => {
  
  return (
    <div className={`collatz-container ${num === 1 ? 'done' : ''}`}>
      <h2>{greeting}</h2>
      <button onClick={() => onClick?.()}>Collatz {num}</button>
    </div>
  )
}
