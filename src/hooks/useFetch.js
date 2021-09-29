import {useEffect, useState} from 'react';

const useFetch = (api) => {
    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(false);

    useEffect(() => {
       setIspending(true);
       fetch(api)
       .then(
            res => {
                return res.json();
            })
       .then((data) => {
           setIspending(false);
           setData(data);
       })
       .catch((err) => {
           console.log(err);
       })
    }, [api])


    return {data, isPending};
}
 
export default useFetch;