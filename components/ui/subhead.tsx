'use client'


import {  VerticalCutReveal } from "@/components/ui/vertical-cut-reveal"

function WelcomeExample() {
  return (
    <div className="w-full  h-full xs:text-2xl text-2xl sm:text-4xl md:text-2xl lg:text-2xl xl:text-2xl flex flex-col items-start justify-center font-overusedGrotesk  text-emerald-300 tracking-wide uppercase">
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        staggerFrom="first"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
        }}
      >
        {`HI 👋, I'm Krishna Kumar, a B.Tech IT graduate (Class of 2025) from RGIPT, Jais (U.P.).`}
      </VerticalCutReveal>
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        staggerFrom="last"
        reverse={true}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
          delay: 0.5,
        }}
      >
        {`😊 I’m passionate about Web Development, Machine Learning, and Freelancing, constantly exploring new technologies and building impactful projects. 🚀`}
      </VerticalCutReveal>
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        staggerFrom="center"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
          delay: 1.1,
        }}
      >
        {`Explore my projects! 🚀`}
      </VerticalCutReveal>
    </div>
  )
}






export {
  WelcomeExample
}
