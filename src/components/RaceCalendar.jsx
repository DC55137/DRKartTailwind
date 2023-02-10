import Image from 'next/image'
import React from 'react'
import { Container } from '@/components/Container'
import RaceCalendarIMG from '@/images/2023RaceCalendar.png'

export default function RaceCalendar() {
  return (
    <div className="py-40">
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">
            Race Calendar
          </h2>
          <p className="my-4 text-lg tracking-tight text-black">
            We are thrilled to announce our 2023 calendar of scheduled races,
            where we&apos;ll be showcasing our top-notch go-karts and talented
            drivers. Whether you&apos;re a seasoned racing enthusiast or a
            newcomer to the sport, this season is sure to be full of exciting
            races and intense competition. Get ready for a year of fast-paced
            action as our drivers take on some of the most challenging tracks in
            the country. Make sure to follow our calendar and join us at one of
            the many races to see the thrill of go-karting up close. We
            can&apos;t wait to see you there!
          </p>
          <div className="my-20">
            <Image
              className="z-10 block h-auto w-full "
              src={RaceCalendarIMG}
              alt="test"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
