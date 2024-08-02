import "./index.css"
import {Navigation} from "../Navigation.jsx";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import useAuthContext from "../../../context/Context.jsx";
import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
export function Watch() {
    const {moviedetails,similaire_movies,credit_movies,series_data,similaire_tv}=useAuthContext()
    const [similaire, setSimilaire] = useState([])
    const [similaires_tv, setSimilaires_tv] = useState([])
    const [acting, setActing] = useState([])
    const [directing, setDirecting] = useState([])
    const {id,type}=useParams()
    const queryClient = useQueryClient();
   const data= queryClient.getQueryData(["movies"]);



    const {isPending:moviePending,data:datas ,refetch}=useQuery({
        queryKey:['moviesone'],
        queryFn:()=>{
            if (type==="movie"){
              return   moviedetails(id,"movie")

            }else if (type==="tv" || type==="series"){
               return  series_data(id)

            }
        },
        refetchIntervalInBackground:false,
        refetchOnWindowFocus:false,
        retry: 5,
        staleTime: 2500,
        cacheTime: 5000,
    })
    const result = data?.filter(index=>{
        return index.id===datas?.id;
    })
    useEffect(() => {
        similaire_movies(id).then(result=>{
            setSimilaire(result.results)
        })
        similaire_tv(id).then(result=>{
            setSimilaires_tv(result.results)

        })
        credit_movies(id).then(result=>{
           setActing(result.cast)
            setDirecting(result.crew)
        })
refetch()

    }, [id,type]);
const directrice=directing?.slice(0,5).filter(index=>{
        if(index.department==="Directing"){
            return index
        }
    })
    const writing=directing?.slice(0,5).filter(index=>{
        if(index.department==="Writing"){
            return index
        }
    })

    return (

        <>
            <title>{type}</title>
            <div className={"fixed w-full h-full top-0 left-0 bg-gray-900/80 z-10 "}>
            </div>
<div className={"fixed w-full h-full top-0 left-0 "}>
    <picture>
        <img src={`https://image.tmdb.org/t/p/original/${datas?.backdrop_path}`} className={"w-full h-full bg-cover bg-center z-0"} />
    </picture>
</div>
            <Navigation/>

            {datas &&(
                <>

                <div className="col-md-12 mt-32 bgh" dir="rtl">

                    <div className="colRight single-content mt10 fRight">
                        <div className="single-info-poster">
                            <img className=" !h-[420px] w-[300px] rounded-md"
                                 src={`https://image.tmdb.org/t/p/original/${datas?.poster_path}`}
                                 title={datas?.title} alt="A Quiet Place"/>


                            <a  target="_blank" rel="nofollow" id="imdb"
                               title="IMDb" className={"!w-[305px] !mt-5"}> IMDb {datas?.vote_average}</a>


                        </div>
                    </div>
                    <div className="colCenter single-content  mt10 fRight">
                        <div className="singleInfo h-[502px]">
                            {type==="movie"&& (
                                <h1>{datas?.title}</h1>
                            )}
                            {type==="tv" || type==="series" && (
                                <h1>{datas?.name}</h1>
                            )}

                            <ul className="single-info">
                                <li className={"flex items-center"}>
                                    {type==="movie"&& (
                                        <>
                                        <span><i className="icon-alarm"></i> الوقت : </span>
                                        <a>{datas?.runtime} دقيقة </a>
                                        </>
                                    )}
                                    {type==="tv" || type==="series" && (
                                        <>
                                            <span><i className="icon-alarm"></i> عددالحلقات : </span>
                                            <a>{datas?.episode_run_time}  </a>
                                        </>
                                    )}

                                </li>
                            </ul>

                            <ul className="single-info">
                                <li>
                                    <span><i className="icon-book3 f12"></i> الكاتب : </span> {writing.map(index=>(
                                    <p key={index.id}> {index.name}</p>
                                ))}</li>
                            </ul>

                            <ul className="single-info">
                                <li>
                                    <span><i className="icon-megaphone f12"></i> الاخراج : </span> {directrice.map(index=>(
                                    <p key={index.id}> {index.name}/</p>
                                ))}</li>
                            </ul>


                            <ul className="single-info">
                                <li>
                                    <span><i className="icon-umbrella f12"></i> مستوى المشاهدة : </span>
                                    <a>
                                        +16 </a>
                                </li>
                            </ul>

                            <ul className="single-info actor">
                                <li>
                                    <span><i className="icon-users f12"></i> الممثلين : </span>
                                    {acting.slice(0,4).map(index=> (
                                        <p  key={index.id}
                                             title={index.name}>{index.name}/</p>
                                    ))}</li>
                            </ul>


                            <h2 className="post-desc">{datas?.title}</h2>
                            <ul className="single-info full-w">
                                <li>
                                    {result?.map(index=> {
                                        <h3 className="story">index.overview</h3>

                                    })}
                                </li>
                            </ul>

                        </div>

                    </div>

                    <div className="colLeft single-content mt10 fRight">
                        <div className="singleInfo h-[505px]">
                            <ul className="single-info">
                                <li>
                                    <span> القسم : </span> <a

                                    title="افلام اجنبية">افلام اجنبية</a></li>
                            </ul>

                            <ul className="single-info">
                                <li>
                                    <span><i className="icon-earth f12"></i> اللغة : </span>
                                    <a>
                                        الإنجليزية </a>
                                </li>
                            </ul>

                            <ul className="single-info">
                                <li>

                                    <span><i className="icon-play3 f12"></i> النوع : </span>  {datas?.genres.map(index=>(
                                    <a
                                        key={index.id}

                                        title={index.name}>{index.name}. </a>
                                ))}</li>
                            </ul>

                            <ul className="single-info">
                                {type==="movie"&& (
                                    <li>
                                        <span><i className="icon-calendar f12"></i> سنة الانتاج : </span> <a
                                        title="2018">{datas?.release_date?.slice(0, 4)}</a><b> , </b></li>
                                )}
                                {type==="tv" || type==="series" && (
                                <li>
                                    <span><i className="icon-calendar f12"></i> سنة الانتاج : </span> <a
                                    title="2018">{datas?.first_air_date.slice(0, 4)}</a><b> , </b></li>
                            )}

                            </ul>


                            <div className="single-info-foot">
                                <div className="wrap-btn">
                                    <a rel="nofollow" className="button btn-downloads" id="btnDown" title="التحميل">
                                        <i className="icon-download"></i>
                                        التحميل المباشر </a>
                                    <NavLink to={`/watch/${type}/${datas?.id}}`} rel="nofollow" className="button btn-servers"
                                     >

                                        <i className="icon-video-camera3"></i>
                                        شاهدة الان </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-0 mt10">

                </div>
                <div className="sec-title mt10 z-[1000] ">
                <div className="sec-info">
                <i className="icon-movie"></i>
                <h4 className={"bg-transparent"}>ربما يعجبك أيضا</h4>
    <p className={"bg-transparent"}>شاهد الافلام العربية والافلام الاجنبية</p>
</div>

</div>
    <div className="sec-line">
        <div className="containers container-fluid">
            <div className="row">
                <div id="load-post">
                    {similaire?.length > 0 &&
                        similaire.map((item,index)=> (
                            <article key={index} className="post">
                                <div className="col-xs-6th col-sm-6th col-md-6th col-lg-6th">
                                    <div className="block-post">
                                        <NavLink to={`/details/${type}/${item.id}` }
                                           title={item.title}>
                                            <span className="ribbon">1080P</span>

                                            <div className="posterThumb">

                                                    <picture className={"imgBg"}>
                                                        <img src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} title={item.title} alt={item.title} className={" !w-full !h-full !max-h-full"} />
                                                    </picture>

                                            </div>
                                            <div className="title">
                                                {item.title}
                                            </div>
                                            <div className="content">
                                                <div className="info">



                                                    <div className="span3">
                                                        <i className="icon-clapboard-play f11"></i> {item.vote_average}
                                                    </div>
                                                </div>
                                                <h3 className="description">
                                                    {item.title} </h3>
                                                <div className="foot">

                                                    <div className="imdb"><i className="icon-star-full2 f13"></i> {item.vote_average}
                                                    </div>

                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </article>

                        ))}
                    {similaires_tv?.length > 0 &&
                        similaires_tv.map((item,index)=> (
                            <article key={index} className="post">
                                <div className="col-xs-6th col-sm-6th col-md-6th col-lg-6th">
                                    <div className="block-post">
                                        <NavLink to={`/watch/${type}/${item.id}` }
                                                 title={item.name}>
                                            <span className="ribbon">1080P</span>

                                            <div className="posterThumb">

                                                <picture className={"imgBg"}>
                                                    <img src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} title={item.name} alt={item.name} className={" !w-full !h-full !max-h-full"} />
                                                </picture>

                                            </div>
                                            <div className="title">
                                                {item.name}
                                            </div>
                                            <div className="content">
                                                <div className="info">

                                                    <div className="span1">
                                                        <i className="icon-clapboard-play f11"></i> anime
                                                    </div>

                                                    <div className="span3">
                                                        <i className="icon-clapboard-play f11"></i> anime
                                                    </div>
                                                </div>
                                                <h3 className="description">
                                                    {item.name} </h3>
                                                <div className="foot">

                                                    <div className="imdb"><i className="icon-star-full2 f13"></i> {item.vote_average}
                                                    </div>

                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </article>

                        ))}


                </div>
            </div>
        </div>
    </div>
                </>
            )}

        </>
    )
}




