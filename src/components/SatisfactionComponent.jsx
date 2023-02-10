import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Satisfaction from '@/images/Satisfaction.png'

const SatisfactionComponent = () => {
  const radius = 10
  const points = []
  for (let i = 0; i <= 1; i += 0.01) {
    points.push({
      x: radius * Math.cos(2 * Math.PI * i),
      y: radius * Math.sin(2 * Math.PI * i),
    })
  }
  return (
    <motion.div
      className="absolute top-36 right-10 hidden h-80 w-80 opacity-90 lg:block"
      animate={{
        x: points.map((point) => point.x),
        y: points.map((point) => point.y),
      }}
      transition={{ duration: 5, repeat: Infinity }}
    >
      <Image
        priority="true"
        src={Satisfaction}
        alt="Satisfaction Guarantee"
        className="block"
      />
    </motion.div>
  )
}

export default SatisfactionComponent
