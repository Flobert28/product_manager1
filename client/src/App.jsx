import { useState } from 'react'

import ProductForm from './components/ProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductForm></ProductForm>
    </>
  )
}

export default App
