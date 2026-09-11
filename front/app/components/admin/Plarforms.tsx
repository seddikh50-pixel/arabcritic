import React from 'react'


interface typePlat {
    id : string
    name: string,
    slug: string
}

interface PropsPlat {
    platforms: typePlat[]
}
const Platforms = ({ platforms }: PropsPlat) => {
    return (
        <div>
           {platforms.map((pl)=> <h1 key={pl.id}> {pl.name}</h1>)}
        </div>
    )
}

export default Platforms
