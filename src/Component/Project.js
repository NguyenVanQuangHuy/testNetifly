import {Row, Col } from 'react-bootstrap';
import React from "react";
import picture from '../image/webFpt.png';
const ProjectComponent = () => {
    return (

        <>
            <div className='Title text-center d-none d-lg-block d-md-flex mt-3 mb-5'>
                <p className='fs-1 fw-bold'>Project</p>
            </div>
            <Row className='d-flex align-items-top justify-content-between CardsProject'>
                <div className='CardProjectTitle'>
                    <p className='fs-5 fw-bold'>Fsoft Websites</p>
                    <p>16/04/2023 - 16/08/2023</p>
                </div>
                <Col xs={4}>
                    <div className='CardsProjectImg'>
                        <img src={picture} class="img-fluid" alt="..." />
                    </div>
                </Col>
                <Col xs={8}>
                    <div className='d-flex'>
                        <p className='fw-bold me-2'>Project review:</p>
                        <a href='https://fptsoftware.com/'>https://fptsoftware.com/</a>
                    </div>
                    <div className='d-flex'>
                        <p className='fw-bold me-2'>Role:</p>
                        <p>Front-End</p>
                    </div>
                    <div className='d-flex'>
                        <p className='fw-bold me-2'>Purpose of the project:</p>
                        <p>The purpose of the project is the official information page about FPT Software</p>
                    </div>
                    <div className='d-flex'>
                        <p className='fw-bold me-2'>Description of the project:</p>
                        <p>I make new and edit the interface according to the design available from Figma.</p>
                    </div>
                    <div className='d-flex'>
                        <p className='fw-bold me-2'>What have I learned:</p>
                        <p>How a real project works. How to work as a team on a project.
                            I learned skills on Sitecore, Scss, Javascript, Jquery.</p>
                    </div>
                    <div className='d-flex'>
                        <p className='fw-bold me-2'>Technology used:</p>
                        <p>Html, Css, Scss, Bootstrap 5, Sitecore</p>
                    </div>
                </Col>
            </Row>
        </>

    )
}

export default ProjectComponent;