import './Hamming.scss'

interface Props {
  greeting: string
}

export const Hamming = ({ greeting }: Props) => {
  return (
    <div className="hamming-container">
      <h2>{greeting}</h2>     
    </div>
  )
} 