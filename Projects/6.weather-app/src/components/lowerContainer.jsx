import React from 'react'
import CoordCard from './coordCard'

const lowerContainer = () => {
    return (
        <div className="border border-green-500">
            <div className='border text-3xl text-center py-3 rounded-xl font-black my-5 '>haze</div>
            <div className="flex rounded-lg justify-around py-4 border bg-white">
                <CoordCard />
                <CoordCard />
                <CoordCard />
            </div>
        </div>
    )
}

export default lowerContainer