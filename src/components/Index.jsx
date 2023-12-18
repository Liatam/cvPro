import React from 'react'
import { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import cvContext from '../context/cvContext';

function Index() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { data, setData } = useContext(cvContext);
    const [image, setImage] = useState("https://via.placeholder.com/150"
    );

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
    
            reader.onloadend = () => {
                // Here, you can set the image in the state or context
                setImage(reader.result);
                // You can also update the context here if needed
                // updateDataContextImage(reader.result);
                setData({ ...data, image: reader.result });
            };
    
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create CV
            </Button>

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
                            <Form.Control type="text" placeholder="Full Name" autoFocus onChange={(e) => { setData({ ...data, firstName: e.target.value }) }}/>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formWorkExperience">
                            <Form.Label>Work Experience:</Form.Label>
                            <div className="row">
                                <div className="col-8">
                                    <Form.Control type="text" placeholder="Company Name" />
                                </div>
                                <div className="col-4">
                                    <Form.Control type="text" placeholder="Year - Year"/>
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
                    <Button variant="primary">
                        <Link to="/resume" >Save Changes</Link>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default Index