import { useState, useEffect } from 'react'
import { TeamService } from 'utility'

export const GetPlaces = (id) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = async () => {
        try {
            setLoading(true)
            const result = await TeamService.getEventsForMember(id);
            setData(result?.Result)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        data, error, loading,
    }
}