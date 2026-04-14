import Button from "./Button.jsx";
import { MdNearMe } from "react-icons/md";

export default function NavBar() {
    const navItems = ['nexus', 'valut', 'prologue', 'about', 'contact', '..'];
    return (

        <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
            <nav className="mx-auto max-w-full h-16 bg-black rounded-lg flex items-center px-8 gap-8">
                <img
                    src="img/logo.png"
                    alt="Logo"
                    className="w-10"
                />
                <Button
                    id="products"
                    title="Products"
                    rightIcon={<MdNearMe size={13} />}
                    containerClass="bg-blue-75 text-black flex items-center gap-1"
                />
                <ul className="flex flex-row items-center gap-10 ml-auto">
                    {navItems.map((item, index) => (
                        <li id={index} className="relative group cursor-pointer text-xs text-blue-50 uppercase">
                            {item}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-50 origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

