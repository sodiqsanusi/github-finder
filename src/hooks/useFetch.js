import {useEffect, useState} from 'react';

const useFetch = (api) => {
    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
       const abortComp  = new AbortController();
       setIspending(true);
       fetch(api,{
           signal: abortComp.signal
       })
       .then(
            res => {
                if(!res.ok) {
                    throw Error("Data couldn't be fetched");
                }
                return res.json();
            })
       .then((data) => {
           setIspending(false);
           setError(null);
           setData(data);
       })
       .catch((err) => {
           if(err.name === "AbortError") {
               console.log("Abort Error!")
           }
           setIspending(false);
           setError(err.message);
       })

       return () => {
           abortComp.abort();
       }
    }, [api])


    return {data, isPending, error};
}
 
export default useFetch;