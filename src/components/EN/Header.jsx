

import { HiClock } from "react-icons/hi";
import { FaCalendarDays } from "react-icons/fa6";
import {useEffect, useState} from "react";

import useAuthContext from "../../context/Context.jsx";
import { useQuery} from "@tanstack/react-query";


export function Header() {
    const [header1, setHeader1] = useState(false)
    const [header2, setHeader2] = useState(false )
    const [header3, setHeader3] = useState(false)
    useEffect(() => {
        setHeader1(true)
    }, []);

    setTimeout(()=>{
        if (header1){
            setHeader2(true)
            setHeader1(false)
        }
        else if (header2){
            setHeader3(true)
            setHeader2(false)
        }
        else if (header3){
            setHeader1(true)
            setHeader3(false)
        }
        else {
            setHeader1(true)

        }
    },6000)
    ////query select movies data for header
    const {populaireMovies,titleimages,id1,id2,id3,moviedetails}= useAuthContext();
    //*********************************************************************************************
    const {isPending:moviespending,
        data:MoviesData}=useQuery({queryKey:['Movies'],
        queryFn:populaireMovies,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: 3,
        staleTime: 2500,
        cacheTime: 5000,
        refetchInterval: false,

    })

    //******************************only title image
    const {isPending:moviepending,
        data:MovieData}=useQuery({queryKey:['Movie', id1],
        queryFn:() => titleimages(id1),

        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: 3,
        staleTime: 250000,
        cacheTime: 500000,
        refetchInterval: false,

    })

    const {isPending:moviepending2,
        data:MovieData1}=useQuery({queryKey:['Movie', id2],
        queryFn:() => titleimages(id2),

        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: 3,
        staleTime: 2500,
        cacheTime: 5000,
        refetchInterval: false,

    })
    const {isPending:moviepending3,
        data:MovieData2}=useQuery({queryKey:['Movie', id3],
        queryFn:() => titleimages(id3),

        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: 3,
        staleTime: 2500,
        cacheTime: 5000,
        refetchInterval: false,

    })

    const {isPending:detailmovie,
        data:Movisdetails}=useQuery({queryKey:['moviedetails',id1],
        queryFn:() => moviedetails(id1),

        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: 5,
        staleTime: 2500,
        cacheTime: 5000,
        refetchInterval: false,

    })

    const {isPending:detailmovie1,
        data:Movisdetails1}=useQuery({queryKey:['moviedetails1',id2],
        queryFn:() => moviedetails(id2),

        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: 5,
        staleTime: 2500,
        cacheTime: 5000,
        refetchInterval: false,

    })

    const {isPending:detailmovie2,
        data:Movisdetails2}=useQuery({queryKey:['moviedetails2',id3],
        queryFn:() => moviedetails(id3),

        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: 5,
        staleTime: 2500,
        cacheTime: 5000,
        refetchInterval: false,

    })

    return (
        <header className={"flex relative w-[90%] h-[90vh] items-end headers mx-auto rounded-lg mt-5"}>


            <div
                className={`absolute top-0 left-0 w-full h-full ${header2 ? "headeroff1" : ""} ${header1 ? "headeron1" : "header1"}`}>
                {MoviesData && (
                    <picture className={""}>
                        <img src={`https://image.tmdb.org/t/p/original/${MoviesData[0].backdrop_path}`}
                             alt={"background"}
                             className={"absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"}/>
                    </picture>
                )}


                {MovieData && (<div
                        className={"relative translate-x-1/3 translate-y-40  w-[450px] h-[520px] flex flex-col items-start justify-center text-white space-y-5 z-50"}>
                        <p className={"text-3xl font-semibold"}>Available Now</p>
                        <picture>
                            <img src={`https://image.tmdb.org/t/p/original/${MovieData}`} alt={"خلفية 2"} width={400}/>
                        </picture>
                        <div className={"flex items-center  space-x-6"}>
                            <h3 className={"capitalize text-sm"}>{Movisdetails?.genres?.map(data => {
                                return data.name
                            })}</h3>
                            <div className={"flex space-x-1 items-center"}>
                                <FaCalendarDays className={"text-[#D20058] text-2xl"}/>

                                <span className={"font-bold"}>{MoviesData[0].release_date}</span>

                            </div>
                            <div className={" flex space-x-1 items-center"}>
                                <HiClock className={"text-[#D20058] text-2xl"}/>
                                <span>{Movisdetails?.runtime} min</span>

                            </div>
                        </div>

                        <h2 className={"flex items-center"}><span
                            className={"font-semibold mr-4 text-lg"}>IMDb Rating</span><span
                            className={"p-0.5 bg-[#D20058] px-2 rounded-md font-bold"}>{MoviesData[0].vote_average}</span>
                        </h2>
                        <button className={"p-3 w-[160px]  bg-[#D20058] rounded-md font-black text-lg"}>WATCH</button>


                    </div>
                )}

            </div>
            <div
                className={`absolute top-0 left-0 w-full h-full ${header3 ? "headeroff2" : ""} ${header2 ? "headeron2" : "header2"}`}>
                {MoviesData && (
                    <picture className={""}>
                        <img src={`https://image.tmdb.org/t/p/original/${MoviesData[1].backdrop_path}`}
                             alt={"background"}
                             className={"absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"}/>
                    </picture>
                )}

                <div
                    className={"absolute top-0 left-0 w-full h-full bg-gradient-to-l from-black/80 via-black/10 to-transparent z-10"}></div>
                {MovieData1 && (<div
                        className={"relative translate-x-1/3 translate-y-40  w-[450px] h-[520px] flex flex-col items-start justify-center text-white space-y-5 z-50"}>
                        <p className={"text-3xl font-semibold"}>Available Now</p>
                        <picture>
                            <img src={`https://image.tmdb.org/t/p/original/${MovieData1}`} alt={"خلفية 2"} width={400}/>
                        </picture>
                        <div className={"flex items-center  space-x-6"}>
                            <h3 className={"capitalize text-sm"}>{Movisdetails1?.genres?.map(data => {
                                return data.name
                            })}</h3>
                            <div className={"flex space-x-1 items-center"}>
                                <FaCalendarDays className={"text-[#D20058] text-2xl"}/>

                                <span className={"font-bold"}>{MoviesData[1].release_date}</span>

                            </div>
                            <div className={" flex space-x-1 items-center"}>
                                <HiClock className={"text-[#D20058] text-2xl"}/>
                                <span>{Movisdetails1?.runtime} min</span>

                            </div>
                        </div>

                        <h2 className={"flex items-center"}><span
                            className={"font-semibold mr-4 text-lg"}>IMDb Rating</span><span
                            className={"p-0.5 bg-[#D20058] px-2 rounded-md font-bold"}>{MoviesData[1].vote_average}</span>
                        </h2>
                        <button className={"p-3 w-[160px]  bg-[#D20058] rounded-md font-black text-lg"}>WATCH</button>


                    </div>
                )}

            </div>
            <div
                className={`absolute top-0 left-0 w-full h-full ${header1 ? "headeroff3" : ""} ${header3 ? "headeron3" : "header3"}`}>
                {MoviesData && (
                    <picture className={""}>
                        <img src={`https://image.tmdb.org/t/p/original/${MoviesData[2].backdrop_path}`}
                             alt={"background"}
                             className={"absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"}/>
                    </picture>
                )}

                <div
                    className={"absolute top-0 left-0 w-full h-full bg-gradient-to-l from-black/80 via-black/10 to-transparent z-10"}></div>
                {MovieData2 && (<div
                        className={"relative translate-x-1/3 translate-y-40  w-[450px] h-[520px] flex flex-col items-start justify-center text-white space-y-5 z-50"}>
                        <p className={"text-3xl font-semibold"}>Available Now</p>
                        <picture>
                            <img src={`https://image.tmdb.org/t/p/original/${MovieData2}`} alt={"back"} width={400}/>
                        </picture>
                        <div className={"flex items-center  space-x-6"}>
                            <h3 className={"capitalize text-sm"}>{Movisdetails2?.genres?.map(data => {
                                return data.name
                            })}</h3>
                            <div className={"flex space-x-1 items-center"}>
                                <FaCalendarDays className={"text-[#D20058] text-2xl"}/>

                                <span className={"font-bold"}>{MoviesData[2].release_date}</span>

                            </div>
                            <div className={" flex space-x-1 items-center"}>
                                <HiClock className={"text-[#D20058] text-2xl"}/>
                                <span>{Movisdetails2?.runtime} min</span>

                            </div>
                        </div>

                        <h2 className={"flex items-center"}><span
                            className={"font-semibold mr-4 text-lg"}>IMDb Rating</span><span
                            className={"p-0.5 bg-[#D20058] px-2 rounded-md font-bold"}>{MoviesData[2].vote_average}</span>
                        </h2>
                        <button className={"p-3 w-[160px]  bg-[#D20058] rounded-md font-black text-lg"}>WATCH</button>


                    </div>
                )}

            </div>


        </header>
    )
}