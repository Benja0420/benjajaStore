import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
