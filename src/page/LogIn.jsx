import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState, useRef } from 'react';
import { user } from '../mock/user';
import '../style/Login.css';
import openEye from '../assets/openEye.svg';
import closeEye from '../assets/closeEye.svg';

export default function LogIn(){
    const [loginData, setLoginData] = useState({
        id:"",
        pw:""
    });
    const [veiwPw, setVeiwPw] = useState(false);
    const inputRef = useRef([]);

    const change = e => {
        const {name, value} = e.target;
        setLoginData(data => ({
            ...data,
            [name]:value
        }));
    }
    const changePw = () => {
        setVeiwPw(!veiwPw);
    }
    const login = ()=>{
        if(loginData.id===""){
            alert('아이디를 입력하지 않았습니다!');
            return inputRef.current[0].focus();
        } 
        if(loginData.pw==="") {
            alert('비밀번호를 입력하지 않았습니다!');
            return inputRef.current[1].focus();
        }
    }

    return(
        <>
            <Header />
            <div className="login-area">
                <h1>로그인</h1>
                <div className="input-area">
                    <div className="id">
                        <p className="p2">아이디</p>
                        <input className="id-input p" type="text" placeholder="아이디를 입력해주세요."
                        name='id' value={loginData.id} ref={el => inputRef.current[0]=el} onChange={change} />
                    </div>
                    <div className="pw">
                        <p className="p2">비밀번호</p>
                        <input className="password-input p" type={veiwPw?'text':'password'} placeholder="비밀번호를 입력해주세요." 
                        name='pw' value={loginData.pw} ref={el=>inputRef.current[1]=el} onChange={change} />
                        <button className="pwBtn" onClick={changePw}><img src={veiwPw?openEye:closeEye} alt="" /></button>
                    </div>
                    
                </div>
                <div className="btn-area">
                    <button className="h2 loginBtn" onClick={login}>로그인 하기</button>
                    <p>회원 가입을 안 하셨나요? <Link>회원 가입 하러가기</Link></p>
                </div>
            </div>
        </>
    )
}