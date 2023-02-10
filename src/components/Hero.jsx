import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import DontBeSafe from '@/images/DontBeSafe.svg'
import DRRacingTrim from '@/images/DRMin.svg'
import DRLogoDR from '@/images/DRLogoDR.svg'

export function Hero(props) {
  return (
    <div>
      <section className="bgImage h-screen bg-fixed" id="home">
        <Container className=" pt-20 pb-16 text-center lg:pt-32">
          <div className="absolute bottom-10 left-0 flex w-screen flex-col justify-center">
            <div className="mb-3 flex justify-center ">
              <button
                type="button"
                className="mx-3 inline-flex items-center rounded-full bg-main-500 px-3.5 py-2 text-lg font-medium text-white shadow-sm hover:bg-white hover:text-main-500 active:bg-main-100 active:text-main-600"
              >
                Shop Now
              </button>
              <button
                // href="https://www.youtube.com/watch?v=v8byOlZdJF4"
                className="mx-3 inline-flex items-center rounded-full bg-main-500 px-3.5 py-2 text-lg font-medium text-white shadow-sm hover:bg-white hover:text-main-500 active:bg-main-100 active:text-main-600"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-black group-active:fill-current"
                >
                  <path
                    className=""
                    d="m19.994 13.82-15.166 6.894A2 2 0 0 1 2 18.894V5.106a2 2 0 0 1 2.828-1.82L19.994 10.18c1.564.71 1.564 3.63 0 4.34Z"
                  />
                </svg>
                <span className="0 ml-3">Watch video</span>
              </button>
            </div>
            <h1 className="text-border -mb-6 hidden border-main-500 text-6xl font-bold text-white md:block xl:text-8xl">
              AUSTRALIA&apos;S #1
            </h1>

            <div className="mx-auto hidden w-full max-w-[1400px] text-main-800 md:block">
              <Image
                className="animate-draw z-10 block h-auto w-full "
                src={DRRacingTrim}
                alt="test"
              />
            </div>
            <div className="w-full text-main-800 md:hidden">
              <Image
                className="animate-draw z-10 block h-auto w-full"
                src={DRLogoDR}
                alt="test"
              />
            </div>
          </div>
        </Container>
        <div className="h-screen"></div>
      </section>
    </div>
  )
}
