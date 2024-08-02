"use client";
import {createContext, useContext, useState} from "react";

import axios from "axios"

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
const [id1,setId1] = useState(null);
const [id2,setId2] = useState(null);
const [id3,setId3] = useState(null);
    const [id4,setId4] = useState(null);
    const [movie_details, setMovie_details] = useState()
    const options = {

params:{language: 'ar-AE'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmNlMTZiMTkzMmM1ZDlhNWIyYTc0NWNmMzU3YzFkYyIsIm5iZiI6MTcyMTkyMzgyMy4zMTE5NzcsInN1YiI6IjY2NTMyM2QwM2RmZTQyMjQxYmI2MjMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uMy0xJ1uGQO3G6DEfvmIfZGUdHDSSXbPJtkZHKTR8qU'
        },
    };
    const options1 = {

        params:{language: 'en'},
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmNlMTZiMTkzMmM1ZDlhNWIyYTc0NWNmMzU3YzFkYyIsIm5iZiI6MTcyMTkyMzgyMy4zMTE5NzcsInN1YiI6IjY2NTMyM2QwM2RmZTQyMjQxYmI2MjMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uMy0xJ1uGQO3G6DEfvmIfZGUdHDSSXbPJtkZHKTR8qU'
        },
    };
const url='https://api.themoviedb.org/3'

//get first  4 movies
const populaireMovies=async ()=>{
    try {
        const response = await axios.get(`${url}/trending/movie/day`, options1);
        const movies = response.data.results.slice(0, 4); // Get only the first 4 movies
setId1(movies[0].id);
setId2(movies[1].id);
setId3(movies[2].id);
setId4(movies[3].id);
        return movies;
    } catch (error) {
        console.error(error);
    }
}
//get movies for acceuil popular
    const allpopulaireMovies=async ()=>{
        try {
            const response = await axios.get(`${url}/trending/movie/week`, options);
            const movies = response.data.results;

            return movies;
        } catch (error) {
            console.error(error);
        }
    }
    //get series for acceuil popular
    const allpopulaireSeries=async ()=>{
        try {
            const response = await axios.get(`${url}/trending/tv/week`, options);
            const series = response.data.results;

            return series;
        } catch (error) {
            console.error(error);
        }
    }
//get movies similaire
    const similaire_movies=async (id)=>{
        try {
            const response = await axios.get(`${url}/movie/${id}/similar`, options);
            const movies = response.data

            return movies;
        } catch (error) {
            console.error(error);
        }
    }
    //get tv similar
    const similaire_tv=async (id)=>{
        try {
            const response = await axios.get(`${url}/tv/${id}/similar`, options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
    //get credit for movie
    const credit_movies=async (id)=>{
        try {
            const response = await axios.get(`${url}//movie/${id}/credits`, options);
            const movies = response.data

            return movies;
        } catch (error) {
            console.error(error);
        }
    }
//get title images
    const titleimages=async (id)=>{
        try {
            const response = await axios.get(`${url}/movie/${id}/images`,options1);
            const movies = response.data.logos[0].file_path // Get only the first 4 movies

            return movies;
        } catch (error) {
            console.error(error);
        }
    }
    //get details movie

    const moviedetails=async (id,type)=>{
        try {
            const response = await axios.get(`${url}/${type}/${id}`, options);
            const movies = response // Get only the first 4 movies

            return movies.data;
        } catch (error) {
            console.error(error);
        }
    }
    //get series details
    const series_data=async (id)=>{
        try {
            const response = await axios.get(`${url}/tv/${id}`, options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
//get netflix
    const netflixdata=async ()=>{
        try {
            const response = await axios.get(`${url}/keyword/210024/movies`, options);
            const movies = response.data.results;

            return movies;
        } catch (error) {
            console.error(error);
        }
    }

//get tv anime
    const animetv=async ()=>{
        try {
            const response = await axios.get("https://api.themoviedb.org/3/discover/tv?language=ar-AE&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death", options);
            const anime = response.data.results;

            return anime;
        } catch (error) {
            console.error(error);
        }
    }

//search movies and series


    const search=async (query)=>{
        try {
            const response = await axios.get(`${url}/search/multi`, {
                params:{query: `${query}`,},
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmNlMTZiMTkzMmM1ZDlhNWIyYTc0NWNmMzU3YzFkYyIsIm5iZiI6MTcyMTkyMzgyMy4zMTE5NzcsInN1YiI6IjY2NTMyM2QwM2RmZTQyMjQxYmI2MjMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uMy0xJ1uGQO3G6DEfvmIfZGUdHDSSXbPJtkZHKTR8qU'
                },
            });
            const results = response.data.results;

            return results;
        } catch (error) {
            console.error(error);
        }
    }
    //get genres movies
    const genres_movies=async ()=>{
        try {
            const response = await axios.get(`${url}/genre/movie/list`,options);
            return response.data.genres;
        } catch (error) {
            console.error(error);
        }
    }
    //get genres tv
    const genres_tv=async ()=>{
        try {
            const response = await axios.get(`${url}/genre/tv/list`,options);
            return response.data.genres;
        } catch (error) {
            console.error(error);
        }
    }
//get countries
    const countries=async ()=>{
        try {
            const response = await axios.get(`${url}/configuration/countries`,options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
    //discover movies


    const discover_movies=async (contry,year,genre,keyword,page,type)=>{
        try {
            const response = await axios.get(`${url}/discover/${type}`, {
                params: {
                    include_adult: 'true',
                    include_video: 'false',
                    page: page,
                    primary_release_year: year,
                    region: contry,
                    sort_by: 'popularity.desc',
                    with_origin_country: contry,
                    with_genres: genre,
                    with_keywords: keyword,
                },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmNlMTZiMTkzMmM1ZDlhNWIyYTc0NWNmMzU3YzFkYyIsIm5iZiI6MTcyMjI3MTg2MC41MDQ1MDksInN1YiI6IjY2NTMyM2QwM2RmZTQyMjQxYmI2MjMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pRba1UcynXgGdV0usfCk5bIKPzf3DJvHpAU6SnwXsp4'
                }

            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }









































































    return (
    <AuthContext.Provider
        value={{
            populaireMovies,titleimages,moviedetails,allpopulaireMovies,allpopulaireSeries,netflixdata,animetv,similaire_movies,credit_movies,search,series_data,similaire_tv,genres_movies,countries,discover_movies,genres_tv,movie_details,id1,id2, id3,id4,
        }}
    >
        {children}
    </AuthContext.Provider>
);
};
export default function useAuthContext() {
    return useContext(AuthContext)}