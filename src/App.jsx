import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import Home from './page/Home';
import Main from './components/Main';
import LogInMain from './components/LogInMain';
import LogIn from './page/LogIn';
import SignUp from './page/SignUp';
import './style/index.css';
import './style/App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} setIsLogin={setIsLogin} />}>
          <Route index element={isLogin? <Navigate to="LogInMain" replace /> : <Main /> } />
          <Route path="LogInMain" element={<LogInMain />} />
        </Route>
        <Route path="/Log-in" element={<LogIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App