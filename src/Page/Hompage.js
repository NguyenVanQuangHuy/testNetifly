import AboutComponent from "../Component/About.js";
import ExperienceComponent from "../Component/Experience.js";
import CertificateComponent from "../Component/Certificate.js";
import ProjectComponent from "../Component/Project.js";
import Footer from "../Component/Footer.js";
import { Container, Row, Col } from 'react-bootstrap';
import React, { useRef, useEffect, useState, useContext } from 'react';
import { ActionContext } from "../Component/Header.js";
import SliderComponent from "../Component/Slider.js";
const HomePage = () => {
    const actions = useContext(ActionContext);
    const ComponentAbout = useRef();
    const ComponentExperience = useRef();
    const ComponentCertificate = useRef();
    const ComponentProject = useRef();
    useEffect(() => {
        if (actions === "About") {
            ComponentAbout.current.scrollIntoView(false);
        }
        if (actions === "Experience") {
            ComponentExperience.current.scrollIntoView(false);
        }
        if (actions === "Certificate") {
            ComponentCertificate.current.scrollIntoView(false);
        }
        if (actions === "Project") {
            ComponentProject.current.scrollIntoView(false);
        }
    }, [actions])
    return (
        <>

            <SliderComponent />

            <Container ref={ComponentAbout}>
                <AboutComponent />
            </Container>
            <Container ref={ComponentExperience}>
                <ExperienceComponent />
            </Container>
            <Container ref={ComponentCertificate}>
                <CertificateComponent />
            </Container>
            <Container ref={ComponentProject}>
                <ProjectComponent />
            </Container>
            <Footer />
        </>
    )
}
export default HomePage;