import Link from 'next/link'

export function Introduction() {
  return (
    <section aria-labelledby="cause-heading">
      <div
        className="relative bg-cover bg-fixed py-32 px-6 sm:py-40 sm:px-12 lg:px-16 "
        style={{ backgroundImage: "url('/displayBeFast.jpg')" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-50"
        />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2
            id="cause-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Unlock Your Full Potential with Our Expert Team
          </h2>
          <p className="mt-3 text-xl text-white">
            Our team of racing experts is here to help you unleash your inner
            champion. Whether you&apos;re a beginner or an experienced driver,
            we have the knowledge and experience to help you reach your full
            potential on the track. With our expert guidance and support, you
            can take your skills to the next level and dominate the Australian
            racing circuit. We&apos;re committed to making DR Racing Kart the
            top team in the country, and we won&apos;t stop until we&apos;ve
            secured our place at the top of the podium. Get ready to experience
            the rush of victory with DR Racing Kart!
          </p>
          <Link
            href="/about"
            className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  )
}
