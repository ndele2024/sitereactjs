import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Modal from '../modal/Modal';
import './Content.css';

const Cart = ({ data }) => {

    return (
        <Col sm={6} md={4} lg={3}>
            <Card>
                <Card.Img
                    variant="top"
                    height="150"
                    alt={data.name}
                    src={`./assets/${data.categorie}/${data.image}`} />
                <Card.Body>
                    {/* <Card.Title></Card.Title> */}
                    <Card.Text className="text-card">
                        <span className="text1">{data.name}</span>
                        <span className="text2">{data.price} Fr / {data.unit}</span>
                    </Card.Text>
                    <div className='button-card'>
                        <Button variant="warning" data-bs-toggle="modal" data-bs-target={`#${data.ref}`}>View product</Button>
                    </div>
                </Card.Body>
            </Card>
            <Modal data={data} />
        </Col>
    );
};

const Content = ({ data }) => {
    return (
        <Row>
            {data.map((item) => {
                return (
                    <Cart key={item.ref} data={item} />
                )
            })}

        </Row>
    );
};

export default Content;