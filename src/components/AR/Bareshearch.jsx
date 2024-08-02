import {useQuery, useQueryClient} from "@tanstack/react-query";
import useAuthContext from "../../context/Context.jsx";
import {useRef, useState} from "react";
import { FaCirclePlay } from "react-icons/fa6";
import {NavLink} from "react-router-dom";

export function Bareshearch(prog) {
    const {search}= useAuthContext();
const ref=useRef()
    const [mots, setMots] = useState("")
    const [bar, setBar] = useState(prog.bolen)
const quryclient=useQueryClient()
    const {isPending,isFetching,
        data:data,refetch}=useQuery({
        queryKey:['search'],
        queryFn:() => search(mots),

        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: 1,

        refetchInterval: false,

    })
    console.log(data)
console.log(mots)
    return (<>
            {bar&& (
                <>
                <div className={"fixed w-full h-full top-0 left-0 bg-black/95 z-[999]"}></div>




    <div className={"absolute z-[1000] top-32 left-[35%]"}>
        <form>
            <input
                className={"border-2 border-black w-[700px] p-4 rounded-full relative text-lg font-semibold pr-10 focus:pr-10"}
                ref={ref} onChange={(e) => {
                setMots(e.target.value)
refetch()
            }}/>
            <p className={"absolute text-2xl p-4 rounded-full w-[120px]  -left-44 top-0  text-white z-[1000] bg-yellow-400 cursor-pointer text-center"}
               onClick={() => {
                   setBar(false)
               }}>x إغلاق</p>
            <button type={"reset"} className={"text-3xl text-black absolute top-3 right-5"} onClick={() => {
                setMots("")
            }}>x
            </button>

        </form>


    </div>
                    {(isFetching || isPending)? (
                        <button disabled type="button"
                                className="absolute top-60 left-[46%] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 inline-flex items-center z-[99999]">
                            <svg aria-hidden="true" role="status"
                                 className="inline w-4 h-4 me-3 text-white animate-spin"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"/>
                            </svg>
                            Loading...
                        </button>
                    ) : <section
                        className={"grid grid-cols-4 justify-center items-center  w-[100%] mx-auto absolute  top-52    h-[100vh] z-[1000] space-y-4 space-x-3"}>

                        {data?.map(index => (
                            <div key={index.id}
                                 className={"flex flex-col items-center justify-center rounded-lg relative mt-6 w-[240px] h-[400px] shows"}>
                                <NavLink className={"absolute top-[40%] "}
                                         to={`/watch/${index.media_type}/${index.id}`}>


                                    <FaCirclePlay className={"text-[80px] text-red-600 opacity-0 show"}/>
                                </NavLink>
                                <picture className={"w-[240px] h-[320px] "}>
                                    <img src={`https://image.tmdb.org/t/p/original${index?.poster_path}`}
                                         alt={index?.name}
                                         title={index?.name} className={"h-full w-full bg-cover rounded-lg"}/>
                                </picture>


                                {index.media_type === "movie" && (
                                    <p className={"font-normal text-sm text-white capitalize w-[180px] text-center mt-3 h-[20px] showstest"}>
                                        {index.title}
                                    </p>)}
                                {index.media_type === "tv" && (
                                    <p className={"font-normal text-sm text-white capitalize w-[180px] text-center mt-3 h-[20px] showstest"}>
                                        {index.name}
                                    </p>)}


                            </div>
                        ))}

                    </section>
                    }
                </>
            )}

        </>

    )
}