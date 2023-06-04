import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const abortController = new AbortController()

    const getData = async () => {
      try {
        const data = await fetch(url)
        setData(data)
        setError(null)
      } catch (error) {
        console.log('Fetch aborted')
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
    return () => abortController.abort()
  }, [url])
  
  return { data, error, isLoading }
}

export default useFetch