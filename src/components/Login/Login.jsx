"use client"
import React from "react"
import axios from 'axios';
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { cn } from "../../utils/cn"


export default function Register({ setSelectLoginOrRegister }) {

    const baseUrl = import.meta.env.VITE_API_URL;
    const signupUrl = `${baseUrl}/signin/register`;

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await axios.post(signupUrl, {
                email: e.target.email.value,
                username: e.target.username.value,
                password: e.target.password.value,
            });
            console.log("Registration successful.");

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Login
            </h2>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email" className="flex flex-row gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <p>Email Address</p>
                        </Label>
                    <Input id="email" placeholder="user@labkit.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password" className="flex flex-row gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <p>Password</p>
                        </Label>
                    <Input id="password" placeholder="••••••••" type="password" />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Login
                    <BottomGradient />
                </button>
                <LabelInputContainer>
                    <div className="mt-2">
                        <label>Don't have an account?</label>
                        <button className="pl-2 text-black" onClick={() => setSelectLoginOrRegister("register")}>Register</button>
                    </div>
                </LabelInputContainer>

            </form>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-1 w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-1 w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    )
}

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    )
}


// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';

// export default function Login({ setSelectLoginOrRegister }) {

//     const baseUrl = import.meta.env.VITE_API_URL;
//     const loginUrl = `${baseUrl}/signin/login`;

//     const navigate = useNavigate();

//     async function handleLogin(e) {
//         e.preventDefault();

//         try {
//             console.log("Logging in...")
//             const response = await axios.post(loginUrl, {
//                 username: e.target.username.value,
//                 password: e.target.password.value
//             })

//             Cookies.set("JWTtoken", response.data.token, { expires: 2 });
//             console.log("Logged in successfully.");
//             navigate('/toolkit');
//         } catch (error) {
//             console.log(error);

//         }
//     }

//     return (
//         <div className="prose flex flex-col prose-headings:text-blue-50 text-blue-100">
//             <h1 className="mb-5 self-start">Login</h1>
//             <form onSubmit={handleLogin} className="flex flex-col gap-y-2">
//                 <label className="input input-bordered flex items-center gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
//                     <input type="text" className="grow" placeholder="Username" name="username" />
//                 </label>
//                 <label className="input input-bordered flex items-center gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
//                     <input type="password" className="grow" placeholder="Password" name="password" />
//                 </label>
//                 <button className="btn btn-block btn-primary" type="submit">Login</button>
//             </form>

//             <label>Don't have an account?</label>
//             <button className="btn btn-secondary" onClick={() => setSelectLoginOrRegister("register")}>Register</button>

//         </div>
//     )
// }