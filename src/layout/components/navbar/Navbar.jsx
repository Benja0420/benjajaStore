import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Navbar</h1>
        <ul className="flex space-x-4">
          <li><Link className="hover:underline" to="/">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
