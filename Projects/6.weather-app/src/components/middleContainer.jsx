import React from 'react'
import CoordCard from './coordCard'
const middleContainer = () => {
    return (
        <div className='grid grid-cols-2 rounded-lg bg-white p-4 gap-[5px]'>
            {Array(4).fill(true).map(() => (
                <CoordCard />
            ))}
        </div>
    )
}

export default middleContainer