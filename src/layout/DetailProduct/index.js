import ImageGallery from 'react-image-gallery';
import { Row, Col } from 'react-bootstrap'

import Navbars from "../../component/Navbars"
import Footer from "../../component/Footer"

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

export default function DetailProduct() {
    return (
        <div>
            <Navbars />
            <div className='container mt-4'>
                <Row>
                    <Col md={6}>
                        <ImageGallery items={images} />
                    </Col>
                    <Col md={6}>
                        <h1>Product Name</h1>
                        <h3>Price: 1000$</h3>
                        <p>Product Description</p>
                    </Col>
                    
                </Row>
            </div>
            <Footer />
        </div>
    )
}




