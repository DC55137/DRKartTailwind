import Image from 'next/image'
import React from 'react'
import { Container } from '@/components/Container'
import RaceCalendarIMG from '@/images/2023RaceCalendar.png'

export default function RaceCalendar() {
  return (
    <div className="bg-black">
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
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
