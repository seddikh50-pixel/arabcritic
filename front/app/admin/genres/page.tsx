import React from 'react'
import { getGenres } from '../services/service.genre'
import AdminGenres from '@/app/components/admin/AdminGenres';

const page = async () => {
    const genres = await getGenres()
    return (
        <div>
            <AdminGenres genres={genres.Genres} />
        </div>
    )
}

export default page
