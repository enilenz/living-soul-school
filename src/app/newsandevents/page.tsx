"use client";

import CodePolicies from "@/assets/CodeandPolicies.jpg";

interface NewsItemProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

function NewsItem({ title, subtitle, children }: NewsItemProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-3">
      <h2 className="text-2xl font-semibold text-blue-950">{title}</h2>

      {subtitle && (
        <p className="text-sm text-gray-500 italic">{subtitle}</p>
      )}

      <p className="text-md text-gray-600 leading-relaxed whitespace-pre-line">
        {children}
      </p>
    </div>
  );
}



export default function NewsAndEvents() {
  return (
    <div>
      
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${CodePolicies.src})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-4">
          <h1 className="text-5xl font-bold leading-tight">News & Events</h1>
          <p>
            Stay connected with the moments that shape our school community.
            From academic milestones to vibrant celebrations, this section
            highlights the heartbeat of our school.
          </p>
        </div>
      </section>

   
      <section className="min-h-screen bg-gray-200 py-16 ">
        <div className="max-w-5xl mx-auto flex flex-col space-y-10 px-4 sm:px-6 md:px-8" >

          
<div id="event-1" className="scroll-mt-40">
            <NewsItem
            title="Nurturing Excellence Through Culture and Values"
            subtitle="Living Souls Schools celebrates heritage, unity, and the beauty of cultural diversity."
          >
       At Living Souls Schools, culture forms a vital part of the learning experience. The school believes that true education goes beyond academics, it also means developing an awareness of one’s roots and a respect for the heritage of others. This belief came to life during the <strong>Cultural Heritage Week</strong>, an annual celebration that brought together students, teachers, and parents to honour Nigeria’s rich cultural mosaic.
Throughout the week, the campus was transformed into a vibrant showcase of colour and creativity. Students adorned in traditional attire represented diverse ethnic groups, while exhibitions featured indigenous arts, crafts, and cuisines. Performances of music, poetry, and dance offered powerful expressions of pride and unity, drawing enthusiastic applause from guests and community members.
Beyond the festivities, the program served an important educational purpose. Students participated in cultural storytelling sessions, learned traditional greetings, and explored the history behind various customs and symbols. These moments deepened their understanding of identity and heritage while promoting respect for others.
Teachers also emphasized the link between culture and values — showing that respect, empathy, and gratitude are timeless principles shared across communities. By learning to celebrate differences and appreciate similarities, students developed the moral intelligence that defines responsible global citizens.
For Living Souls Schools, Cultural Heritage Week reaffirms a central truth: that education rooted in culture builds character, belonging, and purpose. The event continues to strengthen the school’s mission of nurturing learners who are confident, grounded, and proud of their identity.

          </NewsItem>
</div>

          {/* ========= EVENT 2 ========= */}
<div id="event-2" className="scroll-mt-40">
            <NewsItem
            title="Inspiring Champions: Excellence in Sports and Team Spirit"
            subtitle="Physical strength, teamwork, and discipline take center stage at the Living Souls Schools Sports Festival."
          >
      The spirit of competition and camaraderie came alive during the  <strong>Annual Inter-House Sports Festival</strong> at Living Souls Schools, an event that has become one of the most anticipated highlights of the academic year. The festival was not only about winning medals but about cultivating a culture of resilience, teamwork, and leadership.
Students competed passionately in a wide range of sports, from athletics and football to basketball, volleyball, and relay races. Each event showcased not just talent but discipline and perseverance, values that mirror the school’s commitment to holistic education. The colourful opening march-past set the tone, as each house proudly displayed creativity and unity through coordinated chants and costumes.
Spectators, including parents, alumni, and community leaders filled the stands with cheers, supporting every athlete’s effort. Teachers and coaches guided participants, ensuring that every child, regardless of ability, had an opportunity to shine. The festival reminded all that sports are not just games; they are lessons in courage, focus, and sportsmanship.
The event also highlighted the importance of physical well-being and the role of sports in shaping balanced learners. By integrating sports into the school’s core philosophy, Living Souls Schools ensures that students develop strength of body and character a foundation for future leadership and success.
Ultimately, the Sports Festival was more than a competition; it was a celebration of determination, unity, and school pride. It reinforced the school’s belief that the same teamwork and discipline learned on the field are the building blocks of excellence in every area of life.

          </NewsItem>

</div>
          {/* ========= EVENT 3 ========= */}
<div id="event-3" className="scroll-mt-40">
            <NewsItem
            title="Creativity in Bloom: Where Imagination Meets Learning"
            subtitle="Students at Living Souls Schools express innovation through art, design, and creative projects."
          >
Creativity is a defining feature of the Living Souls Schools experience. The <strong>Creative Arts & Innovation Fair </strong>once again provided students with the platform to demonstrate how imagination can inspire solutions, drive innovation, and spark self-expression.
The fair featured exhibitions across art, crafts, music, drama, and technology. Students displayed beautifully designed paintings, intricate handmade items, and thought-provoking creative projects that reflected their unique perspectives on the world. The drama performances, poetry recitals, and musical numbers revealed not only talent but confidence and collaboration.
A special highlight was the innovation showcase, where learners presented science and technology projects developed through curiosity-driven learning. From simple mechanical devices to eco-friendly concepts, students showed how creative thinking can solve real-life problems. Teachers guided the process, encouraging exploration, critical thinking, and teamwork.
Beyond the displays, the event underscored the school’s philosophy that creativity is not limited to the arts, it’s a mindset that shapes how students approach challenges and opportunities. Living Souls Schools encourages learners to think differently, take risks, and see failure as a step toward discovery.
By empowering students to merge imagination with knowledge, the Creative Arts & Innovation Fair continues to nurture well-rounded individuals prepared for a world where innovation drives success. It’s a celebration of learning that reflects the school’s enduring commitment to developing inspired, confident thinkers.

          </NewsItem>
</div>

          {/* ========= EVENT 4 ========= */}
<div id="event-4" className="scroll-mt-40">
            <NewsItem
            title="Leadership: Quality Education in Action"
            subtitle="Living Souls Schools continues to set the standard in academic excellence and innovation."
          >
At Living Souls Schools, leadership and excellence are not just taught — they are lived every day. Through a carefully structured curriculum that combines academic rigor, moral development, and 21st-century skills, the school continues to empower students to become thoughtful leaders and innovators.
<strong>The Academic Excellence and Innovation Week</strong> stood as a testament to this mission. The week featured competitive and collaborative activities, including spelling bees, STEM challenges, debates, and creative writing contests designed to engage students intellectually while strengthening confidence and critical thinking.
Each day brought new opportunities for learners to demonstrate curiosity and mastery. STEM exhibitions showcased inventive projects that applied classroom learning to practical solutions, while debates encouraged students to think analytically and express themselves with clarity and conviction. Teachers played a vital mentorship role, guiding students through discovery-based learning.
Parents and community members were also invited to witness the remarkable work of the learners, reaffirming the school’s transparent approach to education. It was a moment of pride for all, seeing children articulate ideas, lead teams, and tackle problems with creativity and logic.
Through initiatives like these, Living Souls Schools continues to raise a new generation of learners who combine faith, intellect, and integrity. The school’s vision for academic excellence goes beyond high grades, it is about developing leaders who will make meaningful contributions to their communities and the wider world.

          </NewsItem>
</div>

        </div>
      </section>
    </div>
  );
}
