import {Card} from "./Popular/Card.jsx";
import {useQuery} from "@tanstack/react-query";
import useAuthContext from "../../context/Context.jsx";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";


import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
export function Trading(prog) {



    return (
        <section
            className={"relative mix-blend-multiply  min-h-[70vh] mx-auto overflow-y-hidden"} dir={"rtl"}>
            <div
                className={"absolute mix-blend-multiply top-0 left-0 w-full h-full bg-white z-0"}></div>


            <div className={" w-[98%] mx-auto mt-10 z-10 relative space-y-8 overflow-y-hidden "}>

                <p className={"capitalize text-3xl   tracking-widest text-black mr-[4%] MyFont"}>{prog.header}</p>
                <div className={"  overflow-y-hidden relative  "}>
                    <Splide hasTrack={false} aria-label="..." className={"!pt-0"}
                            options={{
                                rewind: true,

                                pagination: false,
                                direction:"rtl",


                            }}>
                        <SplideTrack>
                            {  window.innerWidth>600?(
                                <>
                                    <SplideSlide>
                                        <div className={"flex gap-6 justify-center  relative  space-x-6 pb-8 "}>
                                            {prog.moviesdata?.slice(0, 4).map((item, index) => (
                                                <Card img={item.poster_path} key={index} imdb={item.vote_average}
                                                      date={prog.type === "movie" ? item.release_date : item.first_air_date}
                                                      title={prog.type === "movie" ? item.title : item.name}
                                                      id={item.id}
                                                      type={prog.type}/>

                                            ))}
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className={"flex gap-6  relative h-[300px] space-x-6 pb-8"} >
                                            {prog.moviesdata?.slice(5, 9).map((item, index) => (
                                                <Card img={item.poster_path} key={index} imdb={item.vote_average}
                                                      date={prog.type === "movie" ? item.release_date : item.first_air_date}
                                                      title={prog.type === "movie" ? item.title : item.name}
                                                      id={item.id}
                                                      type={prog.type}/>


                                            ))}
                                        </div>
                                    </SplideSlide>
                                    {prog.moviesdata?.length > 11 && (
                                        <SplideSlide>
                                            <div className={"flex gap-6  relative h-[300px] space-x-6  pb-8"} r>
                                                {prog.moviesdata?.slice(10, 14).map((item, index) => (
                                                    <Card img={item.poster_path} key={index} imdb={item.vote_average}
                                                          date={prog.type === "movie" ? item.release_date : item.first_air_date}
                                                          title={prog.type === "movie" ? item.title : item.name}
                                                          id={item.id}
                                                          type={prog.type}/>

                                                ))}
                                            </div>
                                        </SplideSlide>
                                    )}
                                </>

                            ):(

                                <>



                                        {prog.moviesdata?.map((item, index) => (
                                            <SplideSlide key={index} className={" flex items-center justify-center"}>

                                                <Card img={item.poster_path}  imdb={item.vote_average}
                                                      date={prog.type === "movie" ? item.release_date : item.first_air_date}
                                                      title={prog.type === "movie" ? item.title : item.name}
                                                      id={item.id}
                                                      type={prog.type}/>
                                            </SplideSlide>

                                        ))}



                                </>
                            )}


                        </SplideTrack>

                        <div className="splide__arrows ">
                            <button className="splide__arrow splide__arrow--prev !right-0 !top-[200px]  ">
                                <BsArrowRightCircleFill className={"!scale-[1]"}/></button>
                            <button className="splide__arrow splide__arrow--next !left !top-[200px]">
                                <BsArrowRightCircleFill className={"!scale-[-1]"}/></button>
                        </div>


                    </Splide>

                </div>
            </div>


        </section>

    )
}