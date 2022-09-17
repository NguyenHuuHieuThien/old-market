// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Row, Col, Badge } from 'react-bootstrap';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MDBInput } from 'mdb-react-ui-kit';


import Navbars from "../../component/Navbars"
import Footer from "../../component/Footer"
import Pagination from '../../component/Pagination';
const categories = [
    'table',
    'motobike',
    'chair',
    'cabinet',
    'bed',
    'clother',
    'shoes',
    'watch',
    'bag',
    'phone',
    'laptop',
    'computer',
]

const products = [
    { name: 'Table', group: 'table', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a table' },
    { name: 'Motobike', group: 'motobike', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a motobike' },
    { name: 'Chair', group: 'chair', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a chair' },
    { name: 'Cabinet', group: 'cabinet', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a cabinet' },
    { name: 'Bed', group: 'bed', price: 100, image: 'https://cdn.popsww.com/blog/sites/2/2021/11/top-phim-co-trang-trung-quoc-moi.jpg', description: 'this is a bed' },
]

export default function ProductPage() {
    const selectCategory = (category) => {
        console.log(categories.find(item => item.group === category))
    }
    return (
        <div>
            <Navbars />
            <div className='container'>

                <h1 className='text-uppercase me-5'>Products</h1>
                <ul className='d-flex list-unstyled gap-2 mt-3'>
                    {categories.map((category, index) =>
                        <li key={index} className='border border-primary ' role="button">
                            <a className='text-xs text-decoration-none p-2'>{category}</a>
                        </li>
                    )}
                </ul>
                <Col xs={6}>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="search..." />
                    <button class="btn btn-warning" type="button" id="button-addon2">Tìm Kiếm</button>
                </div>
                </Col>
                <Row>
                    {products.map((product, index) =>

                        <Col md={3} key={index}>
                            <div className='border border-primary mb-3'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://startuanit.net/wp-content/uploads/2021/06/hinh-nen-hai-san-cho-may-tinh-10.jpg"
                                        alt="green iguana"
                                        className='p-2'
                                    />
                                    <CardContent>

                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" color="text.secondary" component="div">
                                            <Badge className='me-2' bg="danger" onClick={() => selectCategory(product.group)}>{product.group}</Badge>
                                            <Badge bg="warning">Price</Badge>{product.price}$

                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' variant="contained" color="success">Buy</Button>
                                        <Button size='small' variant="contained" color="info">Learn more</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Col>
                    )}
                </Row>
                <div className='d-flex justify-content-center mt-4 mb-4'>
                    <Pagination />
                </div>
            </div>
            <Footer />
        </div >
    )
}