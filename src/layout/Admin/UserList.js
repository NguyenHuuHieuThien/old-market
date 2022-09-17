import {
    MDBInputGroup,
    MDBBtn,
    MDBBadge,
    MDBIcon
} from 'mdb-react-ui-kit';
import { Row, Col, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faCheckDouble, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


import ModalReact from "../../component/Modal";
import SideBars from "../../component/SideNav"

const actions = [
    { name: 'selectAll', icon: faCheckDouble, bg: 'success' },
    { name: 'create', icon: faPlus, bg: 'primary' },
    { name: 'delete', icon: faTrash, bg: 'danger' },

]
const Users = [
    {
        name: 'thiennhh',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'nguyenthienn3347@gmail.com',
        phone: '0123456789',
        address: 'Hanoi',
        role: 'admin',
    },
    {
        name: 'anhdd',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'ducanh81@gmail.com',
        phone: '0123456789',
        address: 'Gia Lai',
        role: 'user',
    },
    {
        name: 'namnc',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'congnam43@gmail.com',
        phone: '0123456789',
        address: 'Đà Nẵng',
        role: 'user',
    },
    {
        name: 'chiennd',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'dangchien43@gmail.com',
        phone: '0123456789',
        address: 'Đà Nẵng',
        role: 'user',
    },

]
export default function UserList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='mt-4'>
            <ModalReact show={show} handleClose={handleClose} handleShow={handleShow}>abc</ModalReact>
            <ModalReact show={show} handleClose={handleClose} handleShow={handleShow} size='lg' title='Delete user'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>SDT</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Thien</td>
                            <td>nguyenthienn3347@gmail.com</td>
                            <td>0941549525</td>
                            <td>
                                <button type="button" className="btn btn-warning me-2">Back up</button>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </ModalReact>

            <Row>
                <Col md={2}>
                    <SideBars/>
                </Col>
                <Col md={8}>
                    <h1 className="mb-3 text-center">User List</h1>
                    <Row>
                        <Col>
                            <div className="col-6 d-flex justify-content-start mb-2">
                                {actions.map((action, index) => (
                                    action.name === 'trash' ?
                                        <button role="button" key={index} className={`border-0 me-2 py-1 text-white bg-${action.bg}`}>
                                            <FontAwesomeIcon icon={action.icon} className="mr-2" /> {action.name}
                                        </button>

                                        :
                                        <button role="button" key={index} className={`border-0 me-1 py-1 text-white bg-${action.bg}`}>
                                            <FontAwesomeIcon icon={action.icon} className="mr-2" /> {action.name}
                                        </button>
                                ))}


                            </div>
                        </Col>
                        <Col xs={4}>
                            <MDBInputGroup className='mb-3'>
                                <input className='form-control' placeholder="Recipient's username" type='text' />
                                <MDBBtn outline>Button</MDBBtn>
                            </MDBInputGroup>
                        </Col>
                    </Row>
                    <Col xs={2}>
                        <div className='d-flex justify-content-start'>
                            <button className='border-0 me-2 py-1 text-white bg-warning' onClick={handleShow}>
                                <Link>
                                <FontAwesomeIcon icon={faTrashCan} /> Go to Trash (9)
                                </Link>
                                
                            </button>
                        </div>
                    </Col>


                    <div className="mt-4 mr-5">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Avatar</th>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>SDT</th>
                                    <th>Địa chỉ</th>
                                    <th>Role</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Users.length > 0 ? Users.map((User, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className="col-1"><img className="col-8 rounded-pill" src={User.avt} /></td>
                                        <td>{User.name}</td>
                                        <td>{User.email}</td>
                                        <td>{User.phone}</td>
                                        <td>{User.address}</td>
                                        <td>{User.role}</td>
                                        <td>
                                            <button type="button" className="btn btn-outline-info me-2">Sửa</button>
                                            <button type="button" className="btn btn-outline-danger" onClick={handleShow}>Xóa</button>
                                        </td>
                                    </tr>
                                )) : <tr ><td colSpan="8">No user.<Link>Create new user</Link></td></tr>}

                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>

    )

}