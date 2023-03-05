import Link from 'next/link'

import { BsFacebook, BsInstagram } from 'react-icons/bs'

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'

export default function About() {
  return (
    <div className="bg-white py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-main-600">
          Introducing
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          DR Racing Kart
        </h1>
        <p className="mt-6 text-xl leading-8">
          Welcome to the official website of DR Racing Kart, a premier go-kart
          racing team that has been competing in all major Australian
          tournaments for the past 10 years. Our team is known for our passion
          for the sport, our high-quality karts, and our experienced and
          talented team members.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Founded a decade ago, DR Kart has quickly established itself as a
            leading name in the Australian go-karting scene, with numerous
            championship wins and accolades under our belt. We have been able to
            achieve this level of success thanks to our unwavering commitment to
            excellence, and our dedication to developing top-performing drivers.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-main-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Experienced Team:
                </strong>{' '}
                DR Racing Kart has a team of experienced and skilled drivers,
                mechanics, and support staff who have been in the industry for
                years. Our team's experience has allowed us to fine-tune our
                skills and techniques, making us a dominant force on the track.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-main-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  High-Quality Karts:
                </strong>{' '}
                We are equipped with some of the best karts in the industry,
                which are regularly maintained and upgraded to ensure top
                performance. Our karts are designed to deliver the speed,
                agility, and precision needed to compete at the highest levels.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-main-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">Events:</strong>{' '}
                DR Racing Kart competes in all major Australian go-karting
                tournaments, showcasing our team&apos;s abilities on the
                national stage. We believe that competing against the best in
                the country is the best way to push ourselves and continue to
                improve our performance.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            In addition to our racing activities, DR Racing Kart also operates a
            fully-equipped shop where we offer a range of high-quality go-kart
            parts, equipment, and accessories. Our shop is staffed by
            knowledgeable and experienced mechanics who can help you find the
            right products to meet your needs, whether you&apos;re a
            professional driver or a weekend enthusiast.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Everything you need to get up and running
          </h2>
          <p className="mt-6">
            We carry a wide range of products from leading brands in the
            industry, and we are always on the lookout for the latest
            innovations and technologies that can help our customers improve
            their performance. Our shop is committed to providing exceptional
            customer service, and we are always available to answer any
            questions you may have or provide advice on the products that will
            best meet your needs. Whether you&apos;re looking for tires,
            engines, chassis, or other go-kart parts and accessories, we have
            everything you need to get the most out of your go-karting
            experience. Browse our online store or visit us in person to see our
            full range of products and experience our commitment to excellence
            firsthand.
          </p>
          <figure className="mt-10 border-l border-main-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                &quot;I had an amazing experience with DR Racing Kart. Their
                team was professional, knowledgeable, and passionate about the
                sport. They provided excellent coaching and support, and their
                equipment was top-notch. I would highly recommend them to anyone
                looking to compete in go-karting.&quot;
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src="https://res.cloudinary.com/dddxwdp7v/image/upload/v1677914964/Dr%20Kart/about/Screenshot_2023-03-04_at_5.27.17_pm_aj6cjy.png"
                alt="Review author avatar"
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">
                  Jaie Robson
                </strong>{' '}
                – Driver
              </div>
            </figcaption>
          </figure>
        </div>
        <figure className="mt-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://res.cloudinary.com/dddxwdp7v/image/upload/v1677915162/Dr%20Kart/about/279101257_559009888839105_1116353349417172269_n_kgyify.jpg"
            alt="Team Tent at the track"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Australian Karting Championship, Geelong 2021
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            We would love to hear from you
          </h2>
          <p className="mt-6">
            Please feel free to contact us at any time using the information
            provided below. Our team is always happy to assist you and help you
            take the first step towards reaching your racing goals.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-main-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">Email:</strong>{' '}
                info@drracingkart.com.au
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-main-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">Number:</strong>{' '}
                +61 123456789
              </span>
            </li>
          </ul>
          <p className="mt-6">
            Also, be sure to follow us on social media to stay up-to-date on the
            latest news and updates from DR Racing Kart. You can find us on
            Facebook, Instagram, and Twitter using the handle @DRracingkart. We
            look forward to connecting with you and sharing our passion for
            racing!
          </p>
          <div className="mt-2 flex gap-x-6">
            <Link
              href="https://www.facebook.com/profile.php?id=100085597207506"
              className="group"
              aria-label="CBMR on Facebook"
            >
              <BsFacebook className="h-6 w-6 fill-slate-500" />
            </Link>
            <Link
              href="https://www.instagram.com/dr_kart_australia/"
              className="group"
              aria-label="CBMR on Instagram"
            >
              <BsInstagram className="h-6 w-6 fill-slate-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
