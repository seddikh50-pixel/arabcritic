
import React from 'react'
import DeleteGenreButton from './DeleteGenreButton'
import Link from 'next/link'

interface GenreType {
    id: string
    name: string
    slug: string
}

interface GenresProps {
    genres: GenreType[]
}

const AdminGenres = ({ genres }: GenresProps) => {
    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        التصنيفات
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        إدارة تصنيفات المحتوى
                    </p>
                </div>

                <Link href={"/admin/genres/add"} 
                    className="rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white
                    transition hover:bg-gray-800"
                >
                    + إضافة تصنيف
                </Link >
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-right">
                    <thead className="border-b border-gray-200 bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                #
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                اسم التصنيف
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Slug
                            </th>

                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                                الإجراءات
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {genres.map((gen, index) => (
                            <tr
                                key={gen.id}
                                className="transition hover:bg-gray-50"
                            >
                                {/* Number */}
                                <td className="px-6 py-4 text-sm text-gray-400">
                                    {index + 1}
                                </td>

                                {/* Name */}
                                <td className="px-6 py-4">
                                    <div className="font-medium text-gray-900">
                                        {gen.name}
                                    </div>
                                </td>

                                {/* Slug */}
                                <td className="px-6 py-4">
                                    <span className="rounded-md bg-gray-100 px-2.5 py-1 font-mono text-xs text-gray-600">
                                        {gen.slug}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2">

                                        {/* Edit */}
                                        <button
                                            className="rounded-lg border border-gray-200 px-3 py-2 text-sm
                                            font-medium text-gray-700 transition
                                            hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                                        >
                                            تعديل
                                        </button>

                                        {/* Delete */}
                                                <DeleteGenreButton genreId={gen.id} />

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Empty state */}
                {genres.length === 0 && (
                    <div className="py-12 text-center">
                        <p className="text-sm text-gray-500">
                            لا توجد تصنيفات حالياً
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AdminGenres

