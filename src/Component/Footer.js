import { Container, Row, Col, DropdownButton, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
const Footer = () => {
    return (
        <div className='Footer mt-5'>
            <p className='fs-4 fw-bold'>Contact</p>
        </div>
    )
}
export default Footer;