import Logo from '../assets/QuezLogo.svg';
import { Link } from 'react-router-dom';
import '../style/Components.css';
export default function Header({isLogin, setIsLogin}) {
    return (
        <>
            <div id='Header'>
                <Link to="/"></Link>
                <img src={Logo} alt="logo image" />
                <div className='login_area'>
                    <Link to="/" className='h3'>LogIn</Link>
                    <Link to="/" className='h3 blue'>SignUp</Link>
                </div>
            </div>
        </>
    )
}