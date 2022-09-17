import Navbars from "../../component/Navbars"
import Footer from "../../component/Footer"

import Table from 'react-bootstrap/Table';

export default function Carts(){
    return(
        <div>
            <Navbars/>
            <div className="container mt-4">
                <h1 className="mb-4">Cart</h1>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="https://hc.com.vn/i/ecommerce/media/ckeditor_2788029.jpg" className="col-1"/></td>
          <td>Tủ lạnh</td>
          <td>10000</td>
          <td>1</td>
          <td>
            <button className="btn btn-danger">Xóa</button>
          </td>

        </tr>
      </tbody>
    </Table>
    <button className="btn btn-success mr-0">
        Thanh Toán
    </button>
            </div>
            <Footer/>
        </div>
    )
}