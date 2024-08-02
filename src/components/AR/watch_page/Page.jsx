import "../Watch-page/index.css"
import {Navigation} from "../Navigation.jsx";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import useAuthContext from "../../../context/Context.jsx";
import {useEffect, useState} from "react";
import Select from "react-tailwindcss-select";

export function Page() {
    const {moviedetails}=useAuthContext()
    const {id,type }=useParams()

    const {isPending:moviePending,data:movie_details}=useQuery({
        queryKey:['moviesdata'],
        queryFn:()=>{
           return  moviedetails(id,type)
        },
        refetchIntervalInBackground:false,
        refetchOnWindowFocus:false,
        retry: 5,
        staleTime: 2500,
        cacheTime: 5000,
    })
    const [server1, setServer1] = useState(true)
    const [server2, setServer2] = useState(false)
    const [server3, setServer3] = useState(false)
    const [server4, setServer4] = useState(false)
    const [session, setSession] = useState(null);
    const [episode, setEpisode] = useState([]);
    const [episodee, setEpisodee] = useState([]);
    const [episodeee, setEpisodeee] = useState();

    // Handle change and set session


    // Use useEffect to respond to session state changes
    useEffect(() => {
        if (session !== null) {
            // Wait for 3 seconds before calling episodes
            const timer = setTimeout(() => {
                episodes();
            }, 3000);

            // Cleanup the timeout if the component unmounts or session changes
            return () => clearTimeout(timer);
        }
    }, [session]);

    // Update episodes based on session
    const episodes = () => {
        movie_details?.seasons?.forEach(season => {
            if (season?.season_number.toString() === session?.value) {
                setEpisode({ value: season?.episode_count.toString(), label: season?.episode_count.toString() });
            }
        });
    };

    // Use useEffect to respond to episode state changes
    useEffect(() => {
        if (episode?.value !== undefined) {
            // Wait for 4 seconds before calling xh
            const timer = setTimeout(() => {
                xh();
            }, 1000);

            // Cleanup the timeout if the component unmounts or episode changes
            return () => clearTimeout(timer);
        }
    }, [episode]);

    const xh = () => {
        let data = [];
        for (let i = 1; i <= episode?.value; i++) {
            data.push({ value: i.toString(), label: i.toString() });
        }

        setEpisodee(data);
    };
    const handlchange = value => {
        setSession(value);
    };
    const handlchange2 = value => {
        setEpisodeee(value);

    };
    return (
        <div className={" fixed top-0 left-0 w-full h-full"}>
            <Navigation/>
            <div className={" fixed top-0 left-0 w-full h-full -z-20"}>
                <picture>
                    <img src={`https://image.tmdb.org/t/p/original/${movie_details?.backdrop_path}`}/>
                </picture>
            </div>
            <div className={"bg-[#0d0d0d]/90 absolute top-0 left-0 w-full h-full -z-10"}>

            </div>
            {type==="tv"?(
                <div className={"flex items-start justify-center mt-36"}>
                    <div className={"flex flex-col gap-9"}>
                        <div className="w-72 mr-10 " dir={"rtl"}>
                            <Select
                                value={session}
                                onChange={handlchange}

                                placeholder={"الموسم"}
                                options={movie_details?.seasons?.map(index => {
                                    return {value: index?.season_number.toString(), label: index?.name.toString()}
                                })}
                                classNames={{
                                    menuButton: ({isDisabled}) => (
                                        `flex text-sm text-white border border-black rounded-full px-2 p-2 shadow-sm transition-all duration-300 focus:outline-none z-[99] ${
                                            isDisabled
                                                ? "bg-black"
                                                : "bg-black/70 hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                                        }`
                                    ),
                                    ChevronIcon: ({isDisabled}) => (
                                        `text-black ${
                                            isDisabled
                                                ? "text-black"
                                                : "text-black/70 hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                                        }`
                                    ),
                                    menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
                                    listItem: ({isSelected}) => (
                                        `block transition duration-200 px-2 py-2 cursor-pointer  select-none truncate rounded z-[99] ${
                                            isSelected
                                                ? `text-white bg-blue-500 z-[99]`
                                                : `text-gray-500 hover:bg-blue-100 hover:text-blue-500 z-[99]`
                                        }`
                                    )
                                }}/>


                        </div>
                        {session?.value && (
                            <div className="w-72 mr-10 " dir={"rtl"}>
                                <Select
                                    value={episodeee}
                                    onChange={handlchange2}

                                    placeholder={"الحلقة"}
                                    options={episodee}
                                    classNames={{
                                        menuButton: ({isDisabled}) => (
                                            `flex text-sm text-white border border-black rounded-full px-2 p-2 shadow-sm transition-all duration-300 focus:outline-none z-[99] ${
                                                isDisabled
                                                    ? "bg-black"
                                                    : "bg-black/70 hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                                            }`
                                        ),
                                        ChevronIcon: ({isDisabled}) => (
                                            `text-black ${
                                                isDisabled
                                                    ? "text-black"
                                                    : "text-black/70 hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                                            }`
                                        ),
                                        menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
                                        listItem: ({isSelected}) => (
                                            `block transition duration-200 px-2 py-2 cursor-pointer  select-none truncate rounded z-[99] ${
                                                isSelected
                                                    ? `text-white bg-blue-500 z-[99]`
                                                    : `text-gray-500 hover:bg-blue-100 hover:text-blue-500 z-[99]`
                                            }`
                                        )
                                    }}/>


                            </div>

                        )}
                    </div>


                    <div className={"w-[790px] h-[560px] bg-black rounded-lg"}>
                        {server1 && (
                            <iframe
                                src={`https://player.autoembed.cc/embed/tv/${id}/${session?.value}/${episodeee?.value}`}
                                className={"w-full h-full"}
                                frameBorder="0" referrerPolicy="origin" allowFullScreen></iframe>

                        )}
                        {server2 && (
                            <iframe
                                src={`https://vidsrc.me/embed/tv?tmdb=${movie_details.id}&season=${session?.value}&episode=${episodeee?.value}`}
                                className={"w-full h-full"}
                                frameBorder="0" referrerPolicy="origin" allowFullScreen></iframe>

                        )}

                        {server4 && (
                            <iframe
                                src={`https://movieuniverse.lol/embedtv/${movie_details.imdb_id}&season=${session?.value}&episode=${episodeee?.value}`}
                                className={"w-full h-full"}
                                frameBorder="0" referrerPolicy="origin" allowFullScreen></iframe>

                        )}


                    </div>
                    <div className={"w-[260px] h-[460px] rounded-lg rounded-l-none ml-4 text-white"}>
                        <ul className={"flex flex-col items-center space-y-4"}>
                            <li className={"p-3 w-[250px] rounded-md bg-red-500 text-center font-bold text-xl"}>سيرفرات
                                المشاهدة
                            </li>
                            <li className={`p-3 w-[220px] rounded-md  text-center ${server1 ? "bg-yellow-500" : "bg-gray-400/10"} font-bold text-xl cursor-pointer`}
                                onClick={() => {
                                    setServer1(true)
                                    setServer2(false)
                                    setServer3(false)
                                    setServer4(false)
                                }}>سيرفر1
                            </li>
                            <li className={`p-3 w-[220px] rounded-md  text-center ${server2 ? "bg-yellow-500" : "bg-gray-400/10"} font-bold text-xl cursor-pointer`}
                                onClick={() => {
                                    setServer2(true)
                                    setServer3(false)
                                    setServer4(false)
                                    setServer1(false)

                                }}>سيرفر2
                            </li>

                            <li className={`p-3 w-[220px] rounded-md  text-center ${server4 ? "bg-yellow-500" : "bg-gray-400/10"} font-bold text-xl cursor-pointer`}
                                onClick={() => {
                                    setServer4(true)
                                    setServer3(false)
                                    setServer1(false)
                                    setServer2(false)

                                }}>سيرفر3
                            </li>


                        </ul>
                    </div>
                </div>

            ) : (
                <div className={"flex items-start justify-center mt-36"}>
                    <div className={"w-[890px] h-[560px] bg-black rounded-lg"}>
                        {server1 && (
                            <iframe src={`https://player.autoembed.cc/embed/movie/${id}`} className={"w-full h-full"}
                                    frameBorder="0" referrerPolicy="origin" allowFullScreen></iframe>

                        )}
                        {server2 && (
                            <iframe src={`https://vidsrc.me/embed/movie?tmdb=${movie_details.id}`}
                                    className={"w-full h-full"}
                                    frameBorder="0" referrerPolicy="origin" allowFullScreen></iframe>

                        )}
                        {server3 && (
                            <iframe src={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`}
                                    className={"w-full h-full"}
                                    frameBorder="0" referrerPolicy="origin" allowFullScreen></iframe>

                        )}
                        {server4 && (
                            <iframe src={`https://movieuniverse.lol/embedtv/${movie_details.imdb_id}`}
                                    className={"w-full h-full"}
                                    frameBorder="0" referrerPolicy="origin" allowFullScreen></iframe>

                        )}


                    </div>
                    <div className={"w-[260px] h-[460px] rounded-lg rounded-l-none ml-4 text-white"}>
                        <ul className={"flex flex-col items-center space-y-4"}>
                            <li className={"p-3 w-[250px] rounded-md bg-red-500 text-center font-bold text-xl"}>سيرفرات
                                المشاهدة
                            </li>
                            <li className={`p-3 w-[220px] rounded-md  text-center ${server1 ? "bg-yellow-500" : "bg-gray-400/10"} font-bold text-xl cursor-pointer`}
                                onClick={() => {
                                    setServer1(true)
                                    setServer2(false)
                                    setServer3(false)
                                    setServer4(false)
                                }}>سيرفر1
                            </li>
                            <li className={`p-3 w-[220px] rounded-md  text-center ${server2 ? "bg-yellow-500" : "bg-gray-400/10"} font-bold text-xl cursor-pointer`}
                                onClick={() => {
                                    setServer2(true)
                                    setServer3(false)
                                    setServer4(false)
                                    setServer1(false)

                                }}>سيرفر2
                            </li>
                            <li className={`p-3 w-[220px] rounded-md  text-center ${server3 ? "bg-yellow-500" : "bg-gray-400/10"} font-bold text-xl cursor-pointer`}
                                onClick={() => {
                                    setServer3(true)
                                    setServer4(false)
                                    setServer1(false)
                                    setServer2(false)

                                }}>سيرفر3
                            </li>
                            <li className={`p-3 w-[220px] rounded-md  text-center ${server4 ? "bg-yellow-500" : "bg-gray-400/10"} font-bold text-xl cursor-pointer`}
                                onClick={() => {
                                    setServer4(true)
                                    setServer3(false)
                                    setServer1(false)
                                    setServer2(false)

                                }}>سيرفر4
                            </li>


                        </ul>
                    </div>
                </div>

            )}

        </div>

    )
}