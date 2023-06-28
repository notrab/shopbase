export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:py-12">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12">
        <div>
          <div className="group aspect-square overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
            <svg
              viewBox="0 0 13 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 stroke-current text-white"
            >
              <path
                d="M6.8219 8.64715L6.60505 9.22218L7.02011 9.67539L10.6595 13.6492C11.8345 14.9322 10.9243 17 9.18453 17H3C1.89543 17 1 16.1046 1 15V9V3C1 1.89543 1.89543 1 3 1H6.81398C8.21196 1 9.17862 2.39764 8.68534 3.7057L6.8219 8.64715Z"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="md:pt-12 space-y-6 md:space-y-12 animate-pulse">
          <div className="space-y-3">
            <div className="rounded-lg h-8 w-52 bg-gray-200"></div>
            <div className="rounded-lg h-6 w-20 bg-gray-200"></div>
          </div>
          <div className="space-y-3">
            {Array(6)
              .fill('')
              .map((_, i) => (
                <div className="rounded-lg h-5 w-10/12 bg-gray-200"></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
