'use client'

export function EmptyState() {
  return (
    <div className="text-center space-y-3">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-12 w-12 text-black stroke-current"
        aria-hidden="true"
      >
        <path
          d="M17.5 17.5L14.47 14.47M14.47 14.47C15.8272 13.1127 16.6667 11.2377 16.6667 9.16667C16.6667 5.02453 13.3088 1.66667 9.16666 1.66667C5.02452 1.66667 1.66666 5.02453 1.66666 9.16667C1.66666 13.3088 5.02452 16.6667 9.16666 16.6667C11.2377 16.6667 13.1127 15.8272 14.47 14.47Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <h3 className="mt-6 text-sm font-semibold text-black">
        No products found
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Adjust or clear your filters to see more products
      </p>
    </div>
  )
}
