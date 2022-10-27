import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faUser, faBagShopping, faBell, faArrowRightToBracket, faCartShopping, faPenToSquare, faSearch, faEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react'
export default function Navbars({ position }) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);

        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isUser = false;
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
            {
                name: "Giỏ hàng",
                link: "/carts",
                icon: faCartShopping

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
                link: "/sign-up",
                icon: faUserPlus

            },
        ],
    }
    const [bg, setBg] = useState("bg-transparent");

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

            <div className={`${position} ${offset && offset >= 80 ? 'bg-nav' : 'bg-transparent'}`} id="navbar-bg">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Link to="/">
                            <img className="w-75 navbar-brand" src="https://static.chotot.com/storage/marketplace/transparent_logo.png" />
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {menu.menu1.map((item, index) => (
                                    <Link key={index} to={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                                        <li className="me-5">
                                            <FontAwesomeIcon icon={item.icon} />
                                            <span className="ms-2">{item.name}</span>
                                        </li>
                                    </Link>
                                ))}
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                            <Nav>
                                {menu.menu2.map((item, index) => (
                                    <Link key={index} to={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                                        <li className="me-5">
                                            <FontAwesomeIcon icon={item.icon} />
                                            <span className="ms-2">{item.name}</span>
                                        </li>
                                    </Link>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            {/* <div className="">
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div> */}
            <div className="bg-main ">
                <div className="container ">
                    <div className="mt-5 pt-5">
                        <h1 className="text-white animate__animated animate__bounceInDown">Chợ tốt Online</h1>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="d-flex p-1 border border-white w-75">
                            <div className="border w-75">
                                <input type="text" className="w-100 h-100 border-0 outline-none p-2 z-index" />
                            </div>
                            <button onClick={() => console.log(123)} className="btn btn-warning w-25">Tìm kiếm</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <div className="col-4 mt-5">
                            <div className="animate__animated animate__fadeInLeft w-100">
                                <img src="https://subiz.com.vn/blog/wp-content/uploads/2015/12/Card-DanangShip-01-e1450144113271.png" />
                            </div>
                            <div className="text-white">
                                <div>Tiết kiệm thời gian</div>
                                <div>Mua sắm mọi nơi, mọi lúc</div>
                            </div>
                        </div>
                        <div className="col-4 mt-5">
                            <div className="animate__animated animate__fadeInUp text-center w-50">
                                <img src="https://cdn-icons-png.flaticon.com/512/602/602251.png" width='100%' />
                            </div>
                            <div className="text-white">
                                <div>Giao hàng tận nhà</div>
                                <div>Nhận được hàng từ 3-5 ngày</div>
                            </div>
                        </div>
                        <div className="col-4 mt-5">
                            <div className="animate__animated animate__fadeInRight w-50 d-flex justify-content-end">
                                <img className="" src="https://tamlytrilieunhc.com/wp-content/uploads/2021/07/thanh-toan-khi-nhan-hang.png" width='100%' />
                            </div>
                            <div className="text-white">
                                <div>Thanh toán khi nhận hàng</div>
                                <div>Kiểm tra hàng trước khi thanh toán</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}