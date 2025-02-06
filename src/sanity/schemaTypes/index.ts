import { type SchemaTypeDefinition } from 'sanity'
import { products } from './products'
import { categories } from './categories'
import order from './order'

// import categories from './categories'

// import products from './products'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, categories, order ],
}
