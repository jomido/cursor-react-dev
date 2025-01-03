import { useState, useEffect } from 'react'

import { Collatz } from '../components/Collatz/Collatz'
import { trpc } from '@/utils/trpc'

import './CollatzApp.scss'

function CollatzApp() {
  const [initialNum] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    const nParam = params.get('n')
    return nParam ? parseInt(nParam, 10) : 15
  })

  const [num, setNumber] = useState(initialNum)

  const [clickCount, setClickCount] = useState(0)
  const [numHistory, setNumHistory] = useState<number[]>([])

  useEffect(() => {
    // Initialize history with starting number
    setNumHistory([num])
  }, [num]) // Empty dependency array - runs once on mount

  useEffect(() => {
    // Update URL when num changes
    const newUrl = new URL(window.location.href)
    newUrl.searchParams.set('n', num.toString())
    window.history.replaceState({}, '', newUrl)
  }, [num])

  const collatzQuery = trpc.collatz.useQuery(num, {
    enabled: false, // Don't run automatically
  })

  const handleClick = () => {
    collatzQuery.refetch().then((result) => {
      if (result.data) {
        setNumber(result.data)
        setClickCount((prev) => prev + 1)
        setNumHistory((prev) => [...prev, result.data])
      }
    })
  }

  return (
    <div className="collatz-app">
      <Collatz num={num} greeting="Collatz" onClick={handleClick} />
      <div className="click-counter">{clickCount}</div>
      <div className="initial-number">initial: {initialNum}</div>
    </div>
  )
}

export { CollatzApp }
