import {
    MDBInputGroup,
    MDBBtn,
    MDBBadge,
    MDBIcon,
    MDBTable, MDBTableHead, MDBTableBody
} from 'mdb-react-ui-kit';
import { Row, Col, Button, Form } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faCheckDouble, faTrashCan, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



import ModalReact from "../../component/Modal";
import SideBars from "../../component/SideNav"

const actions = [
    { name: 'Nạp lại', icon: faArrowsRotate, bg: 'success' },
    { name: 'Tạo', link: '/add-user', icon: faPlus, bg: 'primary' },
    { name: 'Xóa', icon: faTrash, bg: 'danger' },
    { name: 'Thùng rác', icon: faTrashCan, bg: 'info' },

]
const Users = [
    {
        id: 1,
        name: 'thiennhh',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'nguyenthienn3347@gmail.com',
        phone: '0123456789',
        address: 'Hanoi',
        role: 'admin',
        badge: 'success'
    },
    {
        id: 2,
        name: 'anhdd',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'ducanh81@gmail.com',
        phone: '0123456789',
        address: 'Gia Lai',
        role: 'user',
        badge: 'warning'
    },
    {
        id: 3,
        name: 'namnc',
        avt: 'https://znews-photo.zingcdn.me/w660/Uploaded/kbd_pilk/2021_06_27/hua_khai5.jpg',
        email: 'congnam43@gmail.com',
        phone: '0123456789',
        address: 'Đà Nẵng',
        role: 'user',
        badge: 'warning'
    },
    {
        id: 4,
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
    const [users, setUsers] = useState(Users);
    const handleClose = () => setShow(false);
    const [userid, setUserId] = useState();
    const [ischecked, setIsChecked] = useState(false);
    const handleShow = (id) => {
        setShow(true);
        setUserId(id)
    }
    const selectAll = () => {
        setIsChecked(!ischecked);
        users.map((user) => {
            user.isChecked = ischecked;
        })
    }
    const checkId = (id) => {
        let a = [...id]
        console.log(a);
    }
    const deleteUser = () => {
        let newUsers = users.filter(user => user.id !== userid);
        setUsers(newUsers)
        setShow(false);
    }

    return (
        <div className='bg-main h-100'>
            <ModalReact show={show} handleClose={handleClose} deleteUser={deleteUser} handleShow={handleShow}>Do you want delete user?</ModalReact>
            <Row>
                <Col md={8}>
                    <h1 className="mb-5 mt-5 text-center text-uppercase">Danh sách người dùng</h1>
                    <div className='bg-white rounded-3 shadow-sm'>
                        <div className='row p-3'>
                            <div className='col-8 d-flex align-items-center justify-content-between w-100'>
                                <div className="col-6 d-flex">
                                    {actions.map((action, index) => (
                                        action.link ? <Link to={action.link} key={index}><button className="btn btn-primary me-1"><FontAwesomeIcon icon={action.icon} /> {action.name}</button></Link> :
                                            <button role="button" key={index} className={`border-0 me-1 text-white px-2 bg-${action.bg}`}>
                                                <FontAwesomeIcon icon={action.icon} className="mr-0" /> {action.name}
                                            </button>
                                    ))}
                                </div>
                                <div className="col-6">
                                    <MDBInputGroup className=' d-flex align-items-center'>
                                        <input className='form-control' placeholder="Nhập điều kiện..." type='text' />
                                        <MDBBtn outline>Tìm kiếm</MDBBtn>
                                    </MDBInputGroup>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-3 bg-white rounded-3 shadow-sm">
                        <Table>
                            <thead className=''>
                                <tr className='border-underline'>
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
                                {users.length > 0 ? users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className='col-1'><img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={user.avt} /></td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <MDBBadge color={user.badge} pill>
                                                {user.role}
                                            </MDBBadge>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-info me-2"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/update/${user.id}`}>Cập nhật</Link></button>
                                            <button type="button" className="btn btn-danger" onClick={() => handleShow(user.id)}>Xóa</button>
                                        </td>
                                    </tr>
                                )) : <tr ><td colSpan="8">Chưa có người dùng nào.<Link to='/sign-up'>Tạo mới một người dùng</Link></td></tr>}

                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>

    )

}  