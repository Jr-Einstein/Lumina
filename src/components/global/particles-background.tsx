"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import type { Container, Engine } from "tsparticles-engine"
import { loadFull } from "tsparticles"

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Loads the full tsparticles package
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (_container?: Container) => {
    // Optional: do something when particles finish loading
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 80 },
          color: { value: "#8b5cf6" }, // violet sparks
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#8b5cf6",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  )
}
