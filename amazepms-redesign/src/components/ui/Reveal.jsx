import { motion } from "framer-motion"

const directions = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * Framer Motion scroll-reveal wrapper.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  as = "div",
  once = true,
  amount = 0.25,
}) {
  const MotionTag = motion[as] || motion.div
  const offset = directions[direction] || directions.up

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
