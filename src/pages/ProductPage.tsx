import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import { Product } from '~/resouces/Product'
import Products from '~/components/Products'
import { Link } from 'react-router-dom'
import { BASE_URL } from '~/config/baseURL'

function ProductPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [condition, setCondition] = useState<any>({
    _page: 1,
    _per_page: 10
  })

  useEffect(() => {
    axios
      .get<Product[]>(`${BASE_URL}/products?_page=${condition._page}&_per_page=${condition._per_page}`)
      .then((axiosResponse) => {
        setProducts(axiosResponse.data)
      })
      .catch((error: unknown) => {
        console.log(error)
      })
  }, [condition])

  return (
    <>
      <div>Page hien tai {condition._page}</div>
      <button
        onClick={() => {
          setCondition({
            ...condition,
            _page: condition._page - 1
          })
        }}
      >
        Quay lai trang truoc
      </button>
      <button
        onClick={() => {
          setCondition({
            ...condition,
            _page: condition._page + 1
          })
        }}
      >
        Di toi trang sau
      </button>
      <Link to={'/'}>Ve trang chu</Link>
      <input type='text' />
      Danh sach products
      <Products products={products} />
    </>
  )
}

export default ProductPage
