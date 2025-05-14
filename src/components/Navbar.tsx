import * as React from "react";
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react";

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="bg-gray-800">
            <nav className={"bg-white shadow-md"}>
                <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
                    <div className={"flex justify-between h-16"}>
                        <div className={"flex items-center"}>
                            <a href="#" className={"text-xl font-black text-gray-800"}>Kohaii Arts</a>
                        </div>
                        <div className={"hidden md:flex space-x-8 items-center"}>
                            <a href="#" className={"text-gray-500 hover:text-gray-700"}>Illustrations</a>
                            <a href="https://www.inprnt.com/gallery/kohaiiarts/" className={"text-gray-500 hover:text-gray-700"}>Shop</a>
                            <Popover className="relative">
                                <PopoverButton>Support</PopoverButton>
                                <PopoverPanel anchor="bottom" className="flex flex-col">
                                    <a href="https://www.patreon.com/KohaiiArts">Patreon</a>
                                    <a href="https://throne.com/kohaiiarts">Throne.gg</a>
                                </PopoverPanel>
                            </Popover>
                            <a href="/services" className={"text-gray-500 hover:text-gray-700"}>Services</a>
                            <a href="/faq" className={"text-gray-500 hover:text-gray-700"}>FAQ</a>
                            <a href="/contact" className={"text-gray-500 hover:text-gray-700"}>Contact</a>
                            <Popover className="relative">
                                <PopoverButton>Socials</PopoverButton>
                                <PopoverPanel anchor="bottom" className="flex flex-col">
                                    <a href="https://x.com/KohaiiArts">Twitter / X</a>
                                    <a href="https://www.instagram.com/kohaii_arts/">Instagram</a>
                                    <a href="https://kohaiiarts.newgrounds.com/art">Newgrounds</a>
                                </PopoverPanel>
                            </Popover>
                            <a href="/about" className={"text-gray-500 hover:text-gray-700"}>About</a>
                        </div>
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-800 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden px-4 pb-4">
                        <a href="#" className="block text-gray-600 py-2 hover:text-gray-800">Home</a>
                        <a href="#" className="block text-gray-600 py-2 hover:text-gray-800">About</a>
                        <a href="#" className="block text-gray-600 py-2 hover:text-gray-800">Services</a>
                        <a href="#" className="block text-gray-600 py-2 hover:text-gray-800">Contact</a>
                    </div>
                )}
            </nav>
        </div>
    )
}
export default Navbar;