import { useState, useEffect } from 'react'
import { Hamming } from '../components/Hamming/Hamming'

import './HammingApp.scss'

function HammingApp() {
  return (
    <div className="hamming-app">
      <Hamming
        greeting="hamming.ai"
      />
    </div>
  )
}

export { HammingApp } 