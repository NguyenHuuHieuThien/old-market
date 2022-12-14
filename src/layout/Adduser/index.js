import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Navbars from "../../component/Navbars";
import Footer from "../../component/Footer";
import BgUser from "../../component/BgUser";
import { Link,useParams,useNavigate  } from "react-router-dom";
function Adduser() {
    let { id } = useParams();
    const navigate = useNavigate();
    let [data, setData] = useState({
      username: "",
      email: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      address: "",
      file: "",
      sex: "",
      birthday: "",
    });
    console.log(data);
    // let [loading, setLoading] = useState(false);
    let [dataUpdate, setDataUpdate] = useState({});
    // let location = useLocation();
    //   let productPath = location.pathname.includes("product");
    const handle = (e) => {
      if (id) {
        let newData = { ...dataUpdate };
        newData[e.target.id] = e.target.value;
        if (e.target.id === "files") {
          newData[e.target.id] = e.target.files;
        }
        setDataUpdate(newData);
      } else {
        let newData = { ...data };
        newData[e.target.id] = e.target.value;
        if (e.target.id === "file") {
          newData[e.target.id] = e.target.files[0];
        }
        setData(newData);
      }
    };
    const submit = (e) => {
      e.preventDefault();
  
      if (id) {
        axios
          .put(`http://localhost:8080/product/update/${id}`, dataUpdate)
          .then((res) => {
            console.log("success");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        e.preventDefault();
        let formData = new FormData();
        let publicData = id ? dataUpdate : data;
        console.log(publicData);
        formData.append("address", data.address);
        formData.append("birthday", data.birthday);
        formData.append("email", data.email);
        formData.append("fullName", data.fullName);
        formData.append("password", data.password);
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("sex", data.sex);
        formData.append("username", data.username);
        formData.append("file", data.file);
        axios
          .post(`http://localhost:8080/user/insertUserFile`, formData, {})
          .then((res) => {
              alert("T???o ng?????i d??ng th??nh c??ng");
              navigate("/admin/users")
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    
    return ( 
        <BgUser>
            <form onSubmit={(e) => submit(e)}>
            <div className="px-5 py-3 text-start">
              <h1 className="mb-5 mt-5">Th??m ng?????i d??ng</h1>
              <div className="row ">
                <div className="col-12 co-sm-12 col-md-12 col-lg-6 col-xl-6 pe-5">
                  <div class="mb-3">
                    <label for="email" class="form-label fw-bold">
                      Email
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      type="text"
                      placeholder="Nh???p email..."
                      class="form-control text-white"
                      id="email"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="username" class="form-label fw-bold">
                      T??n T??i kho???n
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      type="text"
                      placeholder="Nh???p t??n t??i kho???n..."
                      class="form-control text-white"
                      id="username"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="fullName" class="form-label fw-bold">
                      H??? t??n
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      type="text"
                      placeholder="Nh???p h??? t??n..."
                      class="form-control text-white"
                      id="fullName"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="sex" class="form-label fw-bold">
                      Gi???i t??nh
                    </label>
                    <div className=" border border-main p-2">
                      <div class="form-check form-check-inline me-3">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="sex"
                          onChange={(e) => handle(e)}
                          value="male"
                        />
                        <label class="form-check-label" for="male">
                          Nam
                        </label>
                      </div>
                      <div class="form-check form-check-inline me-3">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="sex"
                          onChange={(e) => handle(e)}
                          value="female"
                        />
                        <label class="form-check-label" for="female">
                          N???
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="orther"
                          value="3"
                        />
                        <label class="form-check-label" for="orther">
                          Kh??c
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 co-sm-12 col-md-12 col-lg-6 col-xl-6 ps-5">
                  <div class="mb-3">
                    <label for="address" class="form-label fw-bold">
                      ?????a ch???
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      type="text"
                      placeholder="Nh???p ?????a ch???..."
                      class="form-control text-white"
                      id="address"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="phoneNumber" class="form-label fw-bold">
                      S??? ??i???n tho???i
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      type="text"
                      placeholder="Nh???p s??? ??i???n tho???i.."
                      class="form-control text-white"
                      id="phoneNumber"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="birthday" class="form-label fw-bold">
                      Ng??y sinh
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      type="date"
                      class="form-control text-white"
                      id="birthday"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label fw-bold">
                      M???t kh???u
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      type="text"
                      placeholder="Nh???p m???t kh???u.."
                      class="form-control text-white"
                      id="password"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-3 col-12">
                    <input
                      type="file"
                      class="form-control"
                      onChange={(e) => handle(e)}
                      id="file"
                    />
                  </div>
              <div className="mb-5 mt-5 col-12">
                <button className="btn btn-danger rounded-1 py-2 w-100">
                  Th??m
                </button>
              </div>
            </div>
          </form>
        </BgUser>
    
     );
}

export default Adduser;