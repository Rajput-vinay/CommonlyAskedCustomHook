//  for familar syntax for custom hook

import { useState } from "react";


export function useCounter (){
    const [count, setCount] = useState(0)

    const increseCount = () =>{
        setCount(count+1)
    }

    const decreaseCount = () =>{
        setCount(count -1)
    }

    return {
        count,
        increseCount,
        decreaseCount
    }
}