import { Container, Row, Col } from 'react-bootstrap';
import React from "react";
import Slider from "react-slick";
import picture from "../image/agileSoftware.png"
import picture2 from "../image/interactivityWithJavaScript.png"
import picture3 from "../image/introCss.png"
import picture4 from "../image/introHtml5.png"
import picture5 from "../image/Screenshot 2024-01-10 233424.png"
import picture6 from "../image/Screenshot 2024-01-10 233607.png"
import picture7 from "../image/Screenshot 2024-01-10 233823.png"
import picture8 from "../image/Screenshot 2024-01-10 234014.png"
import picture9 from "../image/Screenshot 2024-01-10 234146.png"
import picture10 from "../image/Screenshot 2024-01-10 234247.png"
import picture11 from "../image/Screenshot 2024-01-10 234402.png"
import picture12 from "../image/Screenshot 2024-01-10 234519.png"
import picture13 from "../image/Screenshot 2024-01-10 234610.png"
import picture14 from "../image/softwareDevelopment.png"
import picture15 from "../image/softwareDevelopmentLifecycle.png"
import picture16 from "../image/softwareDevelopmentProcessesAndMethodologies.png"
import picture17 from "../image/webDesignForEveryBody.png"
import picture18 from "../image/webDesignForEveryBody2.png"

const CertificateComponent = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <div className='Title text-center d-none d-lg-block d-md-flex mt-3 mb-5'>
                <p className='fs-1 fw-bold'>Certificate</p>
            </div>
            <Row className=' align-items-top'>
                <Slider {...settings} centerMode={true}>
                    <div className='CarsCertificate'>
                        <img src={picture} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture2} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture3} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture4} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture5} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture6} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture7} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture8} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture9} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture10} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture11} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture12} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture13} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture14} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture15} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture16} class="img-fluid" alt="..." />
                    </div>
                    <div className='CarsCertificate'>
                        <img src={picture17} class="img-fluid" alt="..." />
                    </div><div className='CarsCertificate'>
                        <img src={picture18} class="img-fluid" alt="..." />
                    </div>
                </Slider>
            </Row>
        </>

    )
}

export default CertificateComponent;