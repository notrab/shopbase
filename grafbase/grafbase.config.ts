import { g, config } from '@grafbase/sdk'

g.model('Product', {
  name: g.string(),
  brand: g.string(),
  type: g.string().optional(),
  price: g.int().default(0)
}).search()

export default config({
  schema: g
})
