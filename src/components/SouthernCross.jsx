import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'

const SouthernCross = ({ className, opacity }) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // component is considered in view when 50% of it is in the viewport
  })

  return (
    <div className="overflow-hidden">
      <motion.svg
        className={clsx(
          className,
          'absolute hidden overflow-hidden fill-gray-400 opacity-100 md:block'
        )}
        viewBox="0 0 74.49 98.53"
        variants={{
          hidden: { opacity: 0, scale: 2, y: 100 },
          visible: { opacity: opacity, scale: 1, y: 0 },
        }}
        transition={{ duration: 1 }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        ref={ref}
      >
        <path d="m47.32,11.65l-4.65-3.18,2.81-4.88-5.39,1.65-2.07-5.24-2.07,5.24-5.38-1.65,2.81,4.88-4.65,3.18,5.57.86-.41,5.61,4.13-3.82,4.14,3.82-.41-5.61,5.57-.86Zm-28.73,31.62l-4.65-3.18,2.81-4.89-5.39,1.65-2.07-5.24-2.07,5.24-5.38-1.65,2.8,4.89-4.64,3.18,5.57.85-.41,5.62,4.13-3.82,4.14,3.82-.41-5.62,5.57-.85Zm55.9-6.25l-4.65-3.18,2.81-4.89-5.39,1.65-2.07-5.24-2.07,5.24-5.38-1.65,2.8,4.89-4.64,3.18,5.57.85-.41,5.62,4.13-3.82,4.14,3.82-.41-5.62,5.57-.85Zm-25.13,55.04l-4.65-3.18,2.81-4.89-5.39,1.65-2.07-5.24-2.07,5.24-5.38-1.65,2.8,4.89-4.64,3.18,5.57.85-.41,5.62,4.13-3.82,4.14,3.82-.41-5.62,5.57-.85Zm6.54-39.54l-3.22-.47-1.44-2.91-1.44,2.91-3.22.47,2.33,2.27-.55,3.21,2.88-1.52,2.88,1.52-.55-3.21,2.33-2.27Z" />
      </motion.svg>
    </div>
  )
}

export default SouthernCross
