import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css';
import { Link } from 'react-router-dom';

function Checkout(props) {
    console.log(props);
    const [isComplete, setIscomplete] = useState(false);
    const checkForm = () => {
        const inputs = document.querySelectorAll(".inputCheckout");
        let i = 0;
        inputs.forEach(input => {
            (input.value) && i++;
            return input;
        });
        (inputs.length === i) ? setIscomplete(true) : setIscomplete(false);
        //console.log(inputs, i, isComplete);
    }

    const CheckButton = () => {
        return (<button className='btn btn-danger' disabled={true}>Confirm</button>)
    }
    const CheckLink = () => {
        return (<Link to="/livraison" className='btn btn-danger'>Confirm</Link>)
    }

    return (
        <div className='container checkform'>
            <h1 className='formTitle'>Checkout</h1>

            <form>
                <div className='row mb-3'>
                    <div className='col-sm-6'>
                        <input type="text" name="firstname" className='form-control inputCheckout' placeholder='First Name' onChange={() => checkForm()} required />
                    </div>
                    <div className='col-sm-6'>
                        <input type="text" name="lastname" className='form-control inputCheckout' placeholder='Last Name' onChange={() => checkForm()} required />
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className=''>
                        <input type="email" name="email" className='form-control inputCheckout' placeholder='Email Adress' required onChange={() => checkForm()} />
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className=''>
                        <input type="text" name="adresse" className='form-control inputCheckout' placeholder='Address' required onChange={() => checkForm()} />
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='col-sm-6'>
                        <input type="text" name="postalcode" className='form-control inputCheckout' placeholder='Postal Code' onChange={() => checkForm()} />
                    </div>
                    <div className='col-sm-6'>
                        <input type="text" name="city" className='form-control inputCheckout' placeholder='City' required onChange={() => checkForm()} />
                    </div>
                </div>

                <div className='row'>
                    <div className='d-grid gap-2'>
                        {(isComplete) ? <CheckLink /> : <CheckButton /> }
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Checkout
