import Logo from '../assets/QuezLogo.svg';
import { Link } from 'react-router-dom';
import '../style/Components.css';
export default function Header({isLogin, setIsLogin}) {
    return (
        <>
            <div id='Header'>
                <Link to="/"><img src={Logo} alt="logo image" /></Link>
                
                <div className='login_area'>
                    <Link to="/Log-in" className='h3'>LogIn</Link>
                    <Link to="/Sign-up" className='h3 blue'>SignUp</Link>
                </div>
            </div>
        </>
    )
}