'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSummit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // setSearch(search)
        router.push(`/search/${search}/`)
    }

    return (
        <form className="w-50 flex flex-row justify-center gap-2" onSubmit={handleSummit}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white p-2 lg:w-80 w-50 text-sky-800 text-xl rounded-xl"
            />
            <div className="flex justify-center">
                <button className="p-2 text-xl bg-slate-300 rounded-xl">Search</button>
            </div>
        </form>
    )
}