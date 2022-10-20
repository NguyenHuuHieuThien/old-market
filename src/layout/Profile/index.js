import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
} from 'mdb-react-ui-kit';

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Navbars from '../../component/Navbars';
import Footer from '../../component/Footer';
import MyCollapse from '../../component/Collapse';
export default function ProfilePage() {
    const [open, setOpen] = useState(false);
    // const isFocus = useRef();
    // const focusInput = () => {
    //     isFocus.current.focus();
    // };
    return (
        <>
            <Navbars />
            <section style={{ backgroundColor: '#eee' }}>
                <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBCol>
                            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                                <MDBBreadcrumbItem>
                                    <Link to='/'></Link>
                                </MDBBreadcrumbItem>
                                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                            </MDBBreadcrumb>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <div className='d-flex justify-content-center'>
                                        <MDBCardImage
                                            src="https://cdnmedia.tinmoi.vn/upload/thanhxuanbtv/2021/08/06/luu-thi-thi-de-toc-ngan-khien-cnet-chan-dong-vi-kem-sac-va-tam-thuong-1628219036-3.jpg"
                                            alt="avatar"
                                            className="rounded-pill"
                                            style={{ width: '150px', height: '150px' }}
                                            fluid />
                                    </div>
                                    <div className='mt-3 mb-5'>
                                        <span className="text-muted mb-1 d-block ">Full Stack Developer</span>
                                        <span className="text-muted mb-4">Bay Area, San Francisco, CA</span>
                                    </div>
                                    <div className="d-flex justify-content-center mb-2">
                                        <MDBBtn>Follow</MDBBtn>
                                        <MDBBtn outline className="ms-1">Message</MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4 mb-lg-0">
                                <MDBCardBody className="p-0">
                                    <MDBListGroup flush className="rounded-3">
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fas icon="globe fa-lg text-warning" />
                                            <MDBCardText>https://mdbootstrap.com</MDBCardText>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                            <MDBCardText>mdbootstrap</MDBCardText>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                            <MDBCardText>@mdbootstrap</MDBCardText>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                            <MDBCardText>mdbootstrap</MDBCardText>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                            <MDBCardText>mdbootstrap</MDBCardText>
                                        </MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="8">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Full Name</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="7">
                                            <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                                            <MyCollapse open={open} children='abc' id="fullname" />


                                        </MDBCol>
                                        <MDBCol sm="2">
                                            <MDBCardText className="text-muted">
                                                <FontAwesomeIcon role='button' aria-expanded={open} aria-controls="fullname" onClick={() => setOpen(!open)} icon={faPenToSquare} />
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Email</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="7">
                                            <MDBCardText className="text-muted">example@example.com</MDBCardText>
                                            <MyCollapse open={open} children='bca' id="email"/>
 
                                        </MDBCol>
                                        <MDBCol sm="2">
                                            <MDBCardText className="text-muted">
                                                <FontAwesomeIcon role='button' aria-expanded={open} aria-controls="email" onClick={() => setOpen(!open)} icon={faPenToSquare} />
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Phone</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="7">
                                            <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="2">
                                            <MDBCardText className="text-muted"><FontAwesomeIcon role='button' icon={faPenToSquare} /></MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Mobile</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="7">
                                            <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="2">
                                            <MDBCardText className="text-muted"><FontAwesomeIcon role='button' icon={faPenToSquare} /></MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Address</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="7">
                                            <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="2">
                                            <MDBCardText className="text-muted"><FontAwesomeIcon role='button' icon={faPenToSquare} /></MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBRow>
                                <MDBCol md="12">
                                    <MDBCard className="mb-4">
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Full Name</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="7">
                                                    <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="2">
                                                    <MDBCardText className="text-muted"><FontAwesomeIcon role='button' icon={faPenToSquare} /></MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Email</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="7">
                                                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="2">
                                                    <MDBCardText className="text-muted"><FontAwesomeIcon role='button' icon={faPenToSquare} /></MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Phone</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="7">
                                                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="2">
                                                    <MDBCardText className="text-muted"><FontAwesomeIcon role='button' icon={faPenToSquare} /></MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Mobile</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="7">
                                                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="2">
                                                    <MDBCardText className="text-muted"><FontAwesomeIcon role='button' icon={faPenToSquare} /></MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Address</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="7">
                                                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="2">
                                                    <MDBCardText className="text-muted"><FontAwesomeIcon role='button' icon={faPenToSquare} /></MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                {/* <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol> */}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <Footer />
        </>
    );
}