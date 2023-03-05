const drivers = [
  {
    name: 'John Smith',
    role: 'Driver',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1678004241/Dr%20Kart/drivers/Screenshot_2023-03-05_at_3.15.42_pm_qkc3gn.png',
    bio: 'John Smith is a talented racing kart driver with years of experience in the sport. He began racing at the age of 12 and quickly discovered his love for the adrenaline rush and the thrill of competition. John has competed in numerous races and championships over the years, earning multiple podium finishes and accolades for his skills on the track. Off the track, John enjoys coaching and mentoring new drivers and sharing his passion for racing with others.',
    facebookUrl: 'https://www.facebook.com/profile.php?id=100085375908105',
  },
  {
    name: 'Jamie Lee',
    role: 'Driver',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1678004236/Dr%20Kart/drivers/Screenshot_2023-03-05_at_3.15.56_pm_muo5e0.png',
    bio: "Jamie Lee is a rising star in the world of racing kart driving. She started racing at the age of 16 and quickly caught the attention of racing enthusiasts with her natural talent and fearless attitude. Samantha has already achieved significant success in her career, including multiple championship wins and podium finishes. She is known for her strategic approach to racing, as well as her ability to remain cool under pressure. When she's not racing, Samantha enjoys fitness and outdoor activities to keep her mind and body sharp.",
    facebookUrl: 'https://www.facebook.com/paul.scaricamazza',
  },
  {
    name: 'Cody Johnson',
    role: 'Driver',
    imageUrl:
      'https://res.cloudinary.com/dddxwdp7v/image/upload/v1678004236/Dr%20Kart/drivers/Cody_b4leyh.png',
    bio: 'Cody Johnson is a veteran racing kart driver with over 20 years of experience in the sport. He began racing at a young age and quickly rose through the ranks, earning numerous championship titles and setting multiple records. Robert is known for his technical expertise and his ability to tune his kart to perfection. He is also a mentor to many young drivers, passing on his knowledge and experience to the next generation of racers. Off the track, Robert enjoys spending time with his family and working on his vintage kart collection.',
    facebookUrl: 'https://www.facebook.com/paul.scaricamazza',
  },
]

export default function Team() {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-main-600">
            The Skilled Athletes Behind the Wheel
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Drivers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our drivers are skilled athletes who have honed their craft over
            years of practice, training, and dedication to the sport of karting.
            They are the ones who bring our karts to life on the track, pushing
            them to the limit and striving for victory in every race.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {drivers.map((person) => (
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
