import { useState } from 'react';
import Login from '../../components/Login/Login.jsx';
import Register from '../../components/Register/Register.jsx';
import { BackgroundGradient } from '../../components/ui/background-gradient.jsx';
import { BackgroundBeams } from '../../components/ui/background-beams.jsx';

export default function SignInPage() {

  const [selectLoginOrRegister, setSelectLoginOrRegister] = useState('login');

  return (
    <div id="SignInPage" className="flex flex-col items-center justify-center w-dvw h-dvh bg-gradient-to-tr from-blue-500 to-cyan-300">
      <div id="form" className="flex flex-col items-center justify-around rounded-xl p-2" >
        {selectLoginOrRegister === 'login' ? (
          <BackgroundGradient >
            <Login setSelectLoginOrRegister={setSelectLoginOrRegister} />
          </BackgroundGradient>
        ) : (
          <BackgroundGradient>
            <Register setSelectLoginOrRegister={setSelectLoginOrRegister} />
          </BackgroundGradient>
        )}
      </div>
      <BackgroundBeams />
    </div>
  );
};