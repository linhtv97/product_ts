import { Link } from 'react-router-dom'

export default function Root() {
  return (
    <>
      Day la trang Root
      <Link to={'/products'}>
        <button>Di den trang Products</button>
      </Link>
    </>
  )
}
