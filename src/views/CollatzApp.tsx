import { useState, useEffect } from 'react'

import { Collatz } from '../components/Hello/Collatz'
import { trpc } from '../utils/trpc'

import './CollatzApp.scss'

function App() {
  const [num, setNumber] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    const nParam = params.get('n')
    return nParam ? parseInt(nParam, 10) : 15
  })

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
      }
    })
  }

  return (
    <div className="collatz-app">
      <Collatz num={num} greeting="Collatz" onClick={handleClick} />
    </div>
  )
}

export { App }
