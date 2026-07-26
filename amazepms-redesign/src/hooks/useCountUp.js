import { useEffect, useRef, useState } from "react"

/**
 * Animates a number from 0 to `end` when the element scrolls into view.
 * Returns [ref, value].
 */
export function useCountUp(end, { duration = 2000, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(end * eased)
              if (progress < 1) requestAnimationFrame(tick)
              else setValue(end)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-US")

  return [ref, formatted]
}
