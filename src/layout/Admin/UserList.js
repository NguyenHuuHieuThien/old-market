import {
    MDBInputGroup,
    MDBBtn,
    MDBBadge,
    MDBIcon,
    MDBTable, MDBTableHead, MDBTableBody
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
        badge: 'success'
    },
    {
        name: 'anhdd',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'ducanh81@gmail.com',
        phone: '0123456789',
        address: 'Gia Lai',
        role: 'user',
        badge: 'warning'
    },
    {
        name: 'namnc',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'congnam43@gmail.com',
        phone: '0123456789',
        address: 'Đà Nẵng',
        role: 'user',
        badge: 'warning'
    },
    {
        name: 'chiennd',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'dangchien43@gmail.com',
        phone: '0123456789',
        address: 'Đà Nẵng',
        role: 'user',
        badge: 'warning'
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
                    <SideBars />
                </Col>
                <Col md={8}>
                    <h1 className="mb-3 text-center text-uppercase">User List</h1>
                    <Row>
                        <Col>
                            <div className="col-6 d-flex justify-content-start mb-2">
                                {actions.map((action, index) => (
                                    <button role="button" key={index} className={`border-0 me-1 py-1 text-white px-2 bg-${action.bg}`}>
                                        <FontAwesomeIcon icon={action.icon} className="mr-0" /> {action.name}
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
                            <Link to='/admin/trash'>
                                <FontAwesomeIcon icon={faTrashCan} /> Go to Trash (9)
                            </Link>
                        </div>
                    </Col>


                    <div className="mt-4 mr-5">
                        {/* <Table striped bordered hover>
                            <MDBTableHead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Position</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                alt=''
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>John Doe</p>
                                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Software engineer</p>
                                        <p className='text-muted mb-0'>IT department</p>
                                    </td>
                                    <td>
                                        <MDBBadge color='success' pill>
                                            Admin
                                        </MDBBadge>
                                    </td>
                                    <td>Senior</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-info me-2">Sửa</button>
                                        <button type="button" className="btn btn-outline-danger" onClick={handleShow}>Xóa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                                alt=''
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>Alex Ray</p>
                                                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Consultant</p>
                                        <p className='text-muted mb-0'>Finance</p>
                                    </td>
                                    <td>
                                        <MDBBadge color='primary' pill>
                                            Onboarding
                                        </MDBBadge>
                                    </td>
                                    <td>Junior</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-info me-2">Sửa</button>
                                        <button type="button" className="btn btn-outline-danger" onClick={handleShow}>Xóa</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                                alt=''
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>Kate Hunington</p>
                                                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Designer</p>
                                        <p className='text-muted mb-0'>UI/UX</p>
                                    </td>
                                    <td>
                                        <MDBBadge color='warning' pill>
                                            Awaiting
                                        </MDBBadge>
                                    </td>
                                    <td>Senior</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-info me-2">Sửa</button>
                                        <button type="button" className="btn btn-outline-danger" onClick={handleShow}>Xóa</button>
                                    </td>
                                </tr>
                            </MDBTableBody>
                        </Table> */}
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
                                        <td>
                                            <MDBBadge color={User.badge} pill>
                                                {User.role}
                                            </MDBBadge>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-info me-2">Update</button>
                                            <button type="button" className="btn btn-danger" onClick={handleShow}>Delete</button>
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