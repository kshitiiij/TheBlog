// Custom Hook
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [blogs,setBlogs] = useState(null);
    const [pending,setPending] = useState(true);
    const [error,setError] = useState(null);

        useEffect(() => {

            // abort controller is used to stop the fetch and update the state when the component is unmounted
            // it can be associated as a second parameter in the fetch method.
            const abortCont = new AbortController();

            setTimeout( () => {
                fetch(url , {signal: abortCont.signal})
                .then(res => {
                    if(!res.ok) {
                        throw Error("could not fetch the resource");
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setPending(false);
                    setError(null);
                })
                .catch( err => {
                    //the abort method throws an error and we do not need to update the state after catching
                    // abort error
                    if(err.name === 'AbortError') {
                        console.log("fetch aborted");
                    }
                    else {
                        setError(err.message);
                        setPending(false);
                        setBlogs(null);
                    }
                    
                });
            },500);

            //this method is fired upon completing the fetch
            return () => abortCont.abort();
        }, [url]);

    return { blogs,pending,error}
} 

export default useFetch;