import { useEffect, useState } from "react";

// we can use try and catch for error handle also make the useFetch more generic

export function useFetch (){
    const [data, setData] = useState({})

    const ApiCall = async () =>{
       const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
       const json = await response.json()
       setData(json)
    }

    useEffect(()=>{
     ApiCall()
    },[])
    return {
        data,
        ApiCall
    }
}