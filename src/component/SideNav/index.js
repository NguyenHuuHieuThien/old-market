import React, { useState } from 'react';
import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faListOl, faUsers, faUserPlus, faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { publicRoutes } from '../../route';

export default function SideBars({ path, Element }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <Router> */}

            <SideNav
                onSelect={selected => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <FontAwesomeIcon icon={faHome} />
                        </NavIcon>
                        <NavText>Home</NavText>
                    </NavItem>

                    <NavItem eventKey="users">
                        <NavIcon>
                            <Link to='/admin/users'><FontAwesomeIcon icon={faUsers} /></Link>
                        </NavIcon>
                        <NavText><Link to='/admin/users'>Users</Link></NavText>
                    </NavItem>

                    <NavItem eventKey="productlist">
                        <NavIcon>
                            <Link to='/admin/product-list'><FontAwesomeIcon icon={faListOl} /></Link>
                        </NavIcon>
                        <NavText><Link to='/admin/product-list'>Product List</Link></NavText>
                    </NavItem>

                    {/* <NavItem eventKey="productlist">
                    <Link to='/admin/product-list'>
                        <NavIcon>
                            <FontAwesomeIcon icon={faUsers} />
                        </NavIcon>
                        </Link>
                        <Link to='/admin/product-list'><NavText>Product list</NavText></Link>
                    </NavItem> */}
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i
                                className="fa fa-fw fa-line-chart"
                                style={{ fontSize: "1.75em" }}
                            />
                        </NavIcon>
                        <NavText>Charts</NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>Line Chart</NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>Bar Chart</NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>


        </>

    );
}


