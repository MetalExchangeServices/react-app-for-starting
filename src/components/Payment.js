import React, { useState } from 'react';
import '../CSS files/payment.css';

// littel API
const select_api = [
    {
        id: 0,
        country_name: 'Select Country',
        country_code_number: '',
    }, {
        id: 1,
        country_name: 'Pakistan',
        country_code_number: 81,
    }, {
        id: 2,
        country_name: 'India',
        country_code_number: 77,
    }, {
        id: 3,
        country_name: 'Iran',
        country_code_number: 15,
    }, {
        id: 4,
        country_name: 'France',
        country_code_number: 8,
    }, {
        id: 5,
        country_name: 'UK',
        country_code_number: 190,
    }, {
        id: 6,
        country_name: 'Germany',
        country_code_number: 161,
    }, {
        id: 7,
        country_name: 'USA',
        country_code_number: 145,
    }, {
        id: 8,
        country_name: 'Canada',
        country_code_number: 45,
    }, {
        id: 9,
        country_name: 'UAE',
        country_code_number: 25,
    }, {
        id: 10,
        country_name: 'Turkey',
        country_code_number: 5,
    },
]

const Payment = () => {
    const [Payment_method, setPayment_method] = useState('Paypal')
    const [Paypal, setPaypal] = useState('card-on')
    const [Credit, setCredit] = useState('card-off')
    const [Bitcoin, setBitcoin] = useState('card-off')
    const [Paypal_number, setPaypal_number] = useState('')
    const [Paypal_cvc, setPaypal_cvc] = useState('')
    const [Credit_number, setCredit_number] = useState('')
    const [Credit_cvc, setCredit_cvc] = useState('')
    const [Bitcoin_address, setBitcoin_address] = useState('')
    const [House_address, setHouse_address] = useState('')
    const [Phone_number, setPhone_number] = useState('')
    const [Country_code, setCountry_code] = useState('')
    let Regexe = /^[^\W_]+$/;

    const basic_form = [
        {

        }
    ]

    const show = (e) => {
        basic_form.pop()
        setCountry_code('')
        if (e.target.innerText === 'Paypal') {
            setPayment_method('Paypal')
            setPaypal('card-on')
            setCredit('card-off')
            setBitcoin('card-off')
        } else if (e.target.innerText === 'Credit Card') {
            setPayment_method('Credit Card')
            setPaypal('card-off')
            setCredit('card-on')
            setBitcoin('card-off')
        } else if (e.target.innerText === 'Bitcoin') {
            setPayment_method('Bitcoin')
            setPaypal('card-off')
            setCredit('card-off')
            setBitcoin('card-on')
        }
    }
    const store = (e) => {
        if (e.target.placeholder === "Coin Address") {
            setBitcoin_address(e.target.value)
        } else if (e.target.placeholder === "Paypal Card Number") {
            setPaypal_number(e.target.value)
        } else if (e.target.placeholder === "Paypal Card CVC") {
            setPaypal_cvc(e.target.value)
        } else if (e.target.placeholder === "Card Number") {
            setCredit_number(e.target.value)
        } else if (e.target.placeholder === "Card CVC") {
            setCredit_cvc(e.target.value)
        } else if (e.target.placeholder === "Detailed House Address") {
            setHouse_address(e.target.value)
        } else if (e.target.placeholder === "Phone Number") {
            setPhone_number(e.target.value)
        }
    }
    const code = (e) => {
        setCountry_code(e.target.value)
    }
    const form_supmited = () => {
        if (Paypal === 'card-on') {
            if (Paypal_number.length < 1) {
                alert('Paypal number is Empty')
            } else if (Paypal_number.length > 19) {
                alert('Paypal number will be 8 to 19')
            } else if (Paypal_number.length < 8) {
                alert('Paypal number will be 8 to 19')
            } else if (Paypal_cvc.length < 1) {
                alert('Paypal CVC number is empty')
            } else if (Paypal_cvc.length < 3) {
                alert('Paypal CVC number will be 3 to 16')
            } else if (Paypal_cvc.length > 16) {
                alert('Paypal CVC number will be 3 to 16')
            } else if (House_address.length < 1) {
                alert('Home Address is empty')
            } else if (House_address.length < 20) {
                alert('Home Address will be 20 to 100')
            } else if (House_address.length > 100) {
                alert('Home Address will be 20 to 100')
            } else if (Phone_number.length < 1) {
                alert('Phone number is empty')
            } else if (Phone_number.length < 7) {
                alert('Phone number will be 7 to 15')
            } else if (Phone_number.length > 15) {
                alert('Phone number will be 20 to 100')
            } else if (Country_code < 1) {
                alert('PLease Select a Country')
            } else {
                basic_form.push(Paypal_number, Paypal_cvc, House_address, Phone_number, Country_code);
                console.log(basic_form.toString())
            }

        } else if (Credit === 'card-on') {
            if (Credit_number.length < 1) {
                alert('Credit number is Empty')
            } else if (Credit_number.length < 8) {
                alert('Credit number will be 8 to 19')
            } else if (Credit_number.length > 19) {
                alert('Credit number will be 8 to 19')
            } else if (Credit_cvc.length < 1) {
                alert('Credit CVC number is empty')
            } else if (Credit_cvc.length < 3) {
                alert('Credit CVC number will be 3 to 16')
            } else if (Credit_cvc.length > 16) {
                alert('Credit CVC number will be 3 to 16')
            } else if (House_address.length < 1) {
                alert('Home Address is empty')
            } else if (House_address.length < 20) {
                alert('Home Address will be 20 to 100')
            } else if (House_address.length > 100) {
                alert('Home Address will be 20 to 100')
            } else if (Phone_number.length < 1) {
                alert('Phone number is empty')
            } else if (Phone_number.length < 7) {
                alert('Phone number will be 7 to 15')
            } else if (Phone_number.length > 15) {
                alert('Phone number will be 20 to 100')
            } else if (Country_code === '') {
                alert('PLease Select a Country')
            } else {
                basic_form.push(Credit_number, Credit_cvc, House_address, Phone_number, Country_code);
            }
        } else if (Bitcoin === 'card-on') {
            if (Bitcoin_address.length < 1) {
                alert('Bitcoin address is Empty')
            } else if (Bitcoin_address.length < 10) {
                alert('Bitcoin wallet address is short')
            } else if (!Regexe.test(Bitcoin_address)) {
                alert('Invalid bitcoin wallet address')
            } else if (House_address.length < 1) {
                alert('Home Address is empty')
                console.log(Bitcoin_address)
            } else if (House_address.length < 20) {
                alert('Home Address will be 20 to 100') 
            } else if (House_address.length > 100) {
                alert('Home Address will be 20 to 100')
            } else if (Phone_number.length < 1) {
                alert('Phone number is empty')
            } else if (Phone_number.length < 7) {
                alert('Phone number will be 7 to 15')
            } else if (Phone_number.length > 15) {
                alert('Phone number will be 20 to 100')
            } else if (Country_code === '') {
                alert('PLease Select a Country')
            } else {
                basic_form.push(Bitcoin_address, House_address, Phone_number, Country_code);
            }
        }
    }


    return (
        <>
            <div className='body-payment'>
                <div className='main-payment'>
                    <h1>Payment Form</h1>
                    <div className='form-payment' name='payment-form'>
                        <div className='card-switch'>
                            {/* <input type='radio' className='paypal' id='paypal' onChange={show} name='card' value='paypal'/> */}
                            <label htmlFor='paypal' className='paypal-lable' id={Paypal} onClick={show}><i className='fab fa-cc-paypal'></i>
                                <p>Paypal</p>
                            </label>
                            {/* <input type='radio' className='credit' id='credit' onChange={show} name='card' value='credit' checked/> */}
                            <label htmlFor='credit' className='credit-lable' id={Credit} onClick={show}><i className='fab fa-cc-visa'></i>
                                <p>Credit Card</p>
                            </label>
                            {/* <input type='radio' className='bitcoin' id='bitcoin' onChange={show} name='card' value='bitcoin'/> */}
                            <label htmlFor='bitcoin' className='bitcoin-lable' id={Bitcoin} onClick={show}><i className='fab fa-bitcoin'></i>
                                <p>Bitcoin</p>
                            </label>
                        </div>
                        <br />
                        <div>

                            {
                                Payment_method === 'Paypal' && (
                                    <>
                                        <div className='fields' id='cardnumber'>
                                            <i className='far fa-credit-card' id='cn-icon'></i>
                                            <input type='number' onChange={store} className='card-number' placeholder='Paypal Card Number' name='payment-credit-card' autoComplete='off' spellCheck='false' />
                                        </div>
                                        <div className='fields' id='cvc'>
                                            <i className='fas fa-user'></i>
                                            <input type='number' onChange={store} className='cvc-number' placeholder='Paypal Card CVC' name='payment-card-cvc' autoComplete='off' spellCheck='false' />
                                        </div>
                                        <div className='fields'>
                                            <i className='fas fa-home'></i>
                                            <input type='text' onChange={store} className='house-address' placeholder='Detailed House Address' name='payment-house-address' autoComplete='off' spellCheck='false' />
                                        </div>
                                        <div className='num-con'>
                                            <div>
                                                <i className='fas fa-phone'></i>
                                                <div>
                                                    <p>{Country_code}+</p>
                                                    <input type='number' onChange={store} className='house-address' placeholder='Phone Number' name='payment-phone-number' autoComplete='off' spellCheck='false' />
                                                </div>
                                            </div>
                                            <select onChange={code} name='payment-country-name'>
                                                {select_api.map((select) => {
                                                    return (
                                                        <option onClick={code} value={select.country_code_number} key={select.id}>{select.country_name}</option>
                                                    )
                                                })}

                                            </select>
                                        </div>
                                    </>
                                )
                            }

                            {
                                Payment_method === 'Credit Card' && (
                                    <>
                                        <div className='fields' id='cardnumber'>
                                            <i className='far fa-credit-card' id='cn-icon'></i>
                                            <input type='number' onChange={store} className='card-number' placeholder='Card Number' name='payment-credit-card' autoComplete='off' spellCheck='false' />
                                        </div>
                                        <div className='fields' id='cvc'>
                                            <i className='fas fa-user'></i>
                                            <input type='number' onChange={store} className='cvc-number' placeholder='Card CVC' name='payment-card-cvc' autoComplete='off' spellCheck='false' />
                                        </div>
                                        <div className='fields'>
                                            <i className='fas fa-home'></i>
                                            <input type='text' onChange={store} className='house-address' placeholder='Detailed House Address' name='payment-house-address' autoComplete='off' spellCheck='false' />
                                        </div>
                                        <div className='num-con'>
                                            <div>
                                                <i className='fas fa-phone'></i>
                                                <div>
                                                    <p>{Country_code}+</p>
                                                    <input type='number' onChange={store} className='house-address' placeholder='Phone Number' name='payment-phone-number' autoComplete='off' spellCheck='false' />
                                                </div>
                                            </div>
                                            <select onChange={code} name='payment-country-name'>
                                                {select_api.map((select) => {
                                                    return (
                                                        <option onClick={code} value={select.country_code_number} key={select.id}>{select.country_name}</option>
                                                    )
                                                })}

                                            </select>
                                        </div>
                                    </>
                                )
                            }

                            {
                                Payment_method === 'Bitcoin' && (
                                    <>
                                        <div className='fields' id='bitcoinaddress'>
                                            <i className='fab fa-bitcoin' id='bitcoin-icon'></i>
                                            <input type='url' onChange={store} className='bitcoin-address' placeholder='Coin Address' name='payment-bitcoin-address' autoComplete='off' spellCheck='false' />
                                        </div>
                                        <div className='fields'>
                                            <i className='fas fa-home'></i>
                                            <input type='text' onChange={store} className='house-address' placeholder='Detailed House Address' name='payment-house-address' autoComplete='off' spellCheck='false' />
                                        </div>
                                        <div className='num-con'>
                                            <div>
                                                <i className='fas fa-phone'></i>
                                                <div>
                                                    <p>{Country_code}+</p>
                                                    <input type='number' onChange={store} className='house-address' placeholder='Phone Number' name='payment-phone-number' autoComplete='off' spellCheck='false' />
                                                </div>
                                            </div>
                                            <select onChange={code} name='payment-country-name'>
                                                {select_api.map((select) => {
                                                    return (
                                                        <option onClick={code} value={select.country_code_number} key={select.id}>{select.country_name}</option>
                                                    )
                                                })}

                                            </select>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <button onClick={form_supmited} className='pay-button'><i className='fas fa-shopping-cart'></i>PAY NOW</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment