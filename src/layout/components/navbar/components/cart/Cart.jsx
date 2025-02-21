import cartIcon from './img/cartIcon.svg';



function Cart() {
    return (
        <div className="relative">
            <img src={cartIcon} alt="Cart" className="w-8 h-8 filter invert" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center">0</span>
        </div>
    )
}

export default Cart