import { useState } from 'react';
import Login from '../../components/Login/Login.jsx';
import Register from '../../components/Register/Register.jsx';


export default function SignInPage() {

  const [selectLoginOrRegister, setSelectLoginOrRegister] = useState('login');

  return (
    <div id="SignInPage" className="flex flex-col items-center justify-center w-dvw h-dvh outline-blue-500 background-color">
      <div id="form" className="flex flex-col items-center justify-around outline w-96 p-16">
        {selectLoginOrRegister === 'login' ? (
          <Login setSelectLoginOrRegister={setSelectLoginOrRegister} />
        ) : (
          <Register setSelectLoginOrRegister={setSelectLoginOrRegister}/>
        )}
      </div>
    </div>
  );
};