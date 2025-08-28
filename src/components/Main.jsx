import { Link } from 'react-router-dom';
import Logo from '../assets/QuezLogo.svg';

export default function Main(){
    return (
        <>
        <div id="main">
            <h3>통합 과학 퀴즈의 모든 것</h3>
            <img src={Logo} alt="" />
            <div className='LoginBtns'>
                <Link to="/Log-in" className='loginBtn h4'>지금 로그인하기</Link>
                <Link to="/Sign-up" className='signupBtn h4'>계정이 없다면?</Link>
            </div>
        </div>
        </>
    )
}