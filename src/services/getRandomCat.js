const FACT_URL = 'https://catfact.ninja/fact'
export const getRandomCat = async () => {
  const response = await fetch(FACT_URL)
  const data = await response.json()
  const dats = data?.fact
  return dats
}
