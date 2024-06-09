import * as React from "react"

import { Button } from "../../components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "../../components/ui/drawer"
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { cn } from "../../utils/cn"
import { Bot } from "lucide-react";
import { Textarea } from '../ui/textarea';
import ComboBox from "./combobox";

export default function AddComputer() {
    const baseUrl = import.meta.env.VITE_API_URL;
    const loginUrl = `${baseUrl}/signin/login`;

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            console.log("Logging in...")
            const response = await axios.post(loginUrl, {
                email: e.target.email.value,
                password: e.target.password.value
            })

            Cookies.set("JWTtoken", response.data.token, { expires: 2 });
            console.log("Logged in successfully.");
            navigate('/toolkit');
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Add Computer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-6/12 h-[90dvh] flex flex-col">
                    <DrawerHeader>
                        <DrawerTitle>Add Computer</DrawerTitle>
                        <DrawerDescription>Add a computer to the database.</DrawerDescription>
                    </DrawerHeader>

                    <form className="my-8 w-full flex flex-row flex-wrap align-middle justify-center gap-x-16 gap-y-12 " onSubmit={handleSubmit}>
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="serial" className="flex flex-row gap-2">
                                <p>Serial Number</p>
                            </Label>
                            <Input id="serial" type="text" name="serial" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="model" className="flex flex-row gap-2">
                                <p>Model</p>
                            </Label>
                            <Input id="model" type="text" name="model" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="brand" className="flex flex-row gap-2">
                                <p>Brand</p>
                            </Label>
                            {/* <Input id="brand" type="text" name="brand" /> */}
                        <ComboBox id="brand" name="brand"/>
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="processor" className="flex flex-row gap-2">
                                <p>CPU</p>
                            </Label>
                            <Input id="processor" type="text" name="processor" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="ram" className="flex flex-row gap-2">
                                <p>RAM</p>
                            </Label>
                            <Input id="ram" type="text" name="ram" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="storage" className="flex flex-row gap-2">
                                <p>Storage</p>
                            </Label>
                            <Input id="storage" type="text" name="storage" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="os" className="flex flex-row gap-2">
                                <p>Operating System</p>
                            </Label>
                            <Input id="os" type="text" name="os" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="screen" className="flex flex-row gap-2">
                                <p>Display</p>
                            </Label>
                            <Input id="screen" type="text" name="screen" />
                        </LabelInputContainer>
                         <LabelInputContainer className="mb-4 w-full">
                            <Label htmlFor="description" className="flex flex-row gap-2">
                                <p>Notes</p>
                            </Label>
                             <Textarea id="description" name="description" className="resize-none" />
                        </LabelInputContainer>
                       


                    </form>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
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