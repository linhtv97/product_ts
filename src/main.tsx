import ReactDOM from 'react-dom/client'

import './index.css'
import Root from './routes/root'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/products',
    element: <ProductPage />
  },
  {
    path: '/products/:id',
    element: <ProductDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
