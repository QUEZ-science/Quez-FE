import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Home from './page/Home';
import Main from './components/Main';
import LogInMain from './components/LogInMain';
import './style/index.css';
import './style/App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="LogInMain" element={<LogInMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App