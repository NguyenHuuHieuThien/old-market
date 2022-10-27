import Navbars from "../../component/Navbars"
import Footer from "../../component/Footer"
import { useState } from "react"
import axios from "axios"

export default function AddproductPage() {
    const [data, setData] = useState({
        name: "",
        category: "",
        price: "",
        amount: "",
        description: "",
        image: "",
    })
    const handleData = (e) => {
        let newData = { ...data }
        newData[e.target.id] = e.target.value;
        if (e.target.id === "image") {
            newData[e.target.id] = e.target.files[0];
        }
        setData(newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", data.name)
        formData.append("category", data.category)
        formData.append("price", data.price)
        formData.append("amount", data.amount)
        formData.append("description", data.description)
        formData.append("image", data.image)
        axios.post(`http://localhost:3000/product/input/data`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(res => {
            console.log(res)
        })
    }
    return (
        <div>
            <Navbars />
            <div className="container mt-5 mb-5">
                <h1 className="mb-5">New Product</h1>
                <div>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="row">
                            <div className="col-6">
                                <div class="mb-3 row">
                                    <label for="name" class=" col-sm-2 col-form-label">Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" onChange={e => handleData(e)} class="form-control" id="name" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="category" class="col-sm-2 col-form-label">Category</label>
                                    <div class="col-sm-10">
                                        <input type="text" onChange={e => handleData(e)} class="form-control" id="category" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="price" class="col-sm-2 col-form-label">Price</label>
                                    <div class="col-sm-10">
                                        <input type="number" onChange={e => handleData(e)} class="form-control w-50" id="price" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="amount" class="col-sm-2 col-form-label">Amount</label>
                                    <div class="col-sm-10">
                                        <input type="number" onChange={e => handleData(e)} class="form-control w-50" id="amount" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="description" class="col-sm-2 col-form-label">Description</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" onChange={e => handleData(e)} id="description" rows={5}></textarea>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="image" class="col-sm-2 col-form-label">Image</label>
                                    <div class="col-sm-10">
                                        <input type="file" onChange={e => handleData(e)} class="form-control" id="image" accept="image/*" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary px-5 mt-3">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}