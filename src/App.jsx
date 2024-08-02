
import {Navigation} from "./components/AR/Navigation.jsx";
import {Header} from "./components/AR/Header.jsx";
import {Genre} from "./components/AR/Genre/Genre.jsx";
import {Trading} from "./components/AR/Trading.jsx";
import useAuthContext from "./context/Context.jsx";
import {useQuery} from "@tanstack/react-query";

function App() {
    const {allpopulaireMovies,allpopulaireSeries,netflixdata,animetv}=useAuthContext()
    const {data:moviesdata,isPending:moviesPending}=useQuery({

        queryKey:['movies'],
        queryFn:allpopulaireMovies,
        refetchIntervalInBackground:false,
        refetchOnWindowFocus:false,
        retry: 5,
        staleTime: 2500,
        cacheTime: 5000,


    })
    const {data:seriesdata,isPending:seriesPending}=useQuery({

        queryKey:['series'],
        queryFn:allpopulaireSeries,
        refetchIntervalInBackground:false,
        refetchOnWindowFocus:false,
        retry: 5,
        staleTime: 2500,
        cacheTime: 5000,


    })
    const {data:datanetflix,isPending:netflixPending}=useQuery({

        queryKey:['netflix'],
        queryFn:netflixdata,
        refetchIntervalInBackground:false,
        refetchOnWindowFocus:false,
        retry: 5,
        staleTime: 2500,
        cacheTime: 5000,


    })
    const {data:animetv1,isPending:animetvPending}=useQuery({

        queryKey:['animetv'],
        queryFn:animetv,
        refetchIntervalInBackground:false,
        refetchOnWindowFocus:false,
        retry: 5,
        staleTime: 2500,
        cacheTime: 5000,


    })

  return (
      <div>
<title className={"text-center text-red-600"}>المضاف حديثا</title>
          <Navigation />
          <Header />
          <Genre />
          <Trading header={"أفضل أفلام"} moviesdata={moviesdata} type={"movie"} />
          <Trading header={"أفضل مسلسلات "} moviesdata={seriesdata} type={"tv"} />
          <Trading header={"أفلام الأنمي"} moviesdata={datanetflix} type={"movie"} />

          <Trading header={"مسلسلات الأنمي"} moviesdata={animetv1} type={"tv"} />
      </div>
  )
}

export default App
