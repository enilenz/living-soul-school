import Image from "next/image";

import CodePolicies from "@/assets/CodeandPolicies.jpg";
import Playground from "@/assets/Playground.jpg";

export default function Home() {
  return (
    <div className="">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden ">
        <div
          className="absolute inset-0  bg-cover bg-top"
          style={{ backgroundImage: `url(${Playground.src})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-4">
          <h1 className="text-5xl  font-bold leading-tight">
            Our Facilities
          </h1>

          <p>
            We understand just how important it is for parents to choose the
            right school for their child. The process outlined below is typical
            but can be adapted to ensure that you and your child are supported
            every step of the way.{" "}
          </p>
        </div>
      </section>

     
   
    </div>
  );
}
