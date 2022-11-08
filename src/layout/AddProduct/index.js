import { useState } from "react"
import axios from "axios"

import Navbars from "../../component/Navbars"
import Footer from "../../component/Footer"
import BgUser from "../../component/BgUser"
export default function AddproductPage() {
    const [data, setData] = useState({
        name: "",
        category: "",
        price: "",
        amount: "",
        description: "",
        files: "",
        tradePark: "",
    })
    const handle = (e) => {
        let newData = { ...data }
        newData[e.target.id] = e.target.value;
        if (e.target.id === "files") {
            newData[e.target.id] = e.target.files;
        }
        setData(newData);
    }

    const submit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("productName", data.productName)
        formData.append("price", data.price)
        formData.append("description", data.description)
        formData.append("tradePark", data.tradePark)
        if (data && data.files.length > 0) {
            for (let i = 0; i < data.files.length; i++) {
                formData.append('files', data.files[i])
            }
        }
        axios.post(`http://localhost:3000/product/input/data`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(res => {
            console.log(res)
        })
    }
    return (
        <BgUser>
            <form onSubmit={(e) => submit(e)}>
                <div className="px-5 py-3 text-start">
                    <h1 className="mb-5 mt-5">Đăng bán Sản phẩm</h1>
                    <div className="row ">
                        <div className="col-12 co-sm-12 col-md-12 col-lg-6 col-xl-6 pe-5">
                            <div class="mb-3">
                                <label for="email" class="form-label fw-bold">
                                    Tên sản phẩm
                                </label>
                                <input
                                    onChange={(e) => handle(e)}
                                    type="text"
                                    placeholder="Nhập email..."
                                    class="form-control text-white"
                                    id="email"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="price" class="form-label fw-bold">
                                    Giá
                                </label>
                                <input
                                    onChange={(e) => handle(e)}
                                    type="number"
                                    placeholder="Nhập giá..."
                                    class="form-control text-white"
                                    id="price"
                                />
                            </div>
                        </div>
                        <div className="col-12 co-sm-12 col-md-12 col-lg-6 col-xl-6 ps-5">
                            <div className="row">
                                <div className="col-6">
                                    <div class="mb-3">
                                        <label for="amount" class="form-label fw-bold">
                                            Số lượng
                                        </label>
                                        <input
                                            onChange={(e) => handle(e)}
                                            type="text"
                                            placeholder="Nhập số lượng..."
                                            class="form-control text-white"
                                            id="amount"
                                        />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div class="mb-3">
                                        <label for="tradePark" class="form-label fw-bold">
                                            Trade Park
                                        </label>
                                        <input
                                            onChange={(e) => handle(e)}
                                            type="text"
                                            placeholder="Nhập trade park..."
                                            class="form-control text-white"
                                            id="tradePark"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div class="mt-3">
                                <input
                                    type="file"
                                    class="form-control"
                                    onChange={(e) => handle(e)}
                                    id="files"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label fw-bold">Mô tả</label>
                        <textarea class="form-control" placeholder="Nhập mô tả..." id="description" rows="3"></textarea>
                    </div>
                    <div className="mb-5 mt-5 col-12">
                        <button className="btn btn-danger rounded-1 py-2 w-100">
                            Thêm
                        </button>
                    </div>
                </div>
            </form>
        </BgUser>
    )
}