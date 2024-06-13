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
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                email: e.target.email.value,
                password: e.target.password.value,
            });
            console.log("Registration successful.");
            setSelectLoginOrRegister("login");

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Create your account
            </h2>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname" className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <p>First name</p>
                            </Label>
                        <Input id="firstname" placeholder="Lab" type="text" name="firstName" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname" className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <p>Last name</p>
                            </Label>
                        <Input id="lastname" placeholder="Kit" type="text" name="lastName" />
                    </LabelInputContainer>
                </div>
                    <LabelInputContainer className="mb-4">
                    <Label htmlFor="email" className="flex flex-row gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <p>Email Address</p>
                        </Label>
                    <Input id="email" placeholder="user@labkit.com" type="email" name="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password" className="flex flex-row gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <p>Password</p>
                        </Label>
                    <Input id="password" placeholder="••••••••" type="password" name="password" />
                </LabelInputContainer>

                <button
                    className="relative group/btn  bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Sign up
                    <BottomGradient />
                </button>
                <LabelInputContainer>
                    <div className="mt-2">
                        <label>Already have an account?</label>
                        <button className="pl-2 text-black" onClick={() => setSelectLoginOrRegister("login")}>Login</button>
                    </div>
                </LabelInputContainer>

            </form>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-1 w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-1 w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
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
