import {useState, useEffect} from 'react';

const useFetch = (url) => {
    //create a state bucket to hold data once t arrives thus the null
    const [data, setData]=useState(null);
    const[loading, setLoading]=useState(true);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch(url);
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                    const incomingData=await response.json();
                    setData(incomingData)
                
            } catch(error){
                console.error("Error fetching data:", error);
            } finally{
                setLoading(false);
            }
        };
        fetchData();
        },[url]);

        return {data, loading};
    };
    export default useFetch;
