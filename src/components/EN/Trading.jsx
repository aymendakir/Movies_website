import {Card} from "./Popular/Card.jsx";
import {useQuery} from "@tanstack/react-query";
import useAuthContext from "../../context/Context.jsx";
import { BsArrowLeftCircleFill } from "react-icons/bs";


import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
export function Trading(prog) {




    return (
        <section
            className={"relative mix-blend-multiply  min-h-[80vh] mx-auto overflow-y-hidden"}>
            <div
                className={"absolute mix-blend-multiply top-0 left-0 w-full h-full bg-gradient-to-r from-rose-950  to-rose-950 z-0"}></div>
            <div
                className={"absolute mix-blend-multiply top-0 left-0 w-full h-full bg-gradient-to-r from-red-600  to-red-600 z-0 "}></div>

            <div className={" w-[98%] mx-auto mt-10 z-10 relative space-y-8 overflow-y-hidden "}>

                <p className={"capitalize text-3xl   tracking-widest text-[#EFD912] ml-[4%] MyFont"}>{prog.header}</p>
                <div className={"  overflow-y-hidden relative  "}>
                    <Splide hasTrack={false} aria-label="..." className={"!pt-0"}
                            options={{
                                rewind: true,
                                gap: '1rem',
                                pagination: false,

                            }}>
                        <SplideTrack>
                            <SplideSlide>
                                <div className={"flex justify-center  relative  space-x-6 "}>
                                    {prog.moviesdata?.slice(0, 4).map((item, index) => (
                                        <Card img={item.poster_path} key={index} imdb={item.vote_average}
                                              date={prog.type === "movie" ? item.release_date : item.first_air_date}
                                              title={prog.type === "movie" ? item.title : item.name}
                                              id={item.id}/>

                                    ))}
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className={"flex  relative h-[300px] space-x-6 "} r>
                                    {prog.moviesdata?.slice(5, 9).map((item, index) => (
                                        <Card img={item.poster_path} key={index} imdb={item.vote_average}
                                              date={prog.type === "movie" ? item.release_date : item.first_air_date}
                                              title={prog.type === "movie" ? item.title : item.name}
                                        id={item.id}/>


                                    ))}
                                </div>
                            </SplideSlide>
                            {prog.moviesdata?.length > 11 && (
                                <SplideSlide>
                                    <div className={"flex  relative h-[300px] space-x-6 "} r>
                                        {prog.moviesdata?.slice(10, 14).map((item, index) => (
                                            <Card img={item.poster_path} key={index} imdb={item.vote_average}
                                                  date={prog.type === "movie" ? item.release_date : item.first_air_date}
                                                  title={prog.type === "movie" ? item.title : item.name}
                                                  id={item.id}/>

                                        ))}
                                    </div>
                                </SplideSlide>
                            )}

                        </SplideTrack>

                        <div className="splide__arrows ">
                            <button className="splide__arrow splide__arrow--prev !left-0 !top-[200px]  ">
                                <BsArrowLeftCircleFill className={"!scale-[1]"}/></button>
                            <button className="splide__arrow splide__arrow--next !right-0 !top-[200px]">
                                <BsArrowLeftCircleFill className={"!scale-[-1]"}/></button>
                        </div>


                    </Splide>

                </div>
            </div>
           

        </section>

    )
}