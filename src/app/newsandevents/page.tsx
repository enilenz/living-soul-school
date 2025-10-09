import Image from "next/image";

import CodePolicies from "@/assets/CodeandPolicies.jpg";

export default function Home() {

const newsData = [
  {
    title: 'Excursions',
    description:
      'Our excursions provide students with opportunities to learn beyond the classroom. By visiting historical places, cultural centers, aquariums, and recreational locations, students gain firsthand knowledge, broaden their horizons, and connect real-world experiences to what they learn in school.',
    image: '/images/excursion.jpg', // Replace with actual image paths
  },
  {
    title: 'Career Day',
    description:
      'Career Day is designed to guide and inspire our students as they prepare for life beyond school. Through presentations from experts across fields, students have clearer career choice paths, explore expectations, and discover the importance of education in achieving their goals.',
    image: '/images/career.jpg',
  },
  {
    title: 'Inter-House Sports',
    description:
      'Sports at Little King School encourage teamwork, resilience, and school spirit. Inter-House competitions give students unique fun-filled ways to develop through athletics, football, and other sporting activities. It’s a celebration of talent, discipline and the joy of healthy competition.',
    image: '/images/sports.jpg',
  },
  {
    title: 'Cultural Day',
    description:
      'Cultural Day is a colorful showcase of our rich heritage and diversity. Students wear traditional attire, perform cultural dances, and display traditional foods and crafts. This event teaches unity, mutual respect, and pride in our collective identity.',
    image: '/images/cultural.jpg',
  },
  {
    title: 'Graduation Ceremony',
    description:
      'Graduation is a proud moment for our students, parents, and teachers alike. The ceremony is filled with celebrations, awards, and reflections on achievements. We appreciate the growth of each student and encourage them as they move to the next phase in their academic journey.',
    image: '/images/graduation.jpg',
  },
  {
    title: 'Independence Day Celebration',
    description:
      'We celebrate Nigeria’s rich heritage and national pride in our students. With music, drama, parades, and speeches reflecting the nation-building by national heroes.',
    image: '/images/independence.jpg',
  },
];

const upcomingEvents = [
  'Happy International Day of the Girl Child',
  'Happy International Day of the Girl Child',
  'Happy International Day of the Girl Child',
  'Happy International Day of the Girl Child',
  'Happy International Day of the Girl Child',
  'Happy International Day of the Girl Child',
  'Happy International Day of the Girl Child',
];


  return (
    <div className="">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden ">
        <div
          className="absolute inset-0  bg-cover bg-top"
          style={{ backgroundImage: `url(${CodePolicies.src})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-4">
          <h1 className="text-5xl  font-bold leading-tight">
            Codes & Policies
          </h1>

          <p>
            We understand just how important it is for parents to choose the
            right school for their child. The process outlined below is typical
            but can be adapted to ensure that you and your child are supported
            every step of the way.{" "}
          </p>
        </div>
      </section>

      <section>
            <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* News Section */}
        <div className="lg:col-span-3 space-y-6">
          {newsData.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-center">
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar - Upcoming Events */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h3>
          <ul className="space-y-2">
            {upcomingEvents.map((event, idx) => (
              <li key={idx} className="text-sm text-gray-600 border-b pb-2">{event}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
      </section>

    </div>
  );
}
