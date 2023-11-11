import { useEffect, useState } from 'react'
import { getRandomCat } from '../services/getRandomCat'

export const useCatFact = () => {
  const [fact, setFact] = useState(null)

  const refreshRamdonFact = () => {
    getRandomCat().then((newFact) => setFact(newFact))
  }

  useEffect(refreshRamdonFact, [])

  return {
    fact,
    refreshRamdonFact
  }
}
