import React, { useState, useEffect } from 'react';
import '../CSS files/login.css';

const Login = () => {
    const [Passwordtype, setPasswordtype] = useState('password')
    const [SH_text, setSH_text] = useState('show')
    const [Color_password, setColor_password] = useState('white-password')
    const [Login_email, setLogin_email] = useState('')
    const [Login_password, setLogin_password] = useState('')
    let regex_login = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    useEffect(() => {
        localStorage.setItem('periouspage', (localStorage.getItem('page')));
        localStorage.setItem('page', (window.location.pathname));
    })

    let login_form = [
        Login_email,localStorage
    ]

    const show_hide = () => {
        if (Passwordtype === 'password') {
            setPasswordtype('text')
            setSH_text('Hide')
            setColor_password('cyan-password')
        } else {
            setPasswordtype('password')
            setSH_text('Show')
            setColor_password('white-password')
        }
    }
    const store_login = (e) => {
        if (e.target.placeholder === 'Email or User Name') {
            setLogin_email(e.target.value)
        } else if (e.target.placeholder === 'password') {
            setLogin_password(e.target.value)
        }
    }
    const login_verification = () => {
        if (Login_email.length === 0) {
            alert('please enter Email')
        } 
        else if (!regex_login.test(Login_email)) {
            alert('Invalid Email Address')
        }
         else if (Login_password.length === 0) {
            alert('please enter Email password')
        } else if (Login_password.length < 5) {
            alert('password is between 5 to 14')
        } else if (Login_password.length > 14) {
            alert('password is too long')
        } else {
            console.log(login_form.toString())
        }

    }

    return (
        <>
            <div className='body-login'>
                <div className='main-login'>
                    <div className='login-form'>
                        <h1>LOGIN FORM</h1>
                        <div className='form-fram'>
                            <i className='fas fa-user'></i>
                            <input type='email' className='email' id='email' placeholder='Email or User Name' onChange={store_login}/>
                            <i className='fas fa-lock'></i>
                            <input type={Passwordtype} className='email-password' id={Color_password} placeholder='password' autoComplete='off' onChange={store_login}/>
                            <input onClick={show_hide} type='checkbox' className='show-password' id='show-password' autoComplete='off' spellCheck='false' value='SHOW' name='show-password' />
                            <label htmlFor='show-password'>{SH_text} Password</label>
                            <input type='submit' name='login-button' value='LOGIN' className='login-button' onClick={login_verification}/>
                        </div>
                        <p className='option'>Or login with</p>
                        <div className='other-plateform'>
                            <a href='https://www.facebook.com/' className='facebook'>
                                <i className='fab fa-facebook'></i>
                                <p>Facebook</p>
                            </a>
                            <a href='https://www.instagram.com/' className='instagram'>
                                <i className='fab fa-instagram'></i>
                                <p>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login