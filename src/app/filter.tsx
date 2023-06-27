'use client'

import { useCallback } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const brands = [
  { label: 'Nike', value: 'nike' },
  { label: 'Allbirds', value: 'allbirds' },
  { label: 'Adidas', value: 'adidas' }
]

export default function Filter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const params = new URLSearchParams(searchParams as any)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const existingParams = params.getAll(name)

      if (existingParams.includes(value)) {
        const newParamValues = existingParams.filter((v) => v !== value)

        params.delete(name)

        newParamValues.forEach((param) => params.append(name, param))
      } else {
        params.append(name, value)
      }

      return params.toString()
    },
    [searchParams]
  )

  const clearAll = (name: string) => {
    params.delete(name)
    return params.toString()
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (value === 'all') {
      router.push(pathname + '?' + clearAll('brand'))
    } else {
      router.push(
        pathname + '?' + createQueryString('brand', event.target.value)
      )
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-medium text-lg">Brand</h3>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="allBrands"
              name="brand"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
              value="all"
              checked={!params.has('brand')}
              onChange={handleOnChange}
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label
              htmlFor="allBrands"
              className="font-medium text-gray-900 cursor-pointer"
            >
              Show all
            </label>
          </div>
        </div>

        {brands.map((brand) => {
          const existingParams = params.getAll('brand')

          return (
            <div key={brand.value} className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id={`brand[${brand.value}]`}
                  name="brand"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                  value={brand.value}
                  checked={existingParams.includes(brand.value)}
                  onChange={handleOnChange}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label
                  htmlFor={`brand[${brand.value}]`}
                  className="font-medium text-gray-900 cursor-pointer"
                >
                  {brand.label}
                </label>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
