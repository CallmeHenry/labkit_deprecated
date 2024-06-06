import Dashboard from "../../components/Dashboard/Dashboard";

export default function ToolkitPage() {
    return (
        <div id="ToolkitPage">
            <div className="drawer">

                <input id="my-drawer" type="checkbox" className="drawer-toggle" />



                <div className="drawer-content flex">
                    {/* Page content here */}


                    {/* mini side bar */}
                    <div className="flex flex-col w-48 h-dvh bg-base-200 menu">
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Dashboard</label>
                    </div>

                    <Dashboard />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Close</label>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}