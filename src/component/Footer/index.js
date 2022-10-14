import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    // <MDBFooter bgColor='light' classNameName='text-center text-lg-start text-muted'>
    //   <section classNameName='d-flex justify-content-center p-4 border-bottom text-center'>
    //     <div classNameName='me-5 d-none d-lg-block text-center'>
    //       <span>Get connected with us on social networks:</span>
    //     </div>

    //     <div>
    //       <a href='' classNameName='me-4 text-reset'>
    //         <MDBIcon fab icon="facebook-f" />
    //       </a>
    //       <a href='' classNameName='me-4 text-reset'>
    //         <MDBIcon fab icon="twitter" />
    //       </a>
    //       <a href='' classNameName='me-4 text-reset'>
    //         <MDBIcon fab icon="google" />
    //       </a>
    //       <a href='' classNameName='me-4 text-reset'>
    //         <MDBIcon fab icon="instagram" />
    //       </a>
    //       <a href='' classNameName='me-4 text-reset'>
    //         <MDBIcon fab icon="linkedin" />
    //       </a>
    //       <a href='' classNameName='me-4 text-reset'>
    //         <MDBIcon fab icon="github" />
    //       </a>
    //     </div>
    //   </section>

    //   <section classNameName=''>
    //     <MDBContainer classNameName='text-center text-md-start mt-5'>
    //       <MDBRow classNameName='mt-3'>
    //         <MDBCol md="3" lg="4" xl="3" classNameName='mx-auto mb-4'>
    //           <h6 classNameName='text-uppercase fw-bold mb-4'>
    //             <MDBIcon icon="gem" classNameName="me-3" />
    //             OLD MARKET
    //           </h6>
    //           <p>
    //             Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
    //             consectetur adipisicing elit.
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="2" lg="2" xl="2" classNameName='mx-auto mb-4'>
    //           <h6 classNameName='text-uppercase fw-bold mb-4'>Products</h6>
    //           <p>
    //             <a href='#!' classNameName='text-reset'>
    //               Angular
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' classNameName='text-reset'>
    //               React
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' classNameName='text-reset'>
    //               Vue
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' classNameName='text-reset'>
    //               Laravel
    //             </a>
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="3" lg="2" xl="2" classNameName='mx-auto mb-4'>
    //           <h6 classNameName='text-uppercase fw-bold mb-4'>Useful links</h6>
    //           <p>
    //             <a href='#!' classNameName='text-reset'>
    //               Pricing
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' classNameName='text-reset'>
    //               Settings
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' classNameName='text-reset'>
    //               Orders
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' classNameName='text-reset'>
    //               Help
    //             </a>
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="4" lg="3" xl="3" classNameName='mx-auto mb-md-0 mb-4'>
    //           <h6 classNameName='text-uppercase fw-bold mb-4'>Contact</h6>
    //           <p>
    //             <MDBIcon icon="home" classNameName="me-2" />
    //             11 Nguyen Van Linh, Thanh Khe, Da Nang
    //           </p>
    //           <p>
    //             <MDBIcon icon="envelope" classNameName="me-3" />
    //             nguyenthienn3347@gmail.com
    //           </p>
    //           <p>
    //             <MDBIcon icon="phone" classNameName="me-3" /> +84 941 549 525
    //           </p>
    //           <p>
    //             <MDBIcon icon="print" classNameName="me-3" /> + 01 234 567 89
    //           </p>
    //         </MDBCol>
    //       </MDBRow>
    //     </MDBContainer>
    //   </section>

    //   <div classNameName='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    //     © 2021 Copyright: 
    //     <a classNameName='text-reset fw-bold' href='https://www.youtube.com/watch?v=0T3y4pCT9vU'>
    //       oldmarket.com
    //     </a>
    //   </div>
    // </MDBFooter>
    <div id="footer" className="mt-5 bg-footer">
      <div className="container">
        <div className="row pt-5 pb-5 border-bottom border-primary">
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pb-5 text-center text-sm-center text-md-center text-lg-start text-xl-start">
            <div className="mb-4 d-flex d-sm-flex d-md-flex d-lg-block d-xl-block justify-content-center">
              <img src="https://static.chotot.com/storage/marketplace/transparent_logo.png" alt="" />
            </div>
            <div className=''>
              <span className="text-white form-text fst-italic  text-center w-100">
                "Nơi cung cấp các mặt hàng được sử dụng phổ biến trong cuộc sống của sinh viên"
              </span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pb-5">
            <div className="row">
              <div className="col-lg-6 col-xl-6">
                <div className="d-none d-sm-none d-md-none d-lg-flex d-xl-flex text-uppercase fw-bold">
                  <div className="me-5">
                    <div className="mb-4"><a className="text-decoration-none" href=""><span
                      className="text-white text-hover">solutions</span></a></div>
                    <div className="mb-4 "><a className="text-decoration-none" href=""><span
                      className="text-white text-hover">teams</span></a></div>
                    <div className="mb-4 "><a className="text-decoration-none" href=""><span
                      className="text-white text-hover">about</span></a></div>
                  </div>
                  <div>
                    <div className="mb-4 "><a className="text-decoration-none" href=""><span
                      className="text-white text-hover">features</span></a></div>
                    <div className="mb-4 "><a className="text-decoration-none" href=""><span
                      className="text-white text-hover">pricing</span></a></div>
                    <div className="mb-4 "><a className="text-decoration-none" href=""><span
                      className="text-white text-hover">clients</span></a></div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 text-center col-sm-12 text-sm-center col-md-12 text-md-center col-lg-6 text-lg-start col-xl-6 text-xl-start text-white">
                <div className="mb-4">
                  <i className="fa-solid fa-phone me-3"></i>
                  <span>(+1)650-755-2969</span>
                </div>
                <div className="mb-4">
                  <i className="fa-solid fa-envelope me-3"></i>
                  <span>office@anty.app</span>
                </div>
                <div>
                  <i className="fa-solid fa-location-dot me-3"></i>
                  <span>299 judah St, CA 94122</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-sm-block d-md-block d-lg-flex d-xl-flex justify-content-between text-white text-center py-5">
          <div className="d-block d-sm-block d-md-block d-lg-flex d-xl-flex">
            <div className="mb-3"><span className="me-3 form-text">@2022 Old Market. All Rights Reserved</span></div>
            <div className="mb-3"><a href="" className="text-decoration-none">
              <span className="me-3 form-text text-hover"></span>terms of Service</a></div>
            <div className="mb-3"><a href="" className="text-decoration-none">
              <span className="me-3 form-text text-hover"></span>Privacy Policy</a></div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <a href="https://www.facebook.com/antysoftware" className="text-white">
                <span className="me-3">
                <FontAwesomeIcon icon={faFacebook} />
                </span>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/antyapp" className="text-white">
                <span className="me-3">
                <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
            </div>
            <div>
              <a href="https://t.me/antyapp" className="text-white">
                <span className="me-3">
                <FontAwesomeIcon icon={faTelegram} />
                </span>
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                <span className="me-3">
                <FontAwesomeIcon icon={faYoutube} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}