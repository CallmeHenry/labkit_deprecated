import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import SignInPage from './pages/SignInPage/SignInPage';
import ToolkitPage from './pages/ToolkitPage/ToolkitPage';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/toolkit" element={<ToolkitPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
