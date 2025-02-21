import { Link } from "react-router-dom"

function List() {

    return (
        <ul className="flex gap-4">
            <Link to="/profile" className="text-white text-2xl">My account</Link>
            <Link to="/orders" className="text-white text-2xl">Orders</Link>
            <Link to="/wishlist" className="text-white text-2xl">Wishlist</Link>
        </ul>
    )
}

export default List