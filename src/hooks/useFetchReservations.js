import { useState, useEffect } from 'react'
import api from '../api/api'

const useFetchReservations = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const abortController = new AbortController()

    const getData = async () => {
      try {
        const {data} = await api.get('reservations')
        setData(data)
        setError(null)
        console.log(data)
      } catch (error) {
        console.error(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
    return () => abortController.abort()
  }, [])

  return { data, error, isLoading }
}

export default useFetchReservations
