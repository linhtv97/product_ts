import './App.css'
import Products from './components/Products'

function App() {
  // Todo call api get products and show it in Products
  return (
    <>
      Danh sach products
      <Products products={[]} />
    </>
  )
}

export default App
