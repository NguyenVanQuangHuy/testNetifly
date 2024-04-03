import { Container, Row, Col} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import React, { useState, useEffect, useRef, createContext } from 'react';
const ActionContext = createContext();
const Header = () => {
    const AboutRef = useRef();
    const ExperienceRef = useRef();
    const CertificateRef = useRef();
    const ProjectRef = useRef();
    const [action, setAction] = useState("About");
    useEffect(() => {
        if (AboutRef.current) {
            AboutRef.current.addEventListener('click', () => {
                const check = AboutRef.current.classList.value;
                if (!check.includes('Active')) {
                    AboutRef.current.classList.add('Active');
                    setAction("About");
                    ExperienceRef.current.classList.remove('Active');
                    CertificateRef.current.classList.remove('Active');
                    ProjectRef.current.classList.remove('Active');
                }
                else {
                    setAction("About");
                }
            });

        }
        if (ExperienceRef.current) {
            ExperienceRef.current.addEventListener('click', () => {
                const check = ExperienceRef.current.classList.value;
                if (!check.includes('Active')) {
                    ExperienceRef.current.classList.add('Active');
                    setAction("Experience");
                    AboutRef.current.classList.remove('Active');
                    CertificateRef.current.classList.remove('Active');
                    ProjectRef.current.classList.remove('Active');
                }
                else {
                    setAction("Experience");
                }
            })
        }
        if (CertificateRef.current) {
            CertificateRef.current.addEventListener('click', () => {
                const check = CertificateRef.current.classList.value;
                if (!check.includes('Active')) {
                    CertificateRef.current.classList.add('Active');
                    setAction("Certificate");
                    AboutRef.current.classList.remove('Active');
                    ExperienceRef.current.classList.remove('Active');
                    ProjectRef.current.classList.remove('Active');
                }
                else {
                    setAction("Certificate");
                }
            })
        }
        if (ProjectRef.current) {
            ProjectRef.current.addEventListener('click', () => {
                const check = ProjectRef.current.classList.value;
                if (!check.includes('Active')) {
                    ProjectRef.current.classList.add('Active');
                    setAction('Project');
                    AboutRef.current.classList.remove('Active');
                    CertificateRef.current.classList.remove('Active');
                    ExperienceRef.current.classList.remove('Active');
                }
                else {
                    setAction('Project')
                }
            })
        }
    }, [])
    return (
        <Container fluid>
            <Row className='justify-content-between align-items-center Header'>
                <Col xs={5}>
                    <div className='ms-3 fs-4 d-flex align-items-center justify-content-center brand category'>Nguyễn Văn Quang Huy</div>
                </Col>
                <Col xs={7}>
                    <div className='d-none d-lg-flex align-items-center justify-content-center'>
                        <div className='me-5 fs-5 category Active' ref={AboutRef}>About Me</div>
                        <div className='me-5 fs-5 category' ref={ExperienceRef}>Experience</div>
                        <div className='me-5 fs-5 category' ref={CertificateRef}>Certificate</div>
                        <div className='me-5 fs-5 category' ref={ProjectRef}>Personal project</div>
                    </div>
                    {/* <Dropdown as={ButtonGroup} className='d-md-block d-lg-none d-xl-none d-xxl-none d-sm-block'>
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            <i class="bi bi-list-ul fs-4"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item ref={AboutRef}>About Me</Dropdown.Item>
                            <Dropdown.Item ref={ExperienceRef}>Experience</Dropdown.Item>
                            <Dropdown.Item ref={CertificateRef}>Certificate</Dropdown.Item>
                            <Dropdown.Item ref={ProjectRef}>Personal project</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </Col>
            </Row>
            <ActionContext.Provider value={action}>
                <Outlet />
            </ActionContext.Provider>
        </Container>
    )
}
export { Header, ActionContext };