import React from 'react';
import './LoginForm.css';
import {FaUser,FaLock} from 'react-icons/fa';

const LoginForm=()=>{
    return(
        <div className='wrapper'>
            <form action=''>
                <h1>어렵지 않은 병원상담 VetTalk </h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>

                <div className='remeber'>
                    <label><input type='checkbox'/>로그인 기억하기</label>
                    
                </div>

                <button type='submit'>로그인</button>

                <div className='register-link-forgot'>
                    <a href='#'>회원가입</a> ||   
                    <a href='#'> 아이디/비밀번호 찾기</a>
                </div>
            </form>

        </div>
    );
}

export default LoginForm;