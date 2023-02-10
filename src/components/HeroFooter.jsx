import React from 'react'
import { motion } from 'framer-motion'

const HeroFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="bottom-0 left-0 -z-10 hidden w-screen overflow-hidden bg-white bg-opacity-50 shadow md:fixed md:block"
    >
      <motion.h4 className=" text-center text-xs font-bold md:text-sm">
        BRISBANE | GOLD COAST | SUNSHINE COAST | IPSWICH | NORTHERN NSW
      </motion.h4>
    </motion.div>
  )
}

export default HeroFooter
