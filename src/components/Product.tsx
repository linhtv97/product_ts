import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Product as ProductInterface } from '~/resouces/Product'

type Props = {
  product: ProductInterface
}

const Product: FC<Props> = ({ product }) => {
  return (
    <Link to={'/products/' + product.id}>
      <div className='w-[220px] bg-white border rounded-sm text-black'>
        <img className='h-[100px] w-full' src={product.thumbnail} alt={product.title} />

        <span className='text-xs text-black'>{product.title}</span>
        <br />
        <span className='text-xs'>
          Từ: <span className='text-red-600'>{product.price} đ</span>
        </span>
        <br />

        <span className='text-sm'>Brand: {product.brand}</span>
      </div>
    </Link>
  )
}

export default Product
