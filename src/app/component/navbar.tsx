import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/assests/image/logo.jpg";
import { FaCloudDownloadAlt } from "react-icons/fa";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  
  SheetTrigger,
} from "@/components/ui/sheet"


// import pdf from "../../../public/assests/cv/Shaheer_Naeem_CV.pdf"
// import Shaheer_Naeem_CV.pdf from "../../../public/assests/cv/Shaheer_Naeem_CV.pdf";



const Navbar = () => {
  return (
    <div className="bg-gray-900 z-50 sticky top-0">
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image src={logo} alt="logoofsk" height={100} width={100} className="rounded-sm" />
            <span className="ml-3 text-xl">Shaheer Naeem</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-white hidden md:block">Home</Link>
            <Link href={"#about"} className="mr-5 hover:text-white hidden md:block">About</Link>
            <Link href={"#skills"} className="mr-5 hover:text-white hidden md:block">Skills</Link>
            <Link href={"#Project"} className="mr-5 hover:text-white hidden md:block">Projects</Link>
            <Link href={"#Contact"} className="mr-5 hover:text-white hidden md:block">Contacts</Link>
          </nav>
          <Link target="_blank" href={"/assests/cv/MyCv.pdf"}>

  <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base">
    Download CV
    <FaCloudDownloadAlt className="ml-2 text-xl" />
  </button>
</Link>
<Sheet>
  <SheetTrigger className="md:hidden">
  <Menu />
  </SheetTrigger>
  <SheetContent>
  <nav className="md:ml-auto md:mr-auto flex flex-col">

  <Link href={"/"} className="mb-2 text-customSimple hover:text-hovercolor md:hidden">Home</Link>
  <Link href={"#about"} className="mb-2 text-customSimple hover:text-hovercolor md:hidden">About</Link>
  <Link href={"#skills"} className="mb-2 text-customSimple hover:text-hovercolor md:hidden">Skills</Link>
  <Link href={"#Project"} className="mb-2 text-customSimple hover:text-hovercolor md:hidden">Projects</Link>
  <Link href={"#Contact"} className="mb-2 text-customSimple hover:text-hovercolor md:hidden">Contacts</Link>
</nav>

  </SheetContent>
</Sheet>



        </div>
      </header>
    </div>
  );
};

export default Navbar;
