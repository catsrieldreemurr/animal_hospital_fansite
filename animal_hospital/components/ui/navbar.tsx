import Link from "next/link";
import Typograpy from "./typography";
import { Button } from "@base-ui/react";
import Image from "next/image";

export default function Navbar(){
    return (
        <nav className="bg-red-200 p-5 flex justify-between">
            <Typograpy variant="h1" isBold>Animal Hospital</Typograpy>

            <div className="flex gap-5 items-center hidden sm:flex">
                <Link href={"/"}>About the Hospital</Link>
                <Link href={"/"}>Meet the Staff</Link>
                <Link href={"/"}>Our Services</Link>
                <Link href={"/"}>Contact Us</Link>
            </div>

            <Button className={"flex sm:hidden"}>
                <Image src={"/menu.png"} height={30} width={30} alt="Menu"></Image>
            </Button>
        </nav>
    )   
}