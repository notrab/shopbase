import Filter from '@/app/(search)/filter'
import { Breadcrumbs } from '@/app/breadcrumbs'

export default function SearchLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-4 gap-6">
        <div>
          <Filter />
        </div>
        <div className="col-span-3">
          <div className="space-y-12">
            <Breadcrumbs />
            <h1 className="text-black text-2xl md:text-4xl font-medium">
              New Items
            </h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
