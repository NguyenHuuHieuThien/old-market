import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Navbars from "../../component/Navbars";
import Footer from "../../component/Footer";
function Adduser() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        image: "",
    });
    const [avatar, setAvatar] = useState();

    useEffect(()=>{
        //clean up
        return ()=>{
           avatar && URL.revokeObjectURL(avatar.preview)
        }

    },[avatar])
    const handle = e => {
        let newData = { ...data }
        newData[e.target.id] = e.target.value;
        if (e.target.id === "image") {
            newData[e.target.id] = e.target.files[0];
            let file = e.target.files[0];
            file.preview = URL.createObjectURL(file);
            setAvatar(file);
        }
        setData(newData);
        
    }
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        let formData = new FormData();
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("password", data.password)
        formData.append("phone", data.phone)
        formData.append("address", data.address)
        formData.append("file", data.image)
        axios.post(`http://localhost:8080/user/insertUserFIle`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(res => {
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
        
    }
    
    return ( 
        <div>
            <Navbars />
            <div className="container mt-5 mb-5">
                <h1 className="mb-5">Thêm người dùng</h1>
                <div>
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-4 pe-5">                             
                                <div class="mb-3 text-center">
                                    <div className="d-flex justify-content-center">
                                    <div className="me-5 mb-5 d-flex justify-content-center align-items-center">
                                        <img src={avatar? avatar.preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8NfrKHYJHjf3FxKhrD9OEO17wd6YXGzfs_j3lDUFz7JsGQZR09IyyD9EVo6Z3jxH3MQ&usqp=CAU"} alt=""
                                            style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                                    </div>
                                    </div>
                                    <div>
                                        <label for="image" htmlFor="image" className="form-label upload p-2 px-3 text-white">
                                            <FontAwesomeIcon icon={faPlus} className="me-2" />
                                            Tải lên
                                        </label>
                                    </div>
                                    <input type="file" onChange={e => handle(e)} className="form-control d-none" id="image" />
                                </div>
                               
                                <button type="submit" className="btn btn-primary rounded-1 px-5 mt-3">Submit</button>

                            </div>
                            <div className="col-8 pe-5 text-start">
                                <div class="mb-3">
                                    <label for="name" className="form-label">Tên tài khoản</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control" id="name" />
                                </div>
                                <div class="mb-3">
                                    <label for="name" className="form-label">Họ và tên</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control" id="name" />
                                </div>
                                <div class="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" onChange={e => handle(e)} className="form-control" id="email" />
                                </div>

                                <div class="mb-3">
                                    <label for="address" className="form-label">Địa chỉ</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control w-50" id="address" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" className="form-label">Mật khẩu</label>
                                    <input type="password" onChange={e => handle(e)} className="form-control" id="password" />
                                </div>
                                <div class="mb-3">
                                    <label for="phone" className="form-label">Số điện thoại</label>
                                    <input type="text" onChange={e => handle(e)} className="form-control w-50" id="phone" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    
     );
}

export default Adduser;