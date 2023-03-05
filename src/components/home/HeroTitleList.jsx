import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const HeroTitleList = ({ children }) => {
  return (
    <div className="sm:ml-5">
      <AiFillCheckCircle className="inline-block h-6 w-6 fill-main-200 md:h-8 md:w-8" />
      <h3 className="inline-block text-sm sm:ml-6 sm:text-base md:text-lg">
        {children}
      </h3>
    </div>
  )
}

export default HeroTitleList
