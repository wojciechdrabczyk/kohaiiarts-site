import * as React from "react";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {Fragment} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="bg-gray-800">
            <nav className={"bg-white shadow-md"}>
                <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
                    <div className={"flex justify-between h-16"}>
                        <div className={"flex items-center"}>
                            <a href="#" className={"text-xl font-black text-gray-800"}>KohaiiArts</a>
                        </div>
                        <div className={"hidden md:flex space-x-8 items-center"}>
                            <a href="#" className={"text-gray-500 hover:text-gray-700"}>Illustrations</a>
                            <a href="/about" className={"text-gray-500 hover:text-gray-700"}>About</a>
                            <a href="/services" className={"text-gray-500 hover:text-gray-700"}>Services</a>
                            <a href="/contact" className={"text-gray-500 hover:text-gray-700"}>Contact</a>
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
                {isOpen &&
                    (
                        <div className={"md:hidden px-4 pb-4 space-y-1"}>
                            <Menu as="div" className="relative">
                                <MenuButton as={Fragment} className={"w-full text-left py-2 text-gray-600 hover:gray-800"}>
                                    <button>My account</button>
                                </MenuButton>
                                <MenuItems anchor="bottom" className={"pl-4"}>
                                    <MenuItem>
                                        <a className="block data-focus:bg-blue-100" href="/settings">
                                            Illustratations
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a className="block data-focus:bg-blue-100" href="/support">
                                            About
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a className="block data-focus:bg-blue-100" href="/license">
                                            Services
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a className="block data-focus:bg-blue-100" href="/license">
                                            Contact
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    )}
            </nav>
        </div>
    )
}
export default Navbar;