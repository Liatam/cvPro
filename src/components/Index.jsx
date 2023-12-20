import React from 'react'
import { useState, useContext } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import cvContext from '../context/cvContext';
import ResumeList from '../pages/ResumeList/ResumeList';
import '../components/Index.css';
import AppNavbar from '../components/AppNavbar';
function Index() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { formData, setFormData, handleSubmit } = useContext(cvContext);
    const [image, setImage] = useState("https://via.placeholder.com/150");


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // Here, you can set the image in the state or context
                setImage(reader.result);
                // You can also update the context here if needed
                // updateformDataContextImage(reader.result);
                setFormData({ ...formData, image: reader.result });
            };

            reader.readAsformDataURL(file);
        }
    };

    return (
        <>
            <AppNavbar />
            <div className="index-container">
                <div className="purple-section">
                    <Button className="white-button" onClick={handleShow}>
                        Create CV
                    </Button>
                </div>
                <div className="white-section">
                    <ResumeList />
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your CV</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <img
                            src={image}
                            alt='profile'
                            className="img-thumbnail"
                        />
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formFullName">
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" autoFocus onChange={(e) => { setFormData({ ...formData, fullName: e.target.value }) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control type="text" placeholder="Phone" autoFocus onChange={(e) => { setFormData({ ...formData, phone: e.target.value }) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" placeholder="Email" autoFocus onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAdress">
                            <Form.Label>Adress:</Form.Label>
                            <Form.Control type="text" placeholder="Adress" autoFocus onChange={(e) => { setFormData({ ...formData, adress: e.target.value }) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formWorkExperience">
                            <Form.Label>Work Experience:</Form.Label>
                            <div className="row">
                                <div className="col-8">
                                    <Form.Control type="text" placeholder="Company Name" />
                                </div>
                                <div className="col-4">
                                    <Form.Control type="text" placeholder="Year - Year" />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formWorkExperience">
                            <Form.Label>Education:</Form.Label>
                            <div className="row">
                                <div className="col-8">
                                    <Form.Control type="text" placeholder="Field Of Study" />
                                </div>
                                <div className="col-4">
                                    <Form.Control type="text" placeholder="Year - Year" />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAdditionalInfo">
                            <Form.Label>Additional Information</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Provide additional information..." />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        <Link to="/resume"> Create</Link>
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    );

}

export default Index