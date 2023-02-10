import Image from 'next/image'
import TeamPhoto from '@/images/TeamPhoto.jpg'

import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="Racing Kart"
      aria-label="Asbestos Removal"
      className="relative z-0 overflow-hidden"
    >
      <div className="bgImage bg-cover bg-fixed py-40">
        <Container className="z-10">
          <div className="mx-auto max-w-3xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Your One-Stop Shop for All Things Kart Racing
            </h2>
            <p className="py-5 text-lg tracking-tight text-white">
              DR Kart Racing is the ultimate destination for all kart racing
              enthusiasts. Whether you are a seasoned racer or just starting
              out, our website offers everything you need to fuel your passion
              for the sport. From the latest news and updates, to expert advice
              and tips, we&apos;ve got you covered. Get ready to experience the
              thrill of the race and take your karting skills to the next level
              with DR Kart Racing.
            </p>
            <Image
              className="my-10"
              src={TeamPhoto}
              alt="nice picture of the team"
            />
          </div>
        </Container>
      </div>
    </section>
  )
}
