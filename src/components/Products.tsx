import { FC } from 'react'
import { Product as ProductInterface } from '~/resouces/Product'
import Product from './Product'

type Props = {
  products: ProductInterface[]
}

const Products: FC<Props> = ({ products }) => {
  return (
    <div className='flex flex-wrap gap-x-3 gap-y-3 justify-center align-middle'>
      {products.map((product) => {
        return <Product key={product.id} product={product} />
      })}
    </div>
  )
}

export default Products
