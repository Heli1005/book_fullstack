import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const CustomModal = ({ children, title, body, show, handleShow, handleClose, footer = null }) => {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const customStyles = {
        modalDialog: {
            maxWidth: '80%',
            width: '80%',
        },
        modalContent: {
            padding: '20px',
        },
        modalHeader: {
            borderBottom: 'none',
        },
        modalFooter: {
            borderTop: 'none',
        },
    };
    return <>
        {
            children
                ?
                <span onClick={handleShow}>
                    {children}
                </span>
                :
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>
        }

        <Modal size="md" show={show} onHide={handleClose}>
            <Modal.Header closeButton style={customStyles.modalHeader}>
                <Modal.Title className="text-teal-700">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            {
                footer
                    ?
                    <Modal.Footer style={customStyles.modalFooter}>
                        <div className="d-flex justify-center gap-1 w-full">

                            <Button className="bg-teal-700 w-1/4 py-2" onClick={handleClose}>
                                Add
                            </Button>
                            <Button variant="secondary w-1/4" onClick={handleClose}>
                                Cancel
                            </Button>
                        </div>
                    </Modal.Footer>
                    :
                    <></>
            }
        </Modal>
    </>;
};

export default CustomModal;
