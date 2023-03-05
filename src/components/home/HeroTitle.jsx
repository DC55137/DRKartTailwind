import React from 'react'
import { motion } from 'framer-motion'
import HeroTitleList from './HeroTitleList'
import SouthernCross from './SouthernCross'
import { Link } from 'react-scroll'

const HeroTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-40 w-full overflow-hidden rounded-lg border-8 border-main-100 bg-white  bg-opacity-70 md:w-140	"
    >
      <div className="px-4 py-5 sm:p-6">
        <motion.h1 className="text-center text-3xl opacity-100 md:text-6xl">
          <SouthernCross className="left-0 -z-30 w-60" opacity={0.4} />
          <strong className="text-4xl text-main-100  md:text-8xl">
            CHRIS BOARD
          </strong>
          <br /> METAL ROOFING
        </motion.h1>
        <hr className=" my-4 border-main-100" />
        <h2 className="mb-4 text-center text-2xl font-bold text-main-100 sm:text-3xl">
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Premium
          </motion.span>
          &nbsp;
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Roofing
          </motion.span>
          &nbsp;
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Solutions
          </motion.span>
        </h2>
        <HeroTitleList>10 Year Workmanship Guarantee*</HeroTitleList>
        <HeroTitleList>
          Experienced Fully Licenced Local Tradesman
        </HeroTitleList>
        <HeroTitleList>Reliable and Experienced Team</HeroTitleList>
        <HeroTitleList>Affordable and Competitive Pricing</HeroTitleList>
        <HeroTitleList>Blue Scope Steel Product Warranty* </HeroTitleList>
        <HeroTitleList>Licenced Asbestos Removalist</HeroTitleList>
        <div className="flex justify-between px-10">
          <Link
            smooth={true}
            duration={100}
            to={'contactEl'}
            className=" my-7 inline-flex cursor-pointer items-center rounded-full border border-transparent bg-main-100 px-10 py-2 text-xs font-medium uppercase text-white shadow-sm duration-150 hover:bg-main-200 focus:outline-none focus:ring-2 focus:ring-main-200 focus:ring-offset-2 sm:text-base"
          >
            Get a free quote{' '}
            <svg className="ml-4 w-6 fill-white" viewBox="0 0 229.22 115.57">
              <path d="m222.36,69.28l-76.36,44.08c-2.01,1.16-4.2,1.71-6.36,1.71-4.39,0-8.67-2.28-11.02-6.36-3.52-6.09-1.43-13.87,4.65-17.38l38.93-22.48H10.84c-5.71,0-10.34-4.63-10.34-10.34,0-2.86,1.16-5.45,3.03-7.32,1.87-1.87,4.46-3.03,7.31-3.03h162.63l-41.41-23.91c-6.09-3.51-8.17-11.3-4.66-17.38,2.36-4.08,6.64-6.37,11.03-6.37,2.16,0,4.35.55,6.35,1.71l76.36,44.09c.73.42,1.41.91,2.02,1.45,1.54,1.04,2.86,2.44,3.85,4.15,3.52,6.08,1.43,13.86-4.65,17.38Z" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroTitle
