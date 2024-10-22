import { useEffect, useRef } from "react";

// Use useRef when the debounced value is used for non-UI logic and you want to avoid unnecessary re-renders for performance reasons.

// Custom hook to debounce a value over a specified delay
export function useDebounce(value, delay) {
    // useRef creates a mutable object that will hold the debounced value
    const debounceValue = useRef();

    // useEffect to apply the debounce logic whenever the value or delay changes
    useEffect(() => {
        // Set a timeout to update the debounced value after the specified delay
        const handler = setTimeout(() => {
            debounceValue.current = value; // Update the ref to the current value after delay
        }, delay);

        // Cleanup function to clear the timeout if value or delay changes before the timeout completes
        return () => clearTimeout(handler);
    }, [value, delay]); // The effect depends on 'value' and 'delay', so it runs whenever these change

    // Return the debounced value (stored in debounceValue.current)
    return {
        debounceValue: debounceValue.current  // Return the debounced value
    };
}










// Use useState when the debounced value directly affects the UI and you need the component to re-render with the updated value.

//  code using useSate


import { useEffect, useState } from "react";

// Custom hook to debounce a value over a specified delay
export function useDebounce(value, delay) {
    // useState to hold the debounced value, which will trigger a re-render when updated
    const [debounceValue, setDebounceValue] = useState(value);

    // useEffect to apply the debounce logic whenever the value or delay changes
    useEffect(() => {
        // Set a timeout to update the debounced value after the specified delay
        const handler = setTimeout(() => {
            setDebounceValue(value); // Update the debounced value after the delay
        }, delay);

        // Cleanup function to clear the timeout if value or delay changes before the timeout completes
        return () => clearTimeout(handler);
    }, [value, delay]); // The effect depends on 'value' and 'delay', so it runs whenever these change

    // Return the debounced value
    return debounceValue;
}

 //  Notes
// I would prefer useState if the debounced value directly affects the UI, like in the case of user inputs or search results. In such cases, the component needs to re-render when the value changes, and useState handles this smoothly. 😊




