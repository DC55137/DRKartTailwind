import React from 'react'
import { FaStar } from 'react-icons/fa'
import clsx from 'clsx'

const Rating = ({ stars, className }) => {
  const starElements = []
  for (let i = 0; i < stars; i++) {
    starElements.push(
      <FaStar key={i} className="inline-block text-yellow-500" />
    )
  }
  return <div className={clsx('', className)}> {starElements}</div>
}

export default Rating
