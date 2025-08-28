import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from 'react';
import '../style/Login.css';

export default function LogIn(){
    const [loginData, setLoginData] = useState({
        id:"",
        pw:""
    });
    return(
        <>
            <Header />
            <div className="login-area">
                <h1>로그인</h1>
                <div className="input-area">
                    <div className="id">
                        <p className="p2">아이디</p>
                        <input className="id-input p" type="text" placeholder="아이디를 입력해주세요." />
                    </div>
                    <div className="pw">
                        <p className="p2">비밀번호</p>
                        <input className="password-input p" type="password" placeholder="비밀번호를 입력해주세요." />
                    </div>
                    
                </div>
                <div className="btn-area">
                    <button className="h2 loginBtn">로그인 하기</button>
                    <p>회원 가입을 안 하셨나요? <Link>회원 가입 하러가기</Link></p>
                </div>
            </div>
        </>
    )
}