import React, { useState, useEffect } from 'react';
import '../CSS files/product.css';

const Product = () => {
    const [product_name, setproduct_name] = useState('');
    const [product_price, setproduct_price] = useState('');
    const [product_detail_name, setproduct_detail_name] = useState('');
    const [product_bitcoin_price, setproduct_bitcoin_price] = useState('');
    const [product_description, setproduct_description] = useState('');
    const [product_image, setproduct_image] = useState('');
    const [Image, setImage] = useState('');
    const [Image_name, setImage_name] = useState('');
    const [Disable, setDisable] = useState('');
    const [Enable, setEnable] = useState('product-off');
    const [Files, setFiles] = useState('');
    useEffect(() => {
        localStorage.setItem('periouspage', (localStorage.getItem('page')));
        localStorage.setItem('page', (window.location.pathname));
    })
    
    const product_form = [
        product_name,
        product_price,
        product_detail_name,
        product_bitcoin_price,
        product_description,
        Files,
        product_image
    ]

    const store = (e) => {
        if (e.target.name === 'product-name') {
            setproduct_name(e.target.value)
        } else if (e.target.name === 'product-price') {
            setproduct_price(e.target.value)
        } else if (e.target.name === 'product-detail-name') {
            setproduct_detail_name(e.target.value)
        } else if (e.target.name === 'product-bitcoin-price') {
            setproduct_bitcoin_price(e.target.value)
        } else if (e.target.name === 'product-description') {
            setproduct_description(e.target.value)
        }
    }
    const image_upload = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        setproduct_image(URL.createObjectURL(e.target.files[0]))
        setImage_name(e.target.value.substr(12))
        setDisable('disable')
        setEnable('product-on')
        setFiles(e.target.files)
        console.log(product_bitcoin_price.length)
    }
    const image_cancel = (e) => {
        setImage('')
        setproduct_image('')
        setImage_name('')
        setDisable('')
        setEnable('product-off')
        setFiles('')
    }
    const product_form_submit = () => {
        if (product_name === '') {
            alert('Please Fill The Product Tag')
        } else if (product_name.length < 8) {
            alert('Product Tag Is Too Short')
        } else if (product_name.length > 20) {
            alert('Product Tag Is Too Long')
        } else if (product_price === '') {
            alert('Please Fill The Price')
        } else if (product_price.length > 10) {
            alert('Price Will Be 1 To 10')
        }  else if (product_detail_name === '') {
            alert('Please Fill The Product Name')
        }  else if (product_detail_name.length < 8) {
            alert('Product Name Too Short')
        }  else if (product_detail_name.length > 40) {
            alert('Product Name Too Long')
        }  else if (product_bitcoin_price === '') {
            alert('Please Fill The Bitcoin Price')
        }  else if (product_bitcoin_price.length > 7) {
            alert('Bitcoin Price Will Be 1 To 7')
        }  else if (product_description === '') {
            alert('Please Fill The Description')
        }  else if (product_description.length < 100) {
            alert('Description Is Too Short')
        }  else if (product_description.length > 500) {
            alert('Description Is Too Long')
        }  else if (product_image === '') {
            alert('Please Select The Image')
        }  else if (Files === '') {
            alert('Please Select The Image')
        }  else {
            console.log(product_form)
            console.log(product_form.toString)
        } 
    }

    return (
        <>
            <div className='product-body'>
                <div className='product-form'>
                    <div className='hading'>
                        <h1>Product Form</h1>
                    </div>
                    <div className='items'>
                        <div className='name'>
                            <label className='data-lable' htmlFor='product-name' id='product-name-lable'>Product Tag</label>
                            <input className='data-input' onChange={store} id='product-name' name='product-name' type='text' spellCheck={false} autoComplete='off' required />
                        </div>
                        <div className='Price'>
                            <label className='data-lable' htmlFor='price' id='prices-lable'>Price</label>
                            <input className='data-input' onChange={store} id='price' name='product-price' type='number' spellCheck={false} autoComplete='off' required />
                        </div>
                        <div className='detail-name'>
                            <label className='data-lable' htmlFor='product-detail-name' id='product-detail-name-lable'>Product Name</label>
                            <input className='data-input' onChange={store} id='product-detail-name' name='product-detail-name' type='text'
                                autoComplete='off'  spellCheck={false} required />
                        </div>
                        <div className='Bitcoin'>
                            <label className='data-lable' htmlFor='bitcoin-price' id='bitcoin-price-lable'>Bitcoin Price</label>
                            <input className='data-input' onChange={store} id='bitcoin-price' name='product-bitcoin-price' type='number' autoComplete='off'
                                 spellCheck={false} required />
                        </div>
                        <div className='product-description'>
                            <label className='data-lable' htmlFor='description' id='description-lable'>Product Description</label>
                            <textarea className='data-input' onChange={store} id='description' name='product-description'  spellCheck={false} autoComplete='off' required></textarea>
                        </div>
                        <div className='image1'>
                            <div className='container'>
                                <div className='wrapper'>
                                    <div className='image'>
                                        <img src={Image} alt='' />
                                    </div>
                                    <div className='content'>
                                        <div className='icon'>
                                            <i className='fas fa-cloud-upload-alt' id={Disable}></i>
                                        </div>
                                        <div className='text' id={Disable}>
                                            No file chosen, yet!
                                        </div>
                                    </div>
                                    <div id='cancel-btn'>
                                        <i className='fas fa-times' onClick={image_cancel} id={Enable}></i>
                                    </div>
                                    <div className='file-name' id={Enable}>
                                        {Image_name}
                                    </div>
                                </div>
                                <label className='file-btn' htmlFor='default-btn' id='custom-btn'>Choose a file</label>
                                <input id='default-btn' type='file' onChange={image_upload} accept='image/*' name='product-image' hidden required />
                            </div>
                        </div>
                    </div>
                    <button type='submit' onClick={product_form_submit} className='submit-btn'><i className='fas fa-upload'></i> Upload</button>
                </div>
            </div>
        </>
    )
}

export default Product