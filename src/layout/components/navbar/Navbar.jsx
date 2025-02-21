import { Link } from "react-router-dom"
import Menu from "./components/menu/Menu.jsx"
import Cart from "./components/cart/Cart.jsx"
import Search from "./components/search/Search.jsx"
import List from "./components/list/List.jsx"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-3xl font-bold">Benjaja Store</Link>
      <Menu/>
      <Search />
      <List/>
      <Cart />
    </nav>
  )
}
