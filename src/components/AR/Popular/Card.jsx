import { FaCirclePlay } from "react-icons/fa6";
import {NavLink} from "react-router-dom";

export function Card(props) {
    return (
        <section className={`relative w-[320px] h-[400px]   cursor-pointer card rounded-lg  shadow-lg shadow-black `}>
            <picture className={"absolute top-0 left-0 w-full h-full overflow-y-hidden rounded-lg"}>
                <img src={`https://image.tmdb.org/t/p/original/${props.img}`} alt="Cardimages"
                     className={`w-full h-full `}/>
            </picture>

            <div className={"absolute top-0 left-0  w-full h-full bg-gray-900/90  opacity-0  cardanimation z-20   "}>
            </div>
                <p className={`absolute  top-[40%] rotate-90 text-3xl lilita  drop-shadow-md shadow-black tracking-widest uppercase cursor-grab `}></p>
            <div
                className={"absolute top-0 left-0  w-full h-full opacity-0   cardanimation z-20 flex flex-col items-center justify-center cursor-grab  "}>

                <p className={"absolute left-2 top-2 text-white font-bold text-sm bg-red-500 p-1 rounded-md"}>{props?.date?.substr(0,4)}</p>
                <p className={"absolute right-2 top-2 text-white font-bold text-sm bg-red-500 p-1 rounded-md"}>{props?.imdb}</p>
<NavLink to={`/details/${props.type}/${props.id}` }>


                <div className={"cursor-pointer "}>
                    <FaCirclePlay className={"text-[80px] text-red-600"}/>

                </div>
</NavLink>
                <p className={"text-white capitalize absolute bottom-1 text-xl font-bold tracking-widest w-full text-center"}>{props?.title}</p>
            </div>

        </section>
    )
}