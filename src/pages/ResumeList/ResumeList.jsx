import React, { useContext, useEffect, useState } from 'react'
import cvContext from '../../context/cvContext'
import Resume from '../Resume/Resume';
import { Card, Col, Row } from 'react-bootstrap';

const ResumeList = () => {
    const { getDataByUserId } = useContext(cvContext);
    const [resumes, setResumes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDataByUserId();
                setResumes(data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <h1>Resume List</h1>
            <Row>
                {resumes.map((resume, index) => (
                    <Col md={4} key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Img></Card.Img>
                                <Card.Title>{resume.fullName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Phone: {resume.phone}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Email: {resume.email}</Card.Subtitle>
                                <Card.Text>Job: {resume.job}</Card.Text>
                                {/* Add more details as needed */}
                                {/* You can also add buttons or links to view the full resume, etc. */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default ResumeList