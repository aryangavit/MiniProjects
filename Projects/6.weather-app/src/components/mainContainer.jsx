import React from 'react'
import UpperContainer from './upperContainer'
import MiddleContainer from './middleContainer'
import LowerContainer from './lowerContainer'

const mainContainer = () => {
    return (
        <div className='border border-red-500  w-[400px] text-white'>
            <UpperContainer />
            <MiddleContainer />
            <LowerContainer />
        </div>
    )
}

export default mainContainer