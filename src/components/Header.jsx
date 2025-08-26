import Logo from '../assets/QuezLogo.svg';
import { Link } from 'react-router-dom';
import '../style/Components.css';
export default function Header() {
    return (
        <>
            <div id='Header'>
                <Link to="/"></Link>
                <img src={Logo} alt="" />
                <div className='login_area'>
                    <Link to="/">LogIn</Link>
                    <Link to="/">SignUp</Link>
                </div>
            </div>
        </>
    )
}