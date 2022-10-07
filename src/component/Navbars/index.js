import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faUser, faBagShopping, faBell, faArrowRightToBracket, faPenToSquare, faSearch, faEdit } from "@fortawesome/free-solid-svg-icons"

export default function Navbars() {
    const menu = [
        {
            name: "Home",
            link: "/",
            icon: faHome

        },
        {
            name: "ManagerStory",
            link: "/",
            icon: faUser

        },
        {
            name: "Order",
            link: "/",
            icon: faBagShopping

        },
        {
            name: "notify",
            link: "/",
            icon: faBell

        },
        {
            name: "post",
            link: "/",
            icon: faEdit

        },
        {
            name: "login",
            link: "/login",
            icon: faArrowRightToBracket

        },
        {
            name: "more",
            link: "/",
            icon: faBars

        },

    ]
    return (
        <div>
            <div className="bg-main">
                <div className="container">
                    <div className="d-flex pt-3 pb-3">
                        <div>
                            <img src="https://static.chotot.com/storage/marketplace/transparent_logo.png" />
                        </div>
                        <ul className="d-flex align-items-center m-0 ms-5 text-white">
                            {menu.map((item, index) => (
                                <li key={index} className="me-5 px-2 cursor-pointer text-center">
                                    <span className="text-center"><FontAwesomeIcon icon={item.icon} className="me-2 fs-5" />{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="d-flex pb-3 pt-1">
                        <div className="flex-1 d-flex">
                            <input type="text" className="w-75 p-2 flex-start outline-none input"/>
                            <FontAwesomeIcon icon={faSearch} className="me-2 p-3 bg-btn text-white cursor-pointer px-4" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid container">
                    <a class="navbar-brand">Old Market</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" to='/'>Home
                                    <span class="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/products'>Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/carts">Carts</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/admin/users">About</Link>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav> */}
        </div>
    )
}