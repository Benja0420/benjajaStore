import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
