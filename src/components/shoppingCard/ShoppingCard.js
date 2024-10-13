import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import './ShoppingCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, removeCart } from '../../lib/reducer';
import { Link } from "react-router-dom";

const RowShop = ({ values, setSubtotal, setTotal }) => {

    const dispatch = useDispatch();
    const item = values.product;
    const quantity = values.quantity;
    const [qty, setQty] = useState(quantity);
    const [totalItem, setTotalItem] = useState(quantity * item.price);
    useEffect(
        () => {
            setTotalItem(qty * item.price);
        },
        [qty, item.price]
    )

    return (
        <tr align="center">
            <td width="200">
                <img
                    src={`./assets/${item.categorie}/${item.image}`}
                    alt={item.name}
                    width="100px"
                />
            </td>
            <td width="80">{item.name}</td>
            <td width="150">{`${item.price} Fr`}</td>
            <td width="150">
                <button
                    className="btn btn-secondary"
                    onClick={
                        function () {
                            if (qty > 1) {
                                const q = qty - 1;
                                setQty(q);
                                dispatch(updateCart({ id: values.id, quantity: q }));
                            }
                        }
                    }
                > - </button>
                <span className="quantity">{qty}</span>
                <button
                    className="btn btn-secondary"
                    onClick={
                        function () {
                            const q = qty + 1;
                            setQty(q);
                            dispatch(updateCart({ id: values.id, quantity: q }));
                        }
                    }
                > + </button>
            </td>
            <td width="200">{totalItem}</td>
            <td>
                <button
                    type="button"
                    className='btn btn-danger remove'
                    onClick={
                        () => {
                            dispatch(removeCart({ id: values.id }));
                        }
                    }
                >
                    X
                </button>
            </td>
        </tr>
    );
};

const TableShop = ({ values, setSubtotal, setTotal }) => {

    return (
        <table>
            <thead>
                <tr align="center">
                    <th width="200">Product</th>
                    <th width="80">Name</th>
                    <th width="150">Price</th>
                    <th width="150">Quantity</th>
                    <th width="200">Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    (values.length > 0) ?
                        values.map(
                            (val, index) => {
                                return (
                                    <RowShop key={index} values={val} setSubtotal={setSubtotal} setTotal={setTotal} />
                                )
                            }
                        ) :
                        <tr align='center'><td colSpan={5}><span className='no-product'>no product in your shopping cart</span></td></tr>
                }
            </tbody>
        </table>
    );
};

const ButtonCard = () => {
    return(
        <div className="d-grid gap-2">
            <button
                type='button'
                className='btn btn-success btn-lg btn-block bg-crimson'
                disabled={true}
            >
                Checkout
            </button>
        </div>
    );
};

const LinkCard = () => {
    return(
        <div className="d-grid gap-2">
            <Link
                className='btn btn-success btn-lg btn-block bg-crimson'
                to="/checkout"
            >
                Checkout
            </Link>
        </div>
    );
};

const ShoppingCard = () => {

    const values = useSelector(state => state.shoppingApp);
    const tabTotal = values.map(
        val => {
            return val.quantity * val.product.price
        }
    );
    const [subtotal, setSubtotal] = useState(
        tabTotal.reduce((x, y) => {
            return x + y
        }, 0)
    );
    const shipping = 1500;

    const [total, setTotal] = useState(
        (subtotal === 0) ? 0 : subtotal + shipping
    );

    useEffect(
        () => {
            const tabTotal = values.map(
                val => {
                    return val.quantity * val.product.price
                }
            );
            setSubtotal(
                tabTotal.reduce((x, y) => {
                    return x + y
                }, 0)
            );
            (subtotal === 0) ? setTotal(0) : setTotal(subtotal + shipping)
        },
        [values, subtotal]
    );

    return (
        <div className='container'>
            <Row>
                <Col sm={9}>
                    <TableShop values={values} setSubtotal={setSubtotal} setTotal={setTotal} />
                </Col>
                <Col sm={3}>
                    <ul className="list-shop">
                        <li className='list-shop-item'>
                            Order Summary
                        </li>
                        <li className='list-shop-item'>
                            <ul className="list-shop1">
                                <li className='text-left'>subtotal</li>
                                <li className='text-right'>{subtotal} Fr</li>
                            </ul>
                            <ul className="list-shop1">
                                <li className='text-left'>Shipping</li>
                                <li className='text-right'>{shipping} Fr</li>
                            </ul>
                            <ul className="list-shop1">
                                <li className='coupon'> {`>>Add Coupon Code`} </li>
                            </ul>
                        </li>
                        <li className='list-shop-item'>
                            <ul className="list-shop1">
                                <li className='text-left'>Total</li>
                                <li className='text-right'>{total} Fr</li>
                            </ul>
                        </li>
                    </ul>
                    {(values.length === 0) ? <ButtonCard /> : <LinkCard /> }
                </Col>
            </Row>
        </div>
    );
};

export default ShoppingCard;