import { Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';

const AboutComponent = () => {
    const CopyTo = (email) => {
        navigator.clipboard.writeText(email)
            .then(function () {
                // Thông báo cho người dùng rằng nội dung đã được sao chép
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Copy done",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(function (error) {
                // Xử lý lỗi nếu không thể sao chép vào clipboard
                console.error("Lỗi sao chép vào clipboard: ", error);
            });
    }
    return (
        <>
            <div className='Title text-center d-none d-lg-block d-md-flex mt-3'>
                <p className='fs-1 fw-bold'>About Me</p>
            </div>
            <Row className='d-none d-lg-flex align-items-center'>
                <Col xs={7}>
                    <div className='Personalinfo'>
                        <p className='fs-3 fw-bold'>Personal information</p>
                        <div className='d-flex'>
                            <i className="bi bi-person-fill fs-5"></i>
                            <p className='fs-5 ms-2'> Nguyen Van Quang Huy</p>
                        </div>
                        <div className='d-flex'>
                            <i className="bi bi-telephone-fill fs-5"></i>
                            <p className='fs-5 ms-2'> 0964302864</p>
                        </div>
                        <div className='d-flex'>
                            <i className="bi bi-envelope-at-fill fs-5"></i>
                            <p className='fs-5 ms-2'> nguyenvanquanghuy051102@gmail.com</p>
                            <Button className='ButtonCopy ms-2' onClick={() => CopyTo('nguyenvanquanghuy051102@gmail.com')}><i class="bi bi-clipboard"></i></Button>
                        </div>
                        <div className='d-flex'>
                            <i className="bi bi-facebook fs-5"></i>
                            <a href='https://www.facebook.com/nguyenhuy.2305' className='fs-5 ms-2'>https://www.facebook.com/nguyenhuy.2305</a>
                        </div>
                        <div className='d-flex'>
                            <i class="bi bi-linkedin fs-5"></i>
                            <a href='https://www.linkedin.com/in/huy-nguyen-7a9869268/' className='fs-5 ms-2'>https://www.linkedin.com/in/huy-nguyen-7a9869268/</a>
                        </div>
                    </div>
                    <div className='Personalsummury mt-3'>
                        <p className='fs-3 fw-bold'>Personal summary</p>
                        <p className='fs-5'>I am a 4rd-year student majoring in software engineering at FPT University. I have more than 1 year of experience working with HTML, CSS, JavaScript, Bootstrap, Reactjs, and Java. I have 4 months of working experience in the FPT software corporation, GEC unit. I always take the time to learn and apply new technologies to my projects to improve project quality and personal skills.</p>
                    </div>
                    <div className='Personalgoals mt-3'>
                        <p className='fs-3 fw-bold'>Overview of personal goals</p>
                        <p className='fs-5'>As an Intern working in line with your values ​​and goals is the desire of every person. I want to have the opportunity to exchange and accompany colleagues in a professional and positive environment. This will also motivate me to learn and improve my skills at work constantly.</p>
                    </div>
                </Col>
                <Col xs={5}>
                    <div className='Avatar'>
                        <img src="https://scontent.fhan20-1.fna.fbcdn.net/v/t1.6435-9/110317085_601213424160293_8455524917884957678_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeEgWCqDzI5EciyaK1jEG44gA3SBytfYrJwDdIHK19isnIWnoMTyMMlmIZJizM1-HRCSbWM3t75xKFT_gAfy9kho&_nc_ohc=KhNp6zw-WkwAX8PQwlW&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDMKIP0hH3r7wMz-ANnmhGpP0L3_eEZs6xJqy8dP9m-lw&oe=65B34B3A" class="img-fluid" alt="..." />
                    </div>
                </Col>
            </Row>
            <Row className='d-md-flex d-lg-none d-xl-none d-xxl-none d-sm-flex align-items-center'>
                <Col xs={7}>
                    <div>
                        <div className='Personalinfo'>
                            <p className='fs-4 fw-bold'>Personal information</p>
                            <div className='d-flex'>
                                <i class="bi bi-person-fill fs-5"></i>
                                <p className=' ms-2'> Nguyen Van Quang Huy</p>
                            </div>
                            <div className='d-flex'>
                                <i class="bi bi-telephone-fill fs-5"></i>
                                <p className='ms-2'> 0964302864</p>
                            </div>
                            <div className='d-flex'>
                                <i class="bi bi-envelope-at-fill fs-5"></i>
                                <p className='ms-2'> nguyenvanquanghuy051102@gmail.com</p>
                                <Button variant="success" className='ButtonCopy ms-2' onClick={() => CopyTo('nguyenvanquanghuy051102@gmail.com')}><i class="bi bi-clipboard"></i></Button>
                            </div>
                            <div className='d-flex'>
                                <i class="bi bi-facebook fs-5"></i>
                                <a href='https://www.facebook.com/nguyenhuy.2305' className=' ms-2'>https://www.facebook.com/nguyenhuy.2305</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={5}>
                    <div className='Avatar'>
                        <img src="https://scontent.fhan20-1.fna.fbcdn.net/v/t1.6435-9/110317085_601213424160293_8455524917884957678_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeEgWCqDzI5EciyaK1jEG44gA3SBytfYrJwDdIHK19isnIWnoMTyMMlmIZJizM1-HRCSbWM3t75xKFT_gAfy9kho&_nc_ohc=KhNp6zw-WkwAX8PQwlW&_nc_ht=scontent.fhan20-1.fna&oh=00_AfDMKIP0hH3r7wMz-ANnmhGpP0L3_eEZs6xJqy8dP9m-lw&oe=65B34B3A" class="img-fluid" alt="..." />
                    </div>
                </Col>
                <div className='Personalsummury'>
                    <p className='fs-3 fw-bold'>Personal summary</p>
                    <p className=''>I am a 4rd-year student majoring in software engineering at FPT University. I have experience working with HTML, CSS, javascript, Bootstrap, Reactjs, Nodejs, and Java. I have 4 months of working experience in the FPT software corporation, GEC unit. I always take the time to learn and apply new technologies to my projects to improve project quality and personal skills.</p>
                </div>
                <div className='Personalgoals'>
                    <p className='fs-3 fw-bold'>Overview of personal goals</p>
                    <p className=''>As an Intern working in line with your values ​​and goals is the desire of every person. I want to have the opportunity to exchange and accompany colleagues in a professional and positive environment. This will also motivate me to learn and improve my skills at work constantly.</p>
                </div>
            </Row>
        </>

    )
}
export default AboutComponent;