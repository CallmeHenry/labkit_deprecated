import Assets from "../../components/Assets/Assets";
import Dashboard from "../../components/Dashboard/Dashboard";
import { useState } from 'react';
import Chevron from './chevron';

export default function ToolkitPage() {

    const [showComponent, setShowComponent] = useState("dashboard");

    return (
        <div id="ToolkitPage" className="bg-gradient-to-tr from-blue-500 to-cyan-300">
            <div className="drawer">

                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex">


                    {/* mini side bar */}
                    <div className="flex flex-col w-24 h-dvh bg-none menu mr-8">
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] border-none drop-shadow-md"><Chevron text={"Open"} rotation={"-rotate-90"} /></label>

                    </div>
                    <div className="container mx-auto mt-8 mb-8 p-20 drop-shadow-xl ">


                        {showComponent === "dashboard" ? <Dashboard /> : ""}
                        {showComponent === "assets" ? <Assets /> : ""}

                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 min-h-full text-base-content gap-4 bg-white">
                        {/* Sidebar content here */}
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button bg-gradient-to-br  from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] border-none">
                            <div className="w-full h-full">
                                <Chevron text={"Close"} rotation={"rotate-90"} />
                            </div>
                        </label>
                        <li><a className="p-4" onClick={() => setShowComponent("dashboard")}>Dashboard</a></li>
                        <li><a className="p-4" onClick={() => setShowComponent("assets")}>Assets</a></li>

                    </ul>

                </div>
            </div>

        </div>
    )
}