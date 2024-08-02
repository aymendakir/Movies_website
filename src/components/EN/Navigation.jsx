import { IoSearch } from "react-icons/io5";

import "./Watch-page/index.css"
export function Navigation() {


    return (
        <header className="Main--Header fixed right-0 w-[80%] mx-auto bg-white/20  rounded-full mt-5 " >
            <div className={"absolute w-full h-full rounded-full backdrop-blur-lg top-0 left-0 -z-10"}></div>
            <div className="Content--Wrapper flex items-center justify-between mx-5">

                <a className="Logo--Area">
                    <h1>Top<span>Logo</span>

                    </h1>
                </a>
                <nav className="Menu--Contents  flex items-center justify-center !text-black">
                    <ul id="main-menu" className={"text-black"}>
                        <li className="Added--Recently">
                            <a><span className={"text-black text-2xl"}>Home</span> </a>

                        </li>
                        <li className="">
                            <a><span className={"text-black text-2xl"}> Movies</span> </a>


                        </li>
                        <li className=" ">
                            <a><span className={"text-black text-2xl"}>Series </span> </a>


                        </li>
                        <li className=" ">
                            <a><span className={"text-black text-2xl"}>   Anime</span> </a>


                        </li>
                        <li className="">
                            <a><span className={"text-black text-2xl"}>Netflix</span> </a>


                        </li>

                    </ul>
                </nav>
                <div className="Header--Search"><IoSearch className={"text-black z-50 text-3xl"}/></div>

            </div>
        </header>
    );
}
