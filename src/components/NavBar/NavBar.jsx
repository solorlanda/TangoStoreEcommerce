import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { BsSearchHeart } from "react-icons/bs";


function NavBar() {
    return (
        <header className="sticky bg-amber-200 font-letraTitulos shadow-xl shadow-gray-500 h-32">
            <nav className="flex justify-around h-32">
                <div className="size-40 content-center h-32">
                    <Link to={"/"}><img className="hover:border-solid hover:border-4 hover:border-black hover:rounded-lg" src={logo} alt="" /></Link>
                </div>
                <div className="flex grow justify-center items-center">
                    <input className="h-6 w-[60%] rounded-lg p-2 m-2" type="text" placeholder="Busque su producto aquí..."/>
                    <button>
                    <BsSearchHeart className="size-6"/>
                    </button>
                </div>
                <div className="content-center text-lg">
                    <ul className="flex justify-center items-center space-x-3">
                        <Link className="hover:underline hover:decoration-solid" to={"/category/mates"}>Mates</Link>
                        <Link className="hover:underline hover:decoration-solid" to={"/category/alfajores"}>Alfajores</Link>
                        <Link className="hover:underline hover:decoration-solid" to={"/category/yerba"}>Yerba</Link>
                        <Link className="hover:underline hover:decoration-solid" to={"/category/dulce-de-leche"}>Dulce de Leche</Link>
                    </ul>
                </div>
                <div className="content-center p-6"> 
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar