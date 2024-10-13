import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../lib/reducer';
import './Modal.css';

const Modal = ({ data }) => {

    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);

    return (
        <div className="modal fade" id={data.ref} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered" id="personalize">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"> {data.name} </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body container">
                        <Row>
                            <Col sm={4}>
                                <img
                                    src={`./assets/${data.categorie}/${data.image}`}
                                    alt={data.name}
                                    width="200px"
                                />
                            </Col>
                            <Col sm={8}>
                                <div className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia sunt facilis velit itaque animi fugiat omnis magni eos rem!
                                </div>
                                <div className="prix">
                                    {data.price} Fr
                                </div>
                                <div className="modal-button">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={
                                            function () {
                                                (qty <= 1) ? setQty(1) : setQty(qty - 1);
                                            }
                                        }
                                    > - </button>
                                    <span className="quantity"> {qty} </span>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={
                                            function () {
                                                setQty(qty + 1);
                                            }
                                        }
                                    > + </button>
                                </div>

                            </Col>
                        </Row>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button
                            type="button"
                            className="btn btn-success"
                            data-bs-dismiss="modal"
                            onClick={
                                function () {
                                   dispatch(addToCart({product:data, quantity:qty}));
                                }
                            }
                        >
                            Add to card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;