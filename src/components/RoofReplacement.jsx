import { useState, useEffect } from 'react'
import { Element } from 'react-scroll'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Container } from '@/components/Container'
import MetalBeforeAfter from '@/images/screenshots/MetalBefore&After.png'
import SouthernCross from './SouthernCross'
import DecramasticBeforeAfter from '@/images/screenshots/DecramasticBefore&After.png'
import AsbestosBeforeAfter from '@/images/screenshots/AsbestosBefore&After.png'
import TileBeforeAfter from '@/images/screenshots/TileBefore&After.png'

const features = [
  {
    name: 'Asbestos to Metal',
    summary: "Don't trust anyone else",
    description:
      'Asbestos roof replacement is a delicate process that requires specialized training and equipment. Our team is fully trained and equipped to handle asbestos roof removal safely and efficiently, ensuring that your property is protected from any harmful materials.',
    image: AsbestosBeforeAfter,
    icon: function AsbestosIcon({ isActive }) {
      return (
        <svg viewBox="0 0 120.64 130.53">
          <path
            stroke={isActive ? '#04549a' : 'black'}
            fill="none"
            strokeWidth={isActive ? '4' : '2'}
            d="m.83,9.08c1.85,1.65,9.71,8.32,21.09,7.91,2.35-.08,8.6-.38,14.34-4.39,4.78-3.33,4.31-5.83,9.06-8.79C50.79.39,56.58.47,59.82.51c2.19.02,9.72.2,16.81,4.94,4.87,3.26,4.79,5.51,9.23,8.24,5.96,3.67,12.24,3.38,14.5,3.3,10.4-.38,17.39-6.34,19.44-8.24.11,37.9.22,75.8.33,113.7-2.65,2.26-9.73,7.65-19.44,7.58-8.18-.06-14.57-3.95-16.15-4.94-5.55-3.48-5.99-6.22-12.19-9.23-2.02-.98-5.76-2.75-10.88-2.97-7.31-.31-12.76,2.75-14.83,3.95-5.37,3.11-4.82,5.05-9.89,8.24-1.38.87-7.56,4.59-15.82,4.61-10.79.03-18.29-6.29-20.43-8.24.11-37.46.22-74.92.33-112.38Zm-.33,103.63c2.14,1.95,9.64,8.27,20.43,8.24,8.26-.02,14.45-3.75,15.82-4.61,5.07-3.2,4.52-5.13,9.89-8.24,2.07-1.2,7.52-4.27,14.83-3.96,5.11.22,8.86,1.99,10.88,2.97,6.2,3,6.65,5.75,12.19,9.23,1.58.99,7.97,4.88,16.15,4.94,9.72.07,16.8-5.32,19.45-7.58M40.28,8.74v43.53m0,8.9v8.24m0,22.41v21.74M86.88,28.87v5.6m0,13.18v4.61m0,4.61v60.8"
          />
        </svg>
      )
    },
  },
  {
    name: 'Decramastic to Metal',
    summary:
      'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    image: DecramasticBeforeAfter,
    icon: function DecramasticIcon({ isActive }) {
      return (
        <svg viewBox="0 0 69.25 48.94" className="mt-6">
          <path
            stroke={isActive ? '#04549a' : 'black'}
            fill="none"
            strokeWidth={isActive ? '4' : '2'}
            d="m19.45,32.13c.55-.33,1.55-1.09,3.68-2.96,3.8-3.33,3.7-3.63,4.94-4.28,2.76-1.46,5.51-1.37,7.25-1.32,1.65.05,4.27.14,6.92,1.65,1.99,1.14,1.62,1.72,5.6,4.94.91.74,1.65,1.29,2.29,1.69m0,0c.99.61,1.76.88,2.65.95.49.04,1.94.16,3.3-.66,1.69-1.02,1.21-2.29,2.97-3.95.79-.75,1.96-1.27,4.28-2.31.34-.15.67-.29.98-.42m0,0c.92-.39,1.72-.68,2.32-.9-2.53-7.47-5.05-14.94-7.58-22.41-2.04,2.02-3.93,3.4-5.27,4.28-2.64,1.74-3.99,2.6-5.6,2.31-.85-.16-1.9-1.09-3.95-2.97-2.92-2.65-2.77-2.89-3.95-3.63-2.66-1.65-5.32-1.66-5.93-1.65-.96.02-2.99.08-4.94,1.32-1.81,1.15-1.55,2.04-3.63,3.95-.73.68-2.7,1.4-4.94,1.53-1.99.11-4.2-.24-5.94-1.53-1.95-1.44-3.52-2.71-4.61-3.63L2.69,25.22c1.03-.06,2.6,0,4.28.66,1.92.76,2.4,1.66,4.61,3.3,2.71,2,4.92,3.64,7.21,3.22.15-.03.31-.06.65-.27m30.14-.64l-1.41-22.75m-29.37,23.66l2.03-25.1M5.6,25.46l.17-.53m-.17.53l-.22.67m0,0c-1.56,4.74-3.12,9.49-4.68,14.23,1.09-.06,2.76-.01,4.55.7,2.04.81,2.55,1.76,4.9,3.5,2.88,2.13,5.22,3.86,7.66,3.42.41-.07.95-.23,4.6-3.42,4.04-3.54,3.93-3.85,5.25-4.55,2.94-1.55,5.85-1.46,7.7-1.4,1.76.06,4.54.15,7.35,1.75,2.12,1.21,1.72,1.83,5.95,5.25,2.46,1.99,3.69,2.67,5.25,2.8.52.04,2.06.17,3.5-.7,1.79-1.09,1.29-2.43,3.15-4.2.84-.8,2.08-1.35,4.55-2.45,1.43-.64,2.65-1.1,3.5-1.4-1.57-4.66-3.15-9.31-4.72-13.97m-13.38,21.33l-.97-15.53m-31.74,16.49l1.34-16.52"
          />
        </svg>
      )
    },
  },
  {
    name: 'Tile to Metal',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    image: TileBeforeAfter,
    icon: function TileIcon({ isActive }) {
      return (
        <svg viewBox="0 0 174.15 72.13" className="mt-12">
          <path
            stroke={isActive ? '#04549a' : 'black'}
            fill="none"
            strokeWidth={isActive ? '4' : '2'}
            d="m.5,50.91c.49-.5.99-1,1.48-1.5C18.12,33.11,34.24,16.81,50.37.52c1.87-.06,6.57.04,11.41,2.98,5.53,3.37,7.76,8.34,8.43,10.01,3.45-.06,6.91-.12,10.36-.18,1.48-2.16,4.14-5.47,8.43-8.25,2.76-1.79,7.48-4.85,14.05-4.57,1.3.06,9.29.53,14.57,7.02,1.93,2.37,2.86,4.76,3.34,6.32h9.83c1.51-2.12,4.15-5.29,8.25-8.08,3.14-2.13,7.46-5.06,13.7-5.09,7.52-.03,12.63,4.18,13.7,5.09,6.01,5.17,7.01,11.94,7.2,13.52l-49.16,49.69h-8.47c-.36-1.27-1.21-3.62-3.29-5.79-.82-.86-4.28-4.24-9.66-4.21-1.07,0-5.77.03-9.13,3.86-3.02,3.44-2.86,7.55-2.81,8.43h-25.11c-.25-1.49-.9-4.09-2.8-6.67-.92-1.25-4.26-5.77-10.01-5.97-5.55-.2-9.12,3.77-9.66,4.39-3.04,3.5-3.16,7.53-3.16,8.6H14.55c.07-.97.22-4.58-2.28-7.9-2.27-3.01-5.32-3.93-6.32-4.21-2.22-.64-4.14-.51-5.27-.35-.06-2.75-.12-5.5-.18-8.25Zm123.96,18.08c-.37-1.84-2.11-9.5-9.13-14.22-.78-.53-4.45-2.91-9.83-3.51-1.62-.18-5.04-.52-9.13.88-4.48,1.54-7.14,4.27-7.9,5.09-2.19,2.37-3.3,4.81-3.86,6.32h-13.17c-.68-1.74-2.24-5.06-5.62-7.9-4.71-3.97-9.88-4.43-11.76-4.57-1.94-.14-7.28-.46-12.29,2.81-.51.33-3.16,2.1-5.44,5.44-1.14,1.67-1.84,3.23-2.28,4.39h-13.17c-.28-.77-.73-1.82-1.4-2.98-.46-.78-1.88-3.09-4.57-5.27-2.08-1.68-3.94-2.51-5.44-3.16-1.98-.86-5.01-1.92-8.95-2.32M80.57,13.34l-41.25,42.51M130.78,13.86l-40.59,41.75"
          />
        </svg>
      )
    },
  },
  {
    name: 'Metal to Metal',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    image: MetalBeforeAfter,
    icon: function TinIcon({ isActive }) {
      return (
        <svg viewBox="0 0 78.42 53.07" className="mt-6">
          <path
            stroke={isActive ? '#04549a' : 'black'}
            fill="none"
            strokeWidth={isActive ? '4' : '2'}
            d="m19.66.5l2.19,5.12h10.23l2-5.12h9.88l3.65,4.57h9.5l2.19-4.57h5.87l12.58,44.39-11.69-.18-4.2,7.86h-10.78l-4.2-8.22h-15.89l-3.47,8.22h-11.55l-3.8-7.86H.67L13.45.5h6.21Zm0,0l-7.49,44.21M21.86,5.62l-5.88,46.95M32.09,5.62l-4.57,46.95M34.08.5l-3.09,43.85M43.96.5l2.92,43.85m.73-39.28l3.47,47.5m6.03-47.5l4.75,47.5m4.2-7.86L59.31.5"
          />
        </svg>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  const [animated, setAnimated] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.5, // component is considered in view when 50% of it is in the viewport
  })

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true)
    }
  }, [inView, animated])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 2 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 1 }}
      initial="hidden"
      animate={animated ? 'visible' : ''}
      onAnimationComplete={() => setAnimated(true)}
      className={clsx(
        className,
        !isActive && ' opacity-75 hover:bg-slate-300 hover:opacity-100',
        'w-60 rounded-2xl border-2 bg-white text-center',
        isActive && 'border-main-100'
      )}
      {...props}
    >
      <div className="flex">
        <div className="mx-auto w-20">
          <feature.icon isActive={isActive} />
        </div>
        <svg className="w-6 fill-black" viewBox="0 0 229.22 115.57">
          <path d="m222.36,69.28l-76.36,44.08c-2.01,1.16-4.2,1.71-6.36,1.71-4.39,0-8.67-2.28-11.02-6.36-3.52-6.09-1.43-13.87,4.65-17.38l38.93-22.48H10.84c-5.71,0-10.34-4.63-10.34-10.34,0-2.86,1.16-5.45,3.03-7.32,1.87-1.87,4.46-3.03,7.31-3.03h162.63l-41.41-23.91c-6.09-3.51-8.17-11.3-4.66-17.38,2.36-4.08,6.64-6.37,11.03-6.37,2.16,0,4.35.55,6.35,1.71l76.36,44.09c.73.42,1.41.91,2.02,1.45,1.54,1.04,2.86,2.44,3.85,4.15,3.52,6.08,1.43,13.86-4.65,17.38Z" />
        </svg>
        <div className="mx-auto w-20">
          <svg viewBox="0 0 78.42 53.07" className="mt-6">
            <path
              stroke={isActive ? '#04549a' : 'black'}
              fill="none"
              strokeWidth={isActive ? '4' : '2'}
              d="m19.66.5l2.19,5.12h10.23l2-5.12h9.88l3.65,4.57h9.5l2.19-4.57h5.87l12.58,44.39-11.69-.18-4.2,7.86h-10.78l-4.2-8.22h-15.89l-3.47,8.22h-11.55l-3.8-7.86H.67L13.45.5h6.21Zm0,0l-7.49,44.21M21.86,5.62l-5.88,46.95M32.09,5.62l-4.57,46.95M34.08.5l-3.09,43.85M43.96.5l2.92,43.85m.73-39.28l3.47,47.5m6.03-47.5l4.75,47.5m4.2-7.86L59.31.5"
            />
          </svg>
        </div>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'font-bold text-main-100' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
    </motion.div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200  sm:-inset-x-6" />
            <div className="relative mx-auto w-full overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-10 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className={clsx('flex justify-between pb-10')}>
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className=" [&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative overflow-hidden rounded-4xl bg-slate-200 px-8 py-2 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10 sm:w-[70rem]">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt={feature.name}
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function RoofReplacement() {
  return (
    <section
      id="roofreplacement"
      aria-label="With over 20 years experience, there isn't a project we can't complete"
      className="relative bg-white pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Element name="roofreplacementEl">
        <Container>
          <SouthernCross
            className="top-14 z-0 w-80 md:left-48"
            opacity={0.25}
          />
          <div className="mx-auto max-w-4xl md:text-center">
            <h2 className="text-3xl font-bold uppercase text-main-100 sm:text-4xl">
              Roofing and Reroofing Specialist
            </h2>
            <p className="mt-4 text-lg tracking-tight text-black">
              Welcome to our Chris Board Metal Roofing. We specialize in roof
              replacements, offering expert services for transitioning from tile
              to metal, asbestos to metal, decramastic to metal, and metal to
              metal. With over 30 years of experience in the industry, we have
              the knowledge and expertise to ensure that your new roof is
              installed correctly and to the highest standards. Don&apos;t let
              an old or damaged roof put your home or commercial building at
              risk. Contact us today to schedule a consultation and see how we
              can help protect your property with a durable and reliable new
              roof.
            </p>
          </div>
          <FeaturesMobile />
          <FeaturesDesktop />
        </Container>
      </Element>
    </section>
  )
}
