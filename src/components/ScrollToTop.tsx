// Import For React
import { useEffect, useLayoutEffect } from 'react'
// Import For Router Dom
import { useLocation } from 'react-router-dom'

// Component Scroll To Top
export const ScrollToTop = () => {
  //  Get Pathname
  const { pathname } = useLocation()

  // Reset scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      const prev = window.history.scrollRestoration

      window.history.scrollRestoration = 'manual'

      return () => { window.history.scrollRestoration = prev }
    }
  }, [])

  // Scroll to top on pathname change
  useLayoutEffect(() => {
    const active = document.activeElement as HTMLElement | null

    if (active && typeof active.blur === 'function') {
      active.blur()
    }

    // Scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}
