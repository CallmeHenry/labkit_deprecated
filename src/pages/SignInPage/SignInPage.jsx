import { useState } from 'react';
import Login from '../../components/Login/Login.jsx';
import Register from '../../components/Register/Register.jsx';


export default function SignInPage() {

  const [selectLoginOrRegister, setSelectLoginOrRegister] = useState('login');

  return (
    <div id="SignInPage" className="flex flex-col items-center justify-center w-dvw h-dvh bg-gradient-to-tr from-blue-500 to-cyan-300">
      <div id="form" className="flex flex-col items-center justify-around rounded-xl p-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400" >
        {selectLoginOrRegister === 'login' ? (
          <Login setSelectLoginOrRegister={setSelectLoginOrRegister} />
        ) : (
          <Register setSelectLoginOrRegister={setSelectLoginOrRegister}/>
        )}
      </div>
    </div>
  );
};