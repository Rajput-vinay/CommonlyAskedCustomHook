import { useEffect, useRef } from "react";

// Custom hook to get the previous value of a prop or state
export function usePrev({ value }) {
    // useRef creates a mutable object that persists across renders
    const prevRef = useRef();

    // useEffect runs after every render when the 'value' changes
    useEffect(() => {
        // Update the ref to the current value after each render
        prevRef.current = value;
    }, [value]);  // The effect depends on 'value', so it runs whenever 'value' changes

    // Return the previous value (stored in prevRef.current) before the most recent render
    //  re-render hone se phela prev value return kar de ga phir baad me useEffect run hoga
    
    return {
        prevRef: prevRef.current  // Returning the previous value as 'prev'
    };
}
