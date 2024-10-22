import { useEffect, useState } from "react";

// Generic hook to fetch data from a given URL
export function useFetch2(url) {
    // State to store the fetched data
    const [data, setData] = useState({});
    // State to track the loading status
    const [loading, setLoading] = useState(true);
    // State to track any error that occurs during the fetch
    const [error, setError] = useState(false);

    // Function to make the API call
    const apiCall = async () => {
        setLoading(true);   // Set loading to true before making the request
        setError(null);     // Reset the error state before a new request
        try {
            // Make the API request
            const response = await fetch(url);

            // Check if the response status is OK (2xx)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Convert the response to JSON and update the data state
            const json = await response.json();
            setData(json);

        } catch (error) {
            // Set the error state if something goes wrong
            setError(error.message);
        } finally {
            // Always stop the loading state regardless of success or failure
            setLoading(false);
        }
    };

    // useEffect to run the API call when the component mounts or when the URL changes
    useEffect(() => {
        apiCall();   // Call the API whenever the URL changes
    }, [url]);      // The hook depends on the URL

    // Return the data, loading, and error states
    return {
        data,     // Fetched data
        loading,  // Loading status
        error     // Error message if any
    };
}
