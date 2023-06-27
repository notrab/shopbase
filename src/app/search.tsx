'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export function Search() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const params = new URLSearchParams(searchParams as any)

  const [value, setValue] = useState<string>(params.get('query') || '')
  const debouncedValue = useDebounce<string>(value, 500)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (params.has('query') && value === '') {
      params.delete('query')
    }

    if (value.trim() !== '') {
      params.set('query', value)
    }

    router.push(`${pathname}?${params.toString()}`)
  }, [debouncedValue])

  return (
    <div className="relative w-full">
      <div className="absolute left-0 inset-y-0 w-10 flex items-center justify-center">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 17.5L14.47 14.47M14.47 14.47C15.8272 13.1127 16.6667 11.2377 16.6667 9.16667C16.6667 5.02453 13.3088 1.66667 9.16666 1.66667C5.02452 1.66667 1.66666 5.02453 1.66666 9.16667C1.66666 13.3088 5.02452 16.6667 9.16666 16.6667C11.2377 16.6667 13.1127 15.8272 14.47 14.47Z"
            stroke="#ACACAC"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <input
        type="text"
        className="rounded-md bg-gray-100 pr-3 py-2 pl-10 h-10 w-full border-0 focus:border0 focus:ring-0 focus:outline-none"
        placeholder="Search by name"
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  )
}
