const people = [
  {
    name: 'Chris Board',
    role: 'Engineer/Mechanic/Driver',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1677730704/Dr%20Kart/about/326134120_3363566170639354_6608830988980290859_n_iyxytq.jpg',
    bio: "Introducing Chris Board, our highly skilled and experienced mechanic with a lifelong passion for kart racing. With a fierce competitive background in Australia, Chris brings a wealth of knowledge to our team and is always seeking innovative ways to optimize our karts' performance. As a valuable team member, Chris is always willing to share his expertise and passion for the sport, inspiring his colleagues and driving us all towards success on the track.",
    facebookUrl: 'https://www.facebook.com/profile.php?id=100085375908105',
  },
  {
    name: 'Paul Scaricamazza',
    role: 'Manager/Mechanic',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1677733632/Dr%20Kart/about/132046846_774983913097666_6034674349569023008_n_f2chug.jpg',
    bio: "Paul is responsible for overseeing our team's day-to-day operations, from logistics and scheduling to developing race strategies. His natural leadership abilities, combined with his years of experience in the sport, make him an invaluable asset to our team. Paul's years of experience and dedication to the sport are evident in his contributions to our team. His passion for kart racing and his commitment to excellence make him a valuable member of our team, and we are fortunate to have him on board.",
    facebookUrl: 'https://www.facebook.com/paul.scaricamazza',
  },
]

export default function Team() {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-main-600">
            The people behind our success
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Crew
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Introducing the DR Racing Kart Australia Crew - the dedicated team
            that will help you achieve your best on the track. At DR Racing Kart
            Australia, we understand that success is a team effort, and we are
            proud to have a crew of skilled professionals who work tirelessly to
            ensure that you have the support you need to perform at your best.
            With their expertise and passion for racing, our crew members are an
            integral part of our success, and we are grateful for their hard
            work and dedication. We invite you to meet our crew and discover the
            people who make DR Racing Kart Australia the winning team that it is
            today.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {person.bio}
              </p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.facebookUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M22 2.01a2.002 2.002 0 00-2-2H4a2.002 2.002 0 00-2 2v16.001c0 1.105.897 2 2 2h8.022v-6.961h-2.323v-2.711h2.323v-1.836c0-2.297 1.405-3.546 3.443-3.546.985 0 1.83.073 2.076.105v2.393l-1.423.001c-1.119 0-1.336.533-1.336 1.307v1.711h2.661l-.348 2.711h-2.312v6.962h4.52c1.103 0 2-.895 2-2V2.01z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
