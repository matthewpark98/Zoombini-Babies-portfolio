import { useState } from 'react'
import { getGreeting } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import Zoombini from './Zoombini.tsx'

const Home = () => {
  const [count, setCount] = useState(0)

  const {
    data: greeting,
    isError,
    isPending,
  } = useQuery({ queryKey: ['greeting', count], queryFn: getGreeting })

  const zoombiniList = [
    {id : 100,
hair : "ponytail",
eyes : "wide",
nose : "red",
feet : "shoes"},
{id : 2,
hair : "cap",
eyes : "glasses",
nose : "orange",
feet : "spring"}
]

  if (isPending) return <p>Loading...</p>

  return (
    <>
      {count}
      <h1 className="text-3xl font-bold underline">{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button>

      {
        zoombiniList.map(zoombini => (
          <Zoombini key={zoombini.id} {...zoombini} />
        ))

      }
    </>
  )
}

export default Home
