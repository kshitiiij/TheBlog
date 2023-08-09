// Custom Hook
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {

    const [blogs,setBlogs] = useState(null);
    const [pending,setPending] = useState(true);
    const [error,setError] = useState(null);

        useEffect(() => {
            const abortCont = new AbortController();

                axios.get(url , {signal: abortCont.signal})
                .then ((res) => {
                    setBlogs(res.data);
                    setPending(false);
                    setError(null);
                }).catch(err => {
                    if(err.name === 'AbortError') {
                        console.log("fetch aborted");
                    }
                    else {
                        setError(err.message);
                        setPending(false);
                        setBlogs(null);
                    }
                });

            //this method is fired upon completing the fetch
            return () => abortCont.abort();
        }, [url]);

    return { blogs,pending,error}
} 

export default useFetch;