import Header from '../components/Header';
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from 'react';
import '../style/Login.css';
import openEye from '../assets/openEye.svg';
import closeEye from '../assets/closeEye.svg';

export default function SignUp() {
    const [user, setUser] = useState(
        {id:'', grade:0, class:0, num:0, name:'', pw:''}
    );
    const inputRef = useRef([]);
    const [view, setView] = useState(false);

    const change = e => {
        const {name, value} = e.target;
        setLoginData(data => ({
            ...data,
            [name]:value
        }));
    }
    const signup = ()=>{}
    return (
        <>
            <Header />
            <div className="login-area">
                <h1>회원가입</h1>
                <div className="input-area">
                    <div className='school-info'>
                        <select name="grade" className='p1' ref={el => inputRef.current[0]=el}>
                            <option value="" disabled>학년</option>
                            <option value="">1학년</option>
                            <option value="">2학년</option>
                            <option value="">3학년</option>
                        </select>
                        <select name="class" className='p1' ref={el => inputRef.current[1]=el} >
                            <option value="" disabled>반</option>
                            <option value="">1반</option>
                            <option value="">2반</option>
                            <option value="">3반</option>
                            <option value="">4반</option>
                        </select>
                        <input type="text" placeholder='번호' />
                    </div>
                    <div>
                        <p className='p2'>닉네임</p>
                        <input className='name-input p' type="text" placeholder='이름을 입력해주세요.'
                        name='name' value={user.name} ref={el => inputRef.current[3]=el} />
                    </div>
                    <div className="id">
                        <p className="p2">아이디</p>
                        <input className="id-input p" type="text" placeholder="아이디를 입력해주세요."
                        name='id' value={user.id} ref={el => inputRef.current[4]=el} onChange={change} />
                    </div>
                    <div className="pw">
                        <p className="p2">비밀번호</p>
                        <input className="password-input p" type={view?'text':'password'} placeholder="비밀번호를 입력해주세요." 
                        name='pw' value={user.pw} ref={el=>inputRef.current[5]=el} onChange={change} />
                        <button className="pwBtn" onClick={()=>{setView(!view)}}><img src={view?openEye:closeEye} alt="" /></button>
                    </div>
                    
                </div>
                <div className="btn-area">
                    <button className="h2 loginBtn" onClick={signup}>회원가입 하기</button>
                    <p>계정이 이미 있나요? <Link to='/Log-in'>로그인 하러가기</Link></p>
                </div>
            </div>        
        </>
    )
}