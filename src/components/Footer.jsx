import {FaDiscord, FaGithub, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
    const iconsClassName = "text-black hover:text-white transition duration-300 ease-in-out cursor-pointer";

    return (
        // Changed justify-between to justify-end
        <footer className="flex justify-center items-center min-w-dvw min-h-[55px] bg-violet-300 px-[4dvw] md:px-[10dvw]">
            <div className="w-full flex justify-start items-center">
                <p className="font-robert-regular text-sm text-black">© Nova 2024. All rigths reserved</p>
            </div>
            <div className="w-full flex flex-row gap-x-2 md:gap-x-4 justify-center items-center translate-x-[12px]">
                <FaDiscord className={iconsClassName} />
                <FaTwitter className={iconsClassName}  />
                <FaInstagram className={iconsClassName} />
                <FaYoutube className={iconsClassName} />
                <FaGithub className={iconsClassName} />
            </div>
            <div className="w-full flex justify-end items-center">
                <p className="font-robert-regular text-xs md:text-sm text-black">Privacy Policy</p>
            </div>
        </footer>
    )
}

export default Footer;