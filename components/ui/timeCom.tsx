
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className=" text-lg  font-normal mb-5  ">
            ✅ Learning MERN stack development from scratch via 100xdevs by Harkirat Singh. <br/>
            ✅ Participate in a Rajshthan Police hackathon and place in the top 23. 
          </p>
          <div className="grid gap-4 grid-cols-2">
            <img
              src="web_certificate.png"
              alt="MERN stack certificate"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-66 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
              <img
              src="certificate_for_ Rajashthan Police Hackathon .jpg"
                alt="RPH certificate"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-66 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-lg font-normal mb-8">
            ✅ Campus Ambassador at Entrepreneurship Cell of IIT Hyderabad. <br/>
            ✅ Learning Data Science Basic via Coding Ninjas.
          </p>
         
          <div className="grid gap-4 grid-cols-2">
            <img
              src="IIt_camp.jpeg"
              alt="IIT Campus Ambassador"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-66 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="ds.jpeg"
              alt="Data Science"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-66 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
           
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-lg font-normal mb-4">
            ✅ Learning Data Structures & Algorithm in C++ from scratch via Coding Ninjas. <br/>
            ✅ Learning introduction of C++ from scratch via Coding Ninjas.
          </p>
          
          <div className="grid  gap-4 grid-cols-2 ">
            <img
              src="dsa.jpeg"
              alt="DSA"
              width={500}
              height={500}
              className=" rounded-lg object-cover h-20 md:h-44 lg:h-66 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
                src="cpp_intro.jpeg"
                alt="Intro CPP"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-66 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
          </div>
        </div>
      ),
    },
   
  ];
  return (
    <div >
      <div className=" h-full  w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
