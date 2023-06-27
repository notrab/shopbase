import cc from 'classcat'

type SkeletonProps = {
  length?: number
  animated?: boolean
}

export function Skeleton(props: SkeletonProps) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 w-full"
    >
      {Array(props.length || 8)
        .fill('')
        .map((_, i) => (
          <li
            key={i}
            className={cc(['space-y-3', { 'animate-pulse': props.animated }])}
          >
            <div className="aspect-h-7 aspect-video w-full bg-gray-100 rounded-lg"></div>
            <div className="rounded-lg h-5 w-32 bg-gray-200"></div>
            <div className="rounded-lg h-5 w-10 bg-gray-200"></div>
          </li>
        ))}
    </ul>
  )
}
