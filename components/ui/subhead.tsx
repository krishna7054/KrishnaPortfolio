'use client'

import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import {  VerticalCutReveal, VerticalCutRevealRef } from "@/components/ui/vertical-cut-reveal"

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
        {`HI 👋, I'm a final-year B.Tech IT student at RGIPT, Jais, UP.`}
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
        {`😊 explores Freelancing, Web Development, and ML.`}
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