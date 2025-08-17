import {useState, useEffect} from 'react';


const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [isLoading, setisLoadging] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
        .then (response =>{
            if(!response.ok){
                throw Error('Could not fetch the data for that resource because of server side error');
            }
            return response.json();
        })
        .then (
            data => {
                setData(data);
                setisLoadging(false);
                setError(null);
            }
        )
        .catch(error => {
            setError(error.message);
            setisLoadging(false);
        })
    },[]);
    return {data,isLoading,error}; 
}

export default useFetch;