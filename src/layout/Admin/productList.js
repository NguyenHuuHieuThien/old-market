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
        id: 1,
        name: 'table',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a table',
        date: '2021-11-11',
        quantity: 10
    },
    {
        id: 2,
        name: 'motobike',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a motobike',
        date: '2021-11-11',
        quantity: 10
    },
    {
        id: 3,
        name: 'chair',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a chair',
        date: '2021-11-11',
        quantity: 10
    },
    {
        id: 4,
        name: 'cabinet',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a cabinet',
        date: '2021-11-11',
        quantity: 10
    },
    {
        id: 5,
        name: 'bed',
        price: 100,
        image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg',
        description: 'this is a bed',
        date: '2021-11-11',
        quantity: 10
    },
]


export default function ProductList() {
    const [show, setShow] = useState(false);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [checkList, setCheckList] = useState([]);
    const [productsList, setProductsList] = useState(products);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const checkAll = () => {
        setIsCheckAll(!isCheckAll);
        if (!isCheckAll) {
            setCheckList(products.map(item => item.id));
        } else {
            setCheckList([]);
        }

    }
    const checked = id => {
        if (checkList.includes(id)) {
            setCheckList(checkList.filter(item => item !== id));
        } else {
            setCheckList([...checkList, id]);
        }
        // setProductsList(productsList.map(item=>{
        //     item.checked = checkList.includes(item.id);
        //     return item
        // }))
       
    }
    console.log(checkList);
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
                    <SideBars />
                </Col>
                <Col md={8}>
                    <h1 className="text-center mb-5 mt-5  text-uppercase">Phê duyệt bài đăng</h1>
                    <div className='bg-white rounded-3 shadow-sm'>
                        <div className='row p-3'>
                            <div className='col-8 d-flex align-items-center justify-content-between w-100'>
                                <div className="col-6 d-flex">
                                    <button role="button" onClick={checkAll} className={`border-0 me-1 py-1 text-white px-2 bg-success`}>
                                        <FontAwesomeIcon icon={faCheckDouble} className="mr-0" /> selectAll
                                    </button>
                                    <button role="button" className={`border-0 me-1 py-1 text-white px-2 bg-primary`}>
                                        <FontAwesomeIcon icon={faPlus} className="mr-0" /> create
                                    </button>
                                    <button role="button" className={`border-0 me-1 py-1 text-white px-2 bg-danger`}>
                                        <FontAwesomeIcon icon={faTrash} className="mr-0" /> delete
                                    </button>
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
                                    <th></th>
                                    <th>Hình ảnh</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Ngày Đăng</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsList.map((product, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input className="form-check-input" type="checkbox"
                                                onChange={() => checked(product.id)} checked={checkList.includes(product.id)} />
                                        </td>
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