import { Container, Row, Col } from 'react-bootstrap';
import React from "react";
import Slider from "react-slick";
const ExperienceComponent = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '2px',
        autoplay: true,
        autoplaySpeed: 2000,
    };
    var setting2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <div className='Title text-center d-none d-lg-block d-md-flex mt-3'>
                <p className='fs-1 fw-bold'>Experience</p>
            </div>
            <Row className='d-none d-lg-flex align-items-top'>
                <Col xs={6}>
                    <div class="grid-container">
                        <div class="grid-item">
                            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" class="img-fluid" alt="..." />
                        </div>
                        <div class="grid-item">
                            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" class="img-fluid" alt="..." />
                        </div>
                        <div class="grid-item">
                            <img src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" class="img-fluid" alt="..." />
                        </div>
                        <div class="grid-item">
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" class="img-fluid" alt="..." />
                        </div>
                        <div class="grid-item">
                            <img src="https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure.png" class="img-fluid" alt="..." />
                        </div>
                        <div class="grid-item">
                            <img src="https://i.pinimg.com/originals/8d/0c/72/8d0c72f49aaa0a6a35d34c7b98035baa.jpg" class="img-fluid" alt="..." />
                        </div>
                        <div class="grid-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" class="img-fluid" alt="..." />
                        </div>
                        <div class="grid-item">
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png" class="img-fluid" alt="..." />
                        </div>
                        <div class="grid-item">
                            <img src="https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp" class="img-fluid" alt="..." />
                        </div>
                        <div class="grid-item">
                            <img src="https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png" class="img-fluid" alt="..." />
                        </div>
                    </div>
                </Col>
                <Col xs={6}>
                    <div className='CardExperience d-flex mt-4'>
                        <div className='ImgCard'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_fpt_university.jpg" class="img-fluid" alt="..." />
                        </div>
                        <div className=''>
                            <p className='fw-bold mb-3'>FPT University</p>
                            <p className='fw-bold mb-3'>Student</p>
                            <p className='fw-bold mb-3'>Studied at FPT University for 4 years from 2020 - 2024</p>
                        </div>
                    </div>
                    <div className='CardExperience d-flex mt-4'>
                        <div className='ImgCard'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_fpt_university.jpg" class="img-fluid" alt="..." />
                        </div>
                        <div className=''>
                            <p className='fw-bold mb-3'>FPT University</p>
                            <p className='fw-bold mb-3'>Student</p>
                            <p className='fw-bold mb-3'>Studied at FPT University for 4 years from 2020 - 2024</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='d-md-flex d-lg-none d-xl-none d-xxl-none d-sm-flex align-items-center'>
                <Slider {...settings}>
                    <div class="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" class="img-fluid" alt="..." />
                    </div>
                    <div class="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" class="img-fluid" alt="..." />
                    </div>
                    <div class="grid-item">
                        <img src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" class="img-fluid" alt="..." />
                    </div>
                    <div class="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" class="img-fluid" alt="..." />
                    </div>
                    <div class="grid-item">
                        <img src="https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure.png" class="img-fluid" alt="..." />
                    </div>
                    <div class="grid-item">
                        <img src="https://i.pinimg.com/originals/8d/0c/72/8d0c72f49aaa0a6a35d34c7b98035baa.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="grid-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" class="img-fluid" alt="..." />
                    </div>
                    <div class="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png" class="img-fluid" alt="..." />
                    </div>
                    <div class="grid-item">
                        <img src="https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp" class="img-fluid" alt="..." />
                    </div>
                    <div class="grid-item">
                        <img src="https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png" class="img-fluid" alt="..." />
                    </div>
                </Slider>
                <Slider {...setting2}>
                    <div className='CardExperience d-flex mt-4'>
                        <div className='ImgCard'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_fpt_university.jpg" class="img-fluid" alt="..." />
                        </div>
                        <div className='ms-2'>
                            <p className='fw-medium'>FPT University</p>
                            <p className='fw-medium'>Student</p>
                            <p className='fw-medium'>Studied at FPT University for 4 years from 2020 - 2024</p>
                        </div>
                    </div>
                    <div className='CardExperience d-flex mt-4'>
                        <div className='ImgCard'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_fpt_university.jpg" class="img-fluid" alt="..." />
                        </div>
                        <div className='ms-2'>
                            <p className='fw-medium'>FPT University</p>
                            <p className='fw-medium'>Student</p>
                            <p className='fw-medium'>Studied at FPT University for 4 years from 2020 - 2024</p>
                        </div>
                    </div>
                </Slider>
            </Row>
        </>

    )
}

export default ExperienceComponent;