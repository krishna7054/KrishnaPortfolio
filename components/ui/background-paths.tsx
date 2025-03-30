"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { SplineSceneBasic } from "@/components/ui/home"
import { HomeDemo } from "./navbar"

function FloatingPaths({ position }: { position: number }) {
  // Generate unique IDs for each render to avoid animation conflicts
  const [pathIds, setPathIds] = useState<string[]>([])

  useEffect(() => {
    // Generate unique IDs on the client side
    setPathIds(Array.from({ length: 36 }, (_, i) => `path-${position}-${i}-${Date.now()}`))
  }, [position])

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(255,255,255,${0.1 + i * 0.02})`,
    width: 0.5 + i * 0.03,
  }))

  if (pathIds.length === 0) {
    return null // Don't render until we have IDs (client-side only)
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full text-white opacity-20"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        
        {paths.map((path, index) => (
          <motion.path
            key={pathIds[index] || path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: [0, 1],
              pathOffset: [0, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: index * 0.1,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function BackgroundPaths() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

 

  return (
    <div className="relative min-h-screen   overflow-hidden bg-black">
      {isClient && (
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
      )}

      <div className="relative z-10   px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=""
        >
          <HomeDemo/>
          <SplineSceneBasic />
        
        </motion.div>
      </div>
    </div>
  )
}

