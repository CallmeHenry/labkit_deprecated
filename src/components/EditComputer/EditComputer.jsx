import { Button } from "../../components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "../../components/ui/drawer"
import axios from 'axios';
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { cn } from "../../utils/cn"
import { Textarea } from '../ui/textarea';
import ComboBox from "./combobox";
import { useEffect, useState } from 'react';

export default function AddComputer({ serialProp, setShowEditComputer }) {
    const baseUrl = import.meta.env.VITE_API_URL;

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    useEffect(() => {
        retrieveComputerInfo();
    }, []);

    useEffect(() => {
        if (!isDrawerOpen) {
            const timeoutId = setTimeout(() => {
                setShowEditComputer(false);
            }, 1000); 
            return () => clearTimeout(timeoutId);
        }
    }, [isDrawerOpen]);

    async function retrieveComputerInfo() {
        try {
            console.log("Retrieving computer from database.");
            const response = await axios.get(`${baseUrl}/toolkit/assets/computers/${serialProp}`);
            console.log(response);
            const computer = response.data.computer;

            const brand = document.querySelector('#brand');
            const serial = document.querySelector('#serial');
            const model = document.querySelector('#model');
            const cpu = document.querySelector('#processor');
            const ram = document.querySelector('#ram');
            const storage = document.querySelector('#storage');
            const os = document.querySelector('#os');
            const screen = document.querySelector('#screen');

            brand.textContent = computer.brand;
            serial.value = computer.serial;
            model.value = computer.model;
            cpu.value = computer.processor;
            ram.value = computer.ram;
            storage.value = computer.storage;
            os.value = computer.os;
            screen.value = computer.screen;
        } catch (error) {
            console.log("Error retrieving computer info ", error);
        }
    }

    async function handleSubmit() {

        const brand = document.querySelector('#brand'); //retrieving Button id="brand" from combobox Button
        const serial = document.querySelector('#serial');
        const model = document.querySelector('#model');
        const cpu = document.querySelector('#processor');
        const ram = document.querySelector('#ram');
        const storage = document.querySelector('#storage');
        const os = document.querySelector('#os');
        const screen = document.querySelector('#screen');

        const computer = {
            brand: brand.textContent,
            serial: serial.value,
            model: model.value,
            processor: cpu.value,
            ram: ram.value,
            storage: storage.value,
            os: os.value,
            screen: screen.value,

        }

        try {
            console.log("Adding computer to database.");
            await axios.put(`${baseUrl}/toolkit/assets/computers`, computer);
            return;
        } catch (error) {
            console.log("Error submitting: ", error);
            return;
        }

    }

    async function searchSerial(e) {
        e.preventDefault();
        const serial = document.querySelector('#serial');
        const brand = document.querySelector('#brand');
        const model = document.querySelector('#model');
        const cpu = document.querySelector('#processor');
        const ram = document.querySelector('#ram');
        const storage = document.querySelector('#storage');
        const os = document.querySelector('#os');
        const screen = document.querySelector('#screen');


        try {

            console.log(`Will attempt to search ${model.value} in DB.`);
            const response = await axios.get(`${baseUrl}/toolkit/assets/models/${model.value}`);
            const computer = response.data.computerInDB;

            brand.textContent = computer.brand;
            cpu.value = computer.processor;
            ram.value = computer.ram;
            storage.value = computer.storage;
            os.value = computer.os;
            screen.value = computer.screen;
            return;


        } catch (error) {
            console.log(error);

            console.log("Computer not found in DB. Will attempt to scrape.");
            // send scrape request by sending brand choice to check its website and serial number
            const response = await axios.post(`${baseUrl}/toolkit/assets/models`, { brand: brand.textContent, serial: serial.value, model: model.value });
            console.log(response.data);
            console.log(response.data.computer);

            const computer = {};

            for (const key in response.data.computer) {
                console.log(key);
                if (response.data.computer.hasOwnProperty(key)) {
                    switch (key) {
                        case 'Product Model':
                            computer.model = response.data.computer[key];
                            break;
                        case 'Processor':
                            computer.processor = response.data.computer[key];
                            break;
                        case 'Memory':
                            computer.ram = response.data.computer[key];
                            break;
                        case 'Storage':
                            computer.storage = response.data.computer[key];
                            break;
                        case 'Operating System':
                            computer.os = response.data.computer[key];
                            break;
                        case 'Screen':
                            computer.screen = response.data.computer[key];
                            break;
                        default:
                            break;
                    }
                }
            }

            console.log("Computer after mapping: ", computer);



            model.value = computer.model;
            cpu.value = computer.processor;
            ram.value = computer.ram;
            storage.value = computer.storage;
            os.value = computer.os;
            screen.value = computer.screen;
            return;

        }
    }

    return (
        <Drawer open={isDrawerOpen}>

            <DrawerContent>
                <div className="mx-auto w-6/12 h-[90dvh] flex flex-col">
                    <DrawerHeader>
                        <DrawerTitle>Edit Computer</DrawerTitle>
                        <DrawerDescription>Edit computer {serialProp}</DrawerDescription>
                    </DrawerHeader>

                    <form className="my-8 w-full flex flex-row flex-wrap align-middle justify-center gap-x-16 gap-y-12 ">
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="brand" className="flex flex-row gap-2">
                                <p>Brand</p>
                            </Label>
                            <ComboBox />

                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="serial" className="flex flex-row gap-2">
                                <p>Serial Number</p>
                            </Label>
                            <div className="flex flex-row justify-between">
                                <Input id="serial" type="text" name="serial" />
                                <Button variant="secondary" onClick={(e) => searchSerial(e)}>Scrape</Button>
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 w-1/3">
                            <Label htmlFor="model" className="flex flex-row gap-2">
                                <p>Model</p>
                            </Label>
                            <Input id="model" type="text" name="model" />
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
                        <DrawerClose asChild>
                            <Button onClick={handleSubmit}>Submit</Button>
                        </DrawerClose>

                        <DrawerClose asChild>
                            <Button variant="outline" onClick={() => { setIsDrawerOpen(false) }}>Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    )
}