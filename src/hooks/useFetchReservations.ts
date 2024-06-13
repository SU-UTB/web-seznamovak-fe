import { useState, useEffect } from 'react'
import api from '../api/api'

export interface ReservationData {
  firstBatchCapacity: number
  secondBatchCapacity: number
}

const useFetchReservations = () => {
  const [data, setData] = useState<ReservationData | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const abortController = new AbortController()

    const getData = async () => {
      try {
        const response = await api.get('reservations', {
          signal: abortController.signal,
        })
        setData(response.data)
        setError(null)
      } catch (error) {
        if (error instanceof Error) {
          setError(error)
        } else {
          setError(new Error('An unknown error occurred'))
        }
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
