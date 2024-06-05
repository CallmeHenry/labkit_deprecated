import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import SignInPage from './pages/SignInPage/SignInPage';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
