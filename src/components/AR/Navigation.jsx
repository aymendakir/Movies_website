import { IoSearch } from "react-icons/io5";

import "./Watch-page/index.css"
import {Bareshearch} from "./Bareshearch.jsx";
import {useState} from "react";
import {NavLink} from "react-router-dom";

export function Navigation() {

    const [bar, setBar] = useState(false)

    return (
        <>
        <header className="Main--Header absolute right-0 w-[80%] mx-auto bg-white/20  rounded-full mt-2 shadow-sm shadow-black z-10  " dir={"rtl"} >
            <div className={"absolute w-full h-full rounded-full backdrop-blur-lg top-0 left-0 -z-10"}></div>
            <div className="Content--Wrapper flex items-center justify-between mx-5">

                <a className="Logo--Area cursor-pointer" >
                    <NavLink to={"/"} className={"cursor-pointer"}>
                    <h1 className={"cursor-pointer"}>WATCH<span>Logo</span>
                    </h1>
                    </NavLink>
                </a>
                <nav className="Menu--Contents ml-10 !text-black flex items-center justify-center">
                    <ul id="main-menu" className={"text-black"}>
                        <li className="Added--Recently">
                            <NavLink to={"/"} >المضاف حديثا </NavLink>
                        </li>
                        <li className="">
                            <a >الافلام</a>
                            <ul className="sub-menu !right-[40%] !top-[60px]">
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-74">
                                    <NavLink to={"/category/movie/افلام\n" +
                                        "  اجنبي"}>افلام
                                        اجنبي</NavLink></li>
                                <li className="">
                                    <NavLink to={"/category/movie/افلام\n" +
                                        "   انمي/210024"}>افلام
                                        انمي</NavLink></li>
                                <li className="">
                                    <NavLink to={"/category/movie/افلام\n" +
                                        "   اسيوي/1293"}>افلام
                                        اسيوي</NavLink></li>
                                <li className="">
                                    <NavLink to={"/category/movie/افلام نتفليكس/213"}>افلام نتفليكس</NavLink></li>

                                <li className="">
                                    <NavLink to={"/category/movie/الاعلي تقييما IMDB ⭐"}>الاعلي تقييما IMDB ⭐</NavLink></li>
                            </ul>
                        </li>
                        <li className="">
                            <a>مسلسلات
                                اجنبي</a>
                            <ul className="sub-menu !right-[50%]  !top-[60px]">

                                <li className="">
                                    <NavLink to={"/category/tv/قائمة\n" +
                                        "                                        المسلسلات"} >قائمة
                                        المسلسلات</NavLink></li>
                                <li className=""><NavLink to={"/category/tv/اجنبي نتفليكس/213"}
                                    >اجنبي نتفليكس</NavLink></li>

                                <li className="">
                                    <a >المسلسلات الاعلي تقييما
                                        IMDB ⭐</a></li>
                            </ul>
                        </li>
                        <li className="">
                            <NavLink to={"/category/tv/القسم\n" +
                                "                                الاسيوي/1293"} >القسم
                                الاسيوي</NavLink>

                        </li>
                        <li className="">
                            <NavLink to={"/category/tv/الانمي/210024"} >الانمي</NavLink>

                        </li>

                    </ul>
                </nav>
                <div className="Header--Search" onClick={()=>{4
                    if (bar){
                        setBar(!bar)
                    }
                    else {
                        setBar(true)

                    }
                }}><IoSearch className={"text-3xl text-white"}/></div>


            </div>
            {bar&&(
                <Bareshearch bolen={bar} />

            )}

        </header>
    </>
    );
}
