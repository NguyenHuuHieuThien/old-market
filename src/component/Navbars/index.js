import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faUser, faBagShopping, faBell, faArrowRightToBracket, faCartShopping, faPenToSquare, faSearch, faEdit } from "@fortawesome/free-solid-svg-icons"
import { Dropdown } from "react-bootstrap"
export default function Navbars() {
    const menu = {
        menu1: [
            {
                name: "Trang chủ",
                link: "/",
                icon: faHome

            },
            {
                name: "Sản phẩm",
                link: "/products",
                icon: faBagShopping

            },
            {
                name: "Thông báo",
                link: "/",
                icon: faBell

            },
        ],
        menu2: [
            {
                name: "Đăng nhập",
                link: "/sign-in",
                icon: faArrowRightToBracket

            },
            {
                name: "Đăng ký",
                link: "/sign-in",
                icon: faArrowRightToBracket

            },
        ],
    }

    // {
    //     name: "Quản Lý",
    //     icon: faBars,
    //     more: [
    //         {
    //             name: "Bài viết",
    //             link: "/",
    //             icon: faUser

    //         },

    //         {
    //             name: "Đăng tin",
    //             link: "/",
    //             icon: faEdit

    //         },
    //     ]

    // },


    return (
        <div>
            <div className="bg-main">
                <div className="container">
                    <div className="d-flex pt-3 pb-3 justify-content-between">
                        <ul className="d-flex m-0 p-0  justify-content-between text-white">
                            {menu.menu1.map((item, index) => (
                                <Link key={index} to={item.link} className=" text-decoration-none">
                                    <li className="me-2 px-2 cursor-pointer text-left">
                                        <span className="text-left text-white"><FontAwesomeIcon icon={item.icon} className="me-2 fs-6" />{item.name}</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                        <ul className="d-flex m-0 p-0">
                            {menu.menu2.map((item, index) => (
                                <Link key={index} to={item.link} className=" text-decoration-none">
                                    <li className="me-2 px-2 cursor-pointer text-left">
                                        <span className="text-left text-white"><FontAwesomeIcon icon={item.icon} className="me-2 fs-6" />{item.name}</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="row pb-3 pt-1">
                        <div className="me-3 col-2">
                            <img className="w-75" src="https://static.chotot.com/storage/marketplace/transparent_logo.png" />
                        </div>
                        <div className="d-flex col-8 p-1 bg-white rounded-1">
                            <div className="col-10">
                                <input type="text" className="w-100 h-100 pe-3 flex-start outline-none input p-2" />
                            </div>
                            <div className="col-2 ps-1 d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faSearch} className="fs-6 p-3 w-100 bg-btn text-white cursor-pointer rounded-1" />
                            </div>
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center ms-3">
                            <FontAwesomeIcon icon={faCartShopping} className="text-white fs-3" />
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