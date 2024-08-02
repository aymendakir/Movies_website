import {Navigation} from "../AR/Navigation.jsx";
import {useParams} from "react-router-dom";
import Select from "react-tailwindcss-select";
import {useEffect, useState} from "react";
import {Card} from "../AR/Popular/Card.jsx";
import {useQuery} from "@tanstack/react-query";
import useAuthContext from "../../context/Context.jsx";


export function Genre() {
const{name,id}=useParams()
    const {genres_movies,countries,discover_movies,genres_tv}=useAuthContext()
    const {data:genre}=useQuery({
        queryKey:['genres'],
        queryFn:genres_movies,
        refetchIntervalInBackground:false,
        refetchInterval:false,
        retry: 5,

    })
    const {data:genretv}=useQuery({
        queryKey:['genrestv'],
        queryFn:genres_tv,
        refetchIntervalInBackground:false,
        refetchInterval:false,
        retry: 5,

    })
    const {data:country}=useQuery({
        queryKey:['countries'],
        queryFn:countries,
        refetchIntervalInBackground:false,
        refetchInterval:false,
        retry: 5,

    })

    const [genre_selected, setGenre] = useState(null);
    const [year, setYear] = useState(null);
    const [years, setYears] = useState(() => {
        const yearArray = [];
        for (let i = 1998; i <= new Date().getFullYear(); i++) {
            yearArray.push(i);
        }
        return yearArray;
    });

    const [contry, setContry] = useState(null);





    const handleChange2 = value => {

        setGenre(value);


    };  const handleChange3 = value => {

        setYear(value);


    };  const handleChange4 = value => {

        setContry(value);


    };

    const [firstPage, setFirstPage] = useState(1);

    const {data:movies_data,refetch,isFetching,isSuccess}=useQuery({
        queryKey:['movie_data'],
        queryFn:()=>{
            return discover_movies(contry?.value,year?.value,id,"",firstPage,"movie")
        },
        refetchIntervalInBackground:false,
        refetchInterval:false,
        refetchOnWindowFocus:false,
        retry: 5,


    })
    const [lastPage, setLastPage] = useState(movies_data?.total_pages);

    useEffect(() => {
        refetch()
        setFirstPage(1)

    }, [name]);
    const search=()=>{
        refetch()
        setFirstPage(1)
    }




    return (
        <header  className={"min-h-[100vh]"}>
            <title>{name}</title>
            <div className={"fixed top-0 left-0 w-full h-full bg-black/80 z-0"}></div>
            <Navigation />
            <section >
                <nav dir={"rtl"} className={"w-[80%] mx-auto flex items-center justify-center text-white mt-36 z-[99] relative "}>
                    <ul className={"flex items-center justify-center space-x-6"}>
                        <li className={"ml-6 text-2xl font-bold z-10"}>
                            {name}
                        </li>

                        <li>
                            <div className="w-72 ">
                                <Select
                                    value={genre_selected}
                                    onChange={handleChange2}
                                    options={  genre?.map(index => {
                                        return {value: index.id, label: index.name}
                                    })}
                                    isDisabled={true}
                                    placeholder={"النوع"}
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
                        </li>
                        <li>
                            <div className="w-72">
                                <Select
                                    value={year}
                                    onChange={handleChange3}
                                    placeholder={"السنة"}
                                    options={years?.map(index => {

                                        return {value: index, label: index.toString()}
                                    })}
                                    classNames={{
                                        menuButton: ({isDisabled}) => (
                                            `flex text-sm text-white border border-black rounded-full px-2 p-2 shadow-sm transition-all duration-300 focus:outline-none ${
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
                                            `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                                                isSelected
                                                    ? `text-white bg-blue-500`
                                                    : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                                            }`
                                        )
                                    }}
                                />
                            </div>
                        </li>
                        <li>
                            <div className="w-72">
                                <Select
                                    value={contry}
                                    onChange={handleChange4}
                                    options={country?.map((index) => {
                                        return {value: index.iso_3166_1, label: index.native_name}
                                    })}
                                    placeholder={"البلد"}
                                    classNames={{
                                        menuButton: ({isDisabled}) => (
                                            `flex text-sm text-white border border-black rounded-full px-2 p-2 shadow-sm transition-all duration-300 focus:outline-none ${
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
                                            `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                                                isSelected
                                                    ? `text-white bg-blue-500`
                                                    : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                                            }`
                                        )
                                    }}
                                />
                            </div>
                        </li>
                        <li className={"p-4 px-4 w-[120px] bg-red-500 rounded-full relative text-center"}
                            onClick={search}>بحث
                        </li>
                        <li className={"p-4 px-4 w-[120px] bg-red-500 rounded-full relative text-center"}
                            onClick={()=>{
                                setYear(null)
                                setGenre(null)
                                setContry(null)
                                refetch()
                            }}>تفريغ
                        </li>

                    </ul>

                </nav>
                {isFetching && (
                    <button disabled type="button"
                            className="absolute top-60 left-[46%] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 inline-flex items-center">
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin"
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
                )}
                {isSuccess && !isFetching && (
                    <div className={"mt-10 flex flex-wrap justify-center items-center gap-6 w-[90%] mx-auto"}>
                        {movies_data?.results?.map((item) => (
                            <Card img={item.poster_path} imdb={item.vote_average}
                                  date={item.release_date }
                                  title={ item.title }
                                  id={item.id}
                                  type={"movie"}/>

                        ))}
                    </div>

                )}
                <div className={"flex flex-wrap justify-center items-center gap-6 w-[90%] mx-auto mt-24 py-5"}>
                    {firstPage && (
                        <span
                            className={`p-2 px-4  rounded-xl  relative text-xl cursor-pointer ${firstPage !== 1 ? "bg-red-800 text-white" : " bg-gray-700 text-gray-500"}`}
                            onClick={() => {
                                if (firstPage !== 1) {
                                    setFirstPage(firstPage - 1)
                                    setTimeout(()=>{
                                        refetch()

                                    },500)
                                }
                            }}>{"<"}</span>
                    )}

                    <span className={`p-2 px-4 bg-red-500 rounded-xl text-white relative  `}
                    >{firstPage}</span>

                    {firstPage&& (
                        <span  className={`p-2 px-4  rounded-xl  relative text-xl cursor-pointer  ${firstPage>=1&& movies_data?.total_pages!==firstPage?"bg-red-800 text-white":" bg-gray-700 text-gray-500"}`}
                               onClick={() => {
                                   if (firstPage>=1&&movies_data?.total_pages!==firstPage) {
                                       setFirstPage(firstPage+1)
                                       setTimeout(()=>{
                                           refetch()

                                       },500)

                                   }



                               }}>{">"}</span>
                    )}
                </div>
            </section>
        </header>
    )
}