'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function ActiveFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const params = new URLSearchParams(searchParams as any)

  return (
    <div>
      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </div>
  )
}
