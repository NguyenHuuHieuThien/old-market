import Navbars from "../../component/Navbars"
import Footer from "../../component/Footer"
export default function () {
    return (
        <div>
            <Navbars />
            <div>
                <div class="bg-header d-flex justify-content-center align-items-center">
                    <h1>Support page</h1>
                </div>
                <div class="row">
                    <div class="col-12  py-5 bg-custom">
                        <div class="container p-4">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                    <h2 class="mb-4 fw-bold text-color">Support</h2>
                                    <div class="ms-5">
                                        <div class="mb-3">
                                            <i class="fa-solid fa-phone me-3 bg-icon"></i>
                                            <span class="text-white">contact for us</span>
                                        </div>
                                        <div class="mb-3">
                                            <i class="fa-solid fa-envelope me-3 bg-icon"></i>
                                            <span class="text-white ">nguyenthienn3347@gmail.com</span>
                                        </div>
                                        <div class="mb-3">
                                            <i class="fa-solid fa-location-dot me-3 bg-icon"></i>
                                            <span class="text-white ">61 Thanh Luong 21, Hoa Xuan, Cam Le, Da Nang</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                    <form>
                                        <h2 class="mb-4 fw-bold text-color">Message</h2>
                                        <div class="border border-primary rounded-3">
                                            <div class="d-block d-sm-block d-md-flex d-lg-flex d-xl-flex  justify-content-between">
                                                <div class="p-1 bg-table m-3 rounded-3">
                                                    <i class="fa-solid fa-user ms-3 me-3 fs-4"></i>
                                                    <input type="text"
                                                        placeholder="{{'enter_name'|translate}}"
                                                        class="border-0 p-2 bg-table text-white" />
                                                </div>
                                                <div class="p-1 bg-table m-3 rounded-3 d-block">
                                                    <i class="fa-solid fa-envelope ms-3 me-3 fs-4"></i>
                                                    <input type="text"
                                                        placeholder="{{'enter_email'|translate}}"
                                                        class="bg-table border-0 text-white p-2" />
                                                </div>
                                            </div>
                                            <div class="w-100 p-3">
                                                <textarea class="w-100 bg-custom text-white rounded-3 border-0 bg-table p-3" name=""
                                                    id="" rows="8"
                                                    placeholder="{{'enter_message'|translate}}"></textarea>
                                            </div>
                                            <div class="p-3">
                                                <div>
                                                    <button class="btn btn-primary rounded-3 w-25 p-3"
                                                        type="submit">Gửi</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div >
    )
}