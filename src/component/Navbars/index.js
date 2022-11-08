import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faUser, faBagShopping, faBell, faArrowRightToBracket, faCartShopping, faPenToSquare, faSearch, faEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react'
import React from 'react';
import Tippy from '@tippyjs/react/headless';
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
                link: "/product/list",
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
    return (
        <div>

            <div className="bg-nav shadow-sm" id="navbar-bg">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Link to="/">
                            <img className="w-75 navbar-brand" src="https://static.chotot.com/storage/marketplace/transparent_logo.png" />
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {menu.menu1.map((item, index) => (
                                    item.name === "Thông báo" ?
                                        <Tippy
                                        interactive                    
                                            render={attrs => (
                                                <div className="box bg-white py-2 sticky-top shadow-sm rounded-2" style={{width:'350px'}} tabIndex="-1" {...attrs}>
                                                    <ul className="p-0 text-start">
                                                        <li role="button" className="mb-2 hover px-3 py-1">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="me-2">
                                                                    <img src="https://yt3.ggpht.com/ytc/AMLnZu9iJXDiUSZ9az5rgL2JOIGSfRpZmjHSGQia6Ks5hA=s900-c-k-c0x00ffffff-no-rj" width="60px" height="60px"
                                                                    className="rounded-5"/>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-bold me-1" style={{fontSize: '14px'}}>Hiếu Thiên</span>
                                                                    <span  style={{fontSize: '14px'}}>Đã bình luận về bài viết của bạn trên hệ thống</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li role="button" className="mb-2 hover px-3 py-1">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="me-2">
                                                                    <img src="https://yt3.ggpht.com/ytc/AMLnZu9iJXDiUSZ9az5rgL2JOIGSfRpZmjHSGQia6Ks5hA=s900-c-k-c0x00ffffff-no-rj" width="60px" height="60px"
                                                                    className="rounded-5"/>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-bold me-1" style={{fontSize: '14px'}}>Hiếu Thiên</span>
                                                                    <span  style={{fontSize: '14px'}}>Đã bình luận về bài viết của bạn trên hệ thống</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li role="button" className="hover px-3 py-1">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="me-2">
                                                                    <img src="https://yt3.ggpht.com/ytc/AMLnZu9iJXDiUSZ9az5rgL2JOIGSfRpZmjHSGQia6Ks5hA=s900-c-k-c0x00ffffff-no-rj" width="60px" height="60px"
                                                                    className="rounded-5"/>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-bold me-1" style={{fontSize: '14px'}}>Hiếu Thiên</span>
                                                                    <span  style={{fontSize: '14px'}}>Đã bình luận về bài viết của bạn trên hệ thống</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}>
                                            <div className="me-2">
                                                <FontAwesomeIcon icon={item.icon} className="text-white"/>
                                                <span className="text-white ms-2">{item.name}</span>
                                            </div>
                                        </Tippy>
                                        :
                                        <Link
                                            key={index}
                                            to={item.link}
                                            style={{
                                                textDecoration: "none",
                                                color: "white",
                                                marginRight: "10px",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={item.icon} />
                                            <span className="ms-2">{item.name}</span>
                                        </Link>
                                ))}
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
        </div >

    )
}