import Logo from '../assets/QuezLogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Components.css';
export default function Header({isLogin, setIsLogin}) {
    const navigate = useNavigate();
    const LogOut = () => {
        setIsLogin(!isLogin);
        console.log(isLogin);
        navigate('/');
    }
    return (
        <>
            <div id='Header'>
                <Link to="/"><img src={Logo} alt="logo image" /></Link>
                
                <div className='login_area'>
                    {isLogin && <button onClick={LogOut}>로그아웃</button>}
                    {!isLogin && (
                        <>
                            <Link to="/Log-in" className='h3'>LogIn</Link>
                            <Link to="/Sign-up" className='h3 blue'>SignUp</Link>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}