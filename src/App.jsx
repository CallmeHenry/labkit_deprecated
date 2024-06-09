import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import SignInPage from './pages/SignInPage/SignInPage';
import ToolkitPage from './pages/ToolkitPage/ToolkitPage';


function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      <BrowserRouter>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignIn" element={<SignInPage />} />
            <Route path="/toolkit" element={<ToolkitPage />} />
          </Routes>
        )
        }

      </BrowserRouter >
    </>
  )
}

export default App
