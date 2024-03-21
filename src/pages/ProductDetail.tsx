import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Product from '~/components/Product'
import { BASE_URL } from '~/config/baseURL'
import { Product as ProductInterface } from '~/resouces/Product'

const ProductDetail = () => {
  const params = useParams()
  const [product, setProduct] = useState<ProductInterface | null>(null)
  const [loading, setLoading] = useState(false)

  const id = params.id

  useEffect(() => {
    if (id) {
      setLoading(true)
      setTimeout(() => {
        axios
          .get<ProductInterface>(BASE_URL + '/products/' + id)
          .then((res) => {
            setLoading(false)
            setProduct(res.data)
          })
          .catch((e: unknown) => {
            setLoading(false)
            console.log(e)
          })
      }, 2000)
    }
  }, [])

  if (loading) {
    return <div className='text-xl text-blue-600'>Loading....</div>
  }

  return (
    <div>
      <div>
        <Link to={'/products'}>
          <button>Ve trang product list</button>
        </Link>
      </div>
      {product && <Product product={product} />}
    </div>
  )
}

export default ProductDetail
