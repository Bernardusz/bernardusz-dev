import { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react"
import TablerIcon from "@iconify-json/tabler/icons.json"

export default function SidebarIsland() {
    const [open, setOpen] = useState<boolean>(false);
	const [width, setWidth] = useState<number>(window.innerWidth);
	const toggleSidebar = useCallback(() => {
		setOpen((prev) => !prev);
	}, [])
	useEffect(() => {
		const main = document.querySelector("main");
		if (!main) return;
		if (open){
			main?.classList.add("blur-xl");
			main?.addEventListener("click", toggleSidebar);
		}
		else {
			main?.classList.remove("blur-xl");
		}
		return () => main?.removeEventListener("click", toggleSidebar)

	}, [open])
	useEffect(() => {
		const handleResize = () => {
			const currentWidth = window.innerWidth;
			setWidth(currentWidth);
			if (currentWidth > 1280) {
				setOpen(false);
			}
    };

    window.addEventListener("resize", handleResize);

    // CLEANUP: Important! This removes the listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
}, []); // Empty array means this only sets up the listener ONCE
	
	return (
        <>
			<header className="fixed top-0 left-0 z-50 h-20 w-full bg-background bg- px-8 py-3">
                <div className="flex w-full flex-row items-center justify-between xl:hidden">
                    <a href="/">
						<h1>Bernardusz</h1>
					</a>
                    <Icon
                        className="hover:text-primary"
						width={36} height={36}
						icon="tabler:menu-2"
						onClick={toggleSidebar}
                    />
                </div>
                <div className="relative xl:flex h-full items-center hidden">
                    {/* LEFT */}
                    <a href="/" className="z-10 hover:text-primary">
						<h1>Bernardusz</h1>
					</a>

                    {/* CENTER (TRUE CENTER) */}
                    <nav className="absolute left-1/2 flex -translate-x-1/2 gap-6">
                        <a className="link-primary" href="/">
                            Home
						</a>
                        <a className="link-primary" href="/about">
                            About
						</a>
                        <a className="link-primary" href="/products">
                            Products
						</a>
                    </nav>

                    {/* RIGHT */}
                    <div className="ml-auto flex items-center gap-4">
                        <a className="link-primary" href="/find-us">
                            Find Us
						</a>
                        {/* <!-- <ToggleMode /> --> */}
                    </div>
                </div>
        	</header>
            <div
                className={`
                    flex fixed inset-0 z-50 top-0 w-full right-0 transition-transform duration-500 bg-background xl:hidden
                    ${open ? "translate-x-[20vw]" : "translate-x-full"}
                `}
            >
                <aside className="flex flex-col gap-8 p-8 w-[82vw] bg-sidebar justify-between">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row w-full justify-between gap-4 items-center ">
                                <a onClick={toggleSidebar} href="/">
                                    <div className="flex flex-row w-full justify-start gap-2 items-center">
                                        <h4>Bernardusz</h4>
                                    </div>
                                </a>
                                {/* <ToggleMode /> */}
                            </div>
                            <p>A Frontend developer, Future Full Stack Software Engineer</p>
                        </div>
                        <nav className="flex flex-col gap-4">
                            <div className="flex flex-col gap-3">
                                <p className="p-deemphasize">Primary</p>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <a className="hover:text-primary" onClick={toggleSidebar} href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="hover:text-primary"
											onClick={toggleSidebar}
                                            href="/projects"
                                        >
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a
											className="hover:text-primary"
                                            onClick={toggleSidebar}
                                            href="/achievments"
                                        >
                                            Achievments
                                        </a>
                                    </li>
									<li>
                                        <a
										className="hover:text-primary"
                                            onClick={toggleSidebar}
                                            href="/contact"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="p-deemphasize">Secondary</p>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <a
										className="hover:text-primary"
                                            onClick={toggleSidebar}
                                            href="/about"
                                        >
                                            About
                                        </a>
                                    </li>
									<li>
                                        <a
										className="hover:text-primary"
                                            onClick={toggleSidebar}
                                            href="/services"
                                        >
                                            Services
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h4>Learn More</h4>
                                <hr className="w-full" />
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                                <a
                                    className="flex flex-row gap-2 items-center hover:text-primary"
                                    onClick={toggleSidebar}
                                    href="/products"
                                >
                                    <Icon icon="tabler:device-laptop" width={24} height={24}/>
									<p className="hover:text-primary">View My Best Projects</p>
                                </a>
                                <a
                                    className="flex flex-row gap-2 items-center hover:text-primary"
                                    href="/location"
                                    onClick={toggleSidebar}
                                >
                                    <Icon icon="tabler:trophy" width={24} height={24}/>
									<p className="hover:text-primary">View My Top Achievments</p>
                                </a>
                                <a
                                    onClick={toggleSidebar}
                                    className="flex flex-row gap-2 items-center hover:text-primary"
                                    href="/contact"
                                >
                                    <Icon icon="tabler:message" width={24} height={24}/>
									<p className="hover:text-primary">Learn About Me</p>
								</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <p>Bernardusz</p>
                            <hr className="w-full" />
                        </div>
                        <p className="p-deemphasize">
                            Frontend Devs - Future Full Stack Software Engineer
                        </p>
                        <hr className="w-full" />
                        <div className="flex flex-row gap-8 px-4 w-full justify-center">
                            <a
                                 className="hover:text-primary transition-colors"
                                onClick={toggleSidebar}
                                target="_blank"
                                href="https://github.com/Bernardusz"
                                rel="noopener"
                            >
								<Icon
									className="hover:text-primary"
									width={24} height={24}
									icon="tabler:brand-github"
									onClick={toggleSidebar}
								/>
							</a>
                            <a
                                className="hover:text-primary transition-colors"
                                onClick={toggleSidebar}
                                target="_blank"
                                rel="noopener"
                                href="https://www.instagram.com/bernardusz.dev"
                            >
							<Icon
								className="hover:text-primary"
								width={24} height={24}
								icon="tabler:brand-instagram"
								onClick={toggleSidebar}
							/>
							</a>
                        </div>
                    </div>
                </aside>
            </div>
		</>
        )
}