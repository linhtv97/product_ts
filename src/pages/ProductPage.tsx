import { useEffect, useState, FC } from 'react'
import '../App.css'
import axios from 'axios'
import Products from '~/components/Products'
import { Link } from 'react-router-dom'
import { BASE_URL } from '~/config/baseURL'
import { ApiProductListResut, Pagination } from '~/resouces/Paginate'

type Condition = {
  _page: number
  _per_page: number
}

const ProductPage: FC = () => {
  const [paginationProduct, setPagiantionProduct] = useState<ApiProductListResut | null>(null)

  const [loading, setLoading] = useState(false)

  const [condition, setCondition] = useState<Condition>({
    _page: 1,
    _per_page: 2
  })

  console.log(paginationProduct)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      axios
        .get<ApiProductListResut>(`${BASE_URL}/products?_page=${condition._page}&_per_page=${condition._per_page}`)
        .then((axiosResponse) => {
          setLoading(false)
          setPagiantionProduct(axiosResponse.data)
        })
        .catch((error: unknown) => {
          setLoading(false)
          console.log(error)
        })
    }, 2000)
  }, [condition])

  if (loading === true) {
    return 'Loading....'
  }

  return (
    <>
      <div>Page hien tai {condition._page}</div>
      {!!paginationProduct?.prev && (
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
      )}
      {paginationProduct?.next && (
        <button
          onClick={() => {
            setCondition({
              ...condition,
              _page: condition._page + 1
            })
          }}
        >
          Di den trang tiep
        </button>
      )}
      <Link to={'/'}>Ve trang chu</Link>
      <input type='text' />
      Danh sach products
      {paginationProduct && <Products products={paginationProduct?.data} />}
    </>
  )
}

export default ProductPage
