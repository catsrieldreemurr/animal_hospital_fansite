import Typograpy from "./typography";

export default function Navbar(){
    return (
        <nav className="bg-red-200 p-5 flex justify-between">
            <h1 className="text-3xl font-bold">Animal Hospital</h1>

            <div className="flex gap-5 items-center">
                <p>test</p>
                <p>test2</p>
                <Typograpy variant="sub">test</Typograpy>
            </div>
        </nav>
    )   
}