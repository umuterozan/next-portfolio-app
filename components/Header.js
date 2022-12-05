import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
    const router = useRouter();

    const [navMenu, setNavMenu] = useState(false);

    const navMenuHandle = () => {
        document.querySelector("nav").classList.toggle("hidden");
        setNavMenu(() => (!navMenu ? true : false));
    };

    return (
        <header className="flex items-center justify-between h-20 portfolio--container flex-col gap-5 pt-4 lg:flex-row lg:gap-0 lg:pt-0">
            <div className="flex items-center justify-between w-full px-4 sm:px-0 sm:block sm:w-fit">
                <div className="sm:block">
                    <svg
                        width="146"
                        height="39"
                        viewBox="0 0 288 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M30.0938 41.875L0.03125 29.3438V23L30.0938 10.4375V18.6875L11.5312 26.1562L30.0938 33.5938V41.875ZM57.0625 0.4375L42.0625 52.9688H32.5L47.5938 0.4375H57.0625ZM90.125 31.0312C90.125 36.1146 90 39.7188 89.75 41.8438C89.5208 43.9479 88.7708 45.875 87.5 47.625C86.25 49.375 84.5521 50.7188 82.4062 51.6562C80.2604 52.5938 77.7604 53.0625 74.9062 53.0625C72.1979 53.0625 69.7604 52.625 67.5938 51.75C65.4479 50.8542 63.7188 49.5208 62.4062 47.75C61.0938 45.9792 60.3125 44.0521 60.0625 41.9688C59.8125 39.8854 59.6875 36.2396 59.6875 31.0312V22.375C59.6875 17.2917 59.8021 13.6979 60.0312 11.5938C60.2812 9.46875 61.0312 7.53125 62.2812 5.78125C63.5521 4.03125 65.2604 2.6875 67.4062 1.75C69.5521 0.8125 72.0521 0.34375 74.9062 0.34375C77.6146 0.34375 80.0417 0.791667 82.1875 1.6875C84.3542 2.5625 86.0938 3.88542 87.4062 5.65625C88.7188 7.42708 89.5 9.35417 89.75 11.4375C90 13.5208 90.125 17.1667 90.125 22.375V31.0312ZM76.9688 14.4062C76.9688 12.0521 76.8333 10.5521 76.5625 9.90625C76.3125 9.23958 75.7812 8.90625 74.9688 8.90625C74.2812 8.90625 73.75 9.17708 73.375 9.71875C73.0208 10.2396 72.8438 11.8021 72.8438 14.4062V38.0312C72.8438 40.9688 72.9583 42.7812 73.1875 43.4688C73.4375 44.1562 74 44.5 74.875 44.5C75.7708 44.5 76.3438 44.1042 76.5938 43.3125C76.8438 42.5208 76.9688 40.6354 76.9688 37.6562V14.4062ZM257.781 10.4375L287.844 22.9375V29.3125L257.781 41.875V33.625L276.344 26.1562L257.781 18.7188V10.4375Z"
                            fill="#FF8303"
                        />
                        <path
                            d="M107.531 10.5312L107.312 14.3438C108.229 12.8229 109.344 11.6875 110.656 10.9375C111.99 10.1667 113.521 9.78125 115.25 9.78125C117.417 9.78125 119.188 10.2917 120.562 11.3125C121.938 12.3333 122.823 13.625 123.219 15.1875C123.615 16.7292 123.812 19.3125 123.812 22.9375V52H111.188V23.2812C111.188 20.4271 111.094 18.6875 110.906 18.0625C110.719 17.4375 110.198 17.125 109.344 17.125C108.448 17.125 107.885 17.4896 107.656 18.2188C107.427 18.9271 107.312 20.8438 107.312 23.9688V52H94.6875V10.5312H107.531ZM141.5 5V11.5312H144.906V18.0938H141.5V40.2812C141.5 43.0104 141.635 44.5312 141.906 44.8438C142.198 45.1562 143.375 45.3125 145.438 45.3125V52H140.344C137.469 52 135.417 51.8854 134.188 51.6562C132.958 51.4062 131.875 50.8542 130.938 50C130 49.125 129.417 48.1354 129.188 47.0312C128.958 45.9062 128.844 43.2812 128.844 39.1562V18.0938H126.125V11.5312H128.844V5H141.5ZM158.969 26.5938H147.125V23.8125C147.125 20.6042 147.49 18.1354 148.219 16.4062C148.969 14.6562 150.458 13.1146 152.688 11.7812C154.917 10.4479 157.812 9.78125 161.375 9.78125C165.646 9.78125 168.865 10.5417 171.031 12.0625C173.198 13.5625 174.5 15.4167 174.938 17.625C175.375 19.8125 175.594 24.3333 175.594 31.1875V52H163.312V48.3125C162.542 49.7917 161.542 50.9062 160.312 51.6562C159.104 52.3854 157.656 52.75 155.969 52.75C153.76 52.75 151.729 52.1354 149.875 50.9062C148.042 49.6562 147.125 46.9375 147.125 42.75V39.3438C147.125 36.2396 147.615 34.125 148.594 33C149.573 31.875 152 30.5625 155.875 29.0625C160.021 27.4375 162.24 26.3438 162.531 25.7812C162.823 25.2188 162.969 24.0729 162.969 22.3438C162.969 20.1771 162.802 18.7708 162.469 18.125C162.156 17.4583 161.625 17.125 160.875 17.125C160.021 17.125 159.49 17.4062 159.281 17.9688C159.073 18.5104 158.969 19.9375 158.969 22.25V26.5938ZM162.969 32.2812C160.948 33.7604 159.771 35 159.438 36C159.125 37 158.969 38.4375 158.969 40.3125C158.969 42.4583 159.104 43.8438 159.375 44.4688C159.667 45.0938 160.229 45.4062 161.062 45.4062C161.854 45.4062 162.365 45.1667 162.594 44.6875C162.844 44.1875 162.969 42.8958 162.969 40.8125V32.2812ZM192.938 1.40625V52H179.938V1.40625H192.938ZM226.094 32H209.75V40.9688C209.75 42.8438 209.885 44.0521 210.156 44.5938C210.427 45.1354 210.948 45.4062 211.719 45.4062C212.677 45.4062 213.312 45.0521 213.625 44.3438C213.958 43.6146 214.125 42.2188 214.125 40.1562V34.6875H226.094V37.75C226.094 40.3125 225.927 42.2812 225.594 43.6562C225.281 45.0312 224.531 46.5 223.344 48.0625C222.156 49.625 220.646 50.8021 218.812 51.5938C217 52.3646 214.719 52.75 211.969 52.75C209.302 52.75 206.948 52.3646 204.906 51.5938C202.865 50.8229 201.271 49.7708 200.125 48.4375C199 47.0833 198.219 45.6042 197.781 44C197.344 42.375 197.125 40.0208 197.125 36.9375V24.8438C197.125 21.2188 197.615 18.3646 198.594 16.2812C199.573 14.1771 201.177 12.5729 203.406 11.4688C205.635 10.3438 208.198 9.78125 211.094 9.78125C214.635 9.78125 217.552 10.4583 219.844 11.8125C222.156 13.1458 223.771 14.9271 224.688 17.1562C225.625 19.3646 226.094 22.4792 226.094 26.5V32ZM213.438 25.25V22.2188C213.438 20.0729 213.323 18.6875 213.094 18.0625C212.865 17.4375 212.396 17.125 211.688 17.125C210.812 17.125 210.271 17.3958 210.062 17.9375C209.854 18.4583 209.75 19.8854 209.75 22.2188V25.25H213.438ZM255.25 10.5312L250.219 30.3438L256.312 52H244.031C242.823 46.5417 241.906 41.8438 241.281 37.9062C240.448 42.8229 239.542 47.5208 238.562 52H228L233.438 30.3438L228 10.5312H238.562C240.25 18.9896 241.156 23.7917 241.281 24.9375C242.49 17.875 243.406 13.0729 244.031 10.5312H255.25Z"
                            fill="#F0E3CA"
                        />
                    </svg>
                </div>
                <div
                    className="cursor-pointer sm:hidden"
                    onClick={navMenuHandle}
                >
                    {navMenu && (
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.41406 0.585938L0.585938 3.41406L15.1719 18L0.585938 32.5859L3.41406 35.4141L18 20.8281L32.5859 35.4141L35.4141 32.5859L20.8281 18L35.4141 3.41406L32.5859 0.585938L18 15.1719L3.41406 0.585938Z"
                                fill="#F0E3CA"
                            />
                        </svg>
                    )}
                    {!navMenu && (
                        <svg
                            width="36"
                            height="24"
                            viewBox="0 0 36 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 24H36V20H0V24ZM0 14H36V10H0V14ZM0 0V4H36V0H0Z"
                                fill="#F0E3CA"
                            />
                        </svg>
                    )}
                </div>
            </div>
            <nav className="font-consolata font-bold text-xl text-primary-white bg-primary-dark z-0 w-full py-48 sm:py-0 sm:w-fit sm:bg-transparent hidden sm:block">
                <ul className="flex items-center gap-16 flex-col sm:flex-row">
                    <Link href="/">
                        <li
                            className={
                                router.pathname === "/"
                                    ? "text-primary-yellow"
                                    : "text-primary-white hover:text-primary-yellow"
                            }
                        >
                            About Me
                        </li>
                    </Link>
                    <Link href="/skills">
                        <li
                            className={
                                router.pathname === "/skills"
                                    ? "text-primary-yellow"
                                    : "text-primary-white hover:text-primary-yellow"
                            }
                        >
                            Skills
                        </li>
                    </Link>
                    <Link href="/projects">
                        <li
                            className={
                                router.pathname === "/projects"
                                    ? "text-primary-yellow"
                                    : "text-primary-white hover:text-primary-yellow"
                            }
                        >
                            Pet-Projects
                        </li>
                    </Link>
                    <Link href="/contacts">
                        <li
                            className={
                                router.pathname === "/contacts"
                                    ? "text-primary-yellow"
                                    : "text-primary-white hover:text-primary-yellow"
                            }
                        >
                            Contacts
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}
