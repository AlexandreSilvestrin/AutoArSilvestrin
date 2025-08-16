import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  y = 50, 
  x = 0,
  scale = 1,
  opacity = 1,
  className = "",
  ...props 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const variants = {
    hidden: { 
      opacity: 0, 
      y: y, 
      x: x,
      scale: scale * 0.8
    },
    visible: { 
      opacity: opacity, 
      y: 0, 
      x: 0,
      scale: scale,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
