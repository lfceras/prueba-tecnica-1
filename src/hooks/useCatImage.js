import { useEffect, useState } from 'react'
const CATS_URL = 'https://cataas.com/cat/says'
export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState('Aqui va algo')

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    setImageUrl(`${CATS_URL}/${firstWord}`)
  }, [fact])

  return {
    fact,
    imageUrl,
    setImageUrl
  }
}
