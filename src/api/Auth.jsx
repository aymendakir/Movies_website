import axios from "axios";
export default function api() {
    const http = axios.create({
        baseURL: "https://api.themoviedb.org/3",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmNlMTZiMTkzMmM1ZDlhNWIyYTc0NWNmMzU3YzFkYyIsIm5iZiI6MTcyMTg1NTQ5My4xOTM5MTcsInN1YiI6IjY2NTMyM2QwM2RmZTQyMjQxYmI2MjMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xuez0qyoa6Z1GMxwRn63HKdSyAuu0Kwh5YZ6uYfF_wk'
        },
        withCredentials: true,
    });
    return {
        http,
    };
}