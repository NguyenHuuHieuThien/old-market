import SideBars from "../../component/SideNav"
import { Row, Col, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import { faPlus, faTrash, faCheckDouble, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
    MDBInputGroup,
    MDBBtn,
    MDBBadge,
    MDBIcon
} from 'mdb-react-ui-kit';

const products = [
    {
        name: 'table',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a table',
        date: '2021-11-11',
        quantity: 10
    },
    {
        name: 'motobike',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a motobike',
        date: '2021-11-11',
        quantity: 10
    },
    {
        name: 'chair',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a chair',
        date: '2021-11-11',
        quantity: 10
    },
    {
        name: 'cabinet',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a cabinet',
        date: '2021-11-11',
        quantity: 10
    },
    {
        name: 'bed',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a bed',
        date: '2021-11-11',
        quantity: 10
    },
]

const actions = [
    { name: 'selectAll', icon: faCheckDouble, bg: 'success' },
    { name: 'create', icon: faPlus, bg: 'primary' },
    { name: 'delete', icon: faTrash, bg: 'danger' },

]
export default function ProductList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="bg-main">
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this product?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleClose}>Xóa</Button>
                </Modal.Footer>
            </Modal>
            <Row>
                <Col md={2}>
                    <SideBars/>
                </Col>
                <Col md={8}>
                    <h1 className="text-center mb-5 mt-5  text-uppercase">Phê duyệt bài đăng</h1>
                    <div className='bg-white rounded-3 shadow-sm'>
                        <div className='row p-3'>
                            <div className='col-8 d-flex align-items-center justify-content-between w-100'>
                                <div className="col-6 d-flex">
                                    {actions.map((action, index) => (
                                            <button role="button" key={index} className={`border-0 me-1 py-1 text-white px-2 bg-${action.bg}`}>
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
                    <div className="mt-3  bg-white rounded-3 shadow-sm">
                        <Table>
                            <thead>
                                <tr className='border-underline'>
                                    <th>Hình ảnh</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Ngày Đăng</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td className="col-1 p-3"><img src={product.image} alt="" width="100px" /></td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.date}</td>
                                        <td>
                                            <button className="btn btn-success me-2">Xác nhận</button>
                                            <button className="btn btn-danger">Bỏ</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    )
}