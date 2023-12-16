import axios from "axios";

export const fetchTranding = async () => {
    try {

        const data = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=098c0a06f6f788991ea9bd1b1a28f1b9');
       
        const parsedData = await data.data;
        const res = parsedData.results
        //  console.log(parsedData.results);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const fetchMoreInfo = async ({params}) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=098c0a06f6f788991ea9bd1b1a28f1b9`)
        const parsedData = await data.data;
      
        // console.log(parsedData);
        return await parsedData
    } catch (error) {
        console.log(error);
        
    }
}

export const fetchCast = async ({params}) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=098c0a06f6f788991ea9bd1b1a28f1b9`)
        const parsedData = await data.data;
        const allCast = await parsedData.cast
        const cast = allCast.slice(0, 6)
        // console.log(cast);
        return await cast
    } catch (error) {
        console.log(error);
        
    }
}


export const fetchReviews = async ({params}) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}/reviews?api_key=098c0a06f6f788991ea9bd1b1a28f1b9`)
        const parsedData = await data.data;
        const results = await parsedData.results
        console.log(results);
        return await results
    } catch (error) {
        console.log(error);
        
    }
}