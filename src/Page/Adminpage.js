import { Container, Row, Col } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import { Document, Page } from 'react-pdf';
const AdminPage = () => {
    const fileInputRef = useRef(null);
    const [pdfUrl, setPdfUrl] = useState();
    const [numPages, setNumPages] = useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        setPdfUrl(fileUrl);
    };

    const handleDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    console.log(pdfUrl
        
        );
    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <button onClick={handleClick}>Chọn tệp tin</button>
            {pdfUrl && (
                <div>
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={handleDocumentLoadSuccess}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={index + 1} pageNumber={index + 1} />
                        ))}
                    </Document>
                </div>
            )}
        </div>
    );
}

export default AdminPage;