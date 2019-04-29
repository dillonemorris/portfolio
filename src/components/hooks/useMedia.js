import { useEffect, useState } from 'react'

function useMedia(queries, values, defaultValue) {
  if (typeof window !== `undefined`) {
    const mediaQueryLists = queries.map(q => window.matchMedia(q))
  }

  const getValue = () => {
    if (typeof window !== `undefined`) {
      const index = mediaQueryLists.findIndex(mql => mql.matches)
      return typeof values[index] !== 'undefined' ? values[index] : defaultValue
    }
  }

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueryLists.forEach(mql => mql.addListener(handler))
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
  }, [])

  return value
}

export { useMedia }
