import { useState, useEffect } from "react";

export function useIsOnline() {
    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        const updateOnlineStatus = () => setOnline(navigator.onLine);

        // Add event listeners for online and offline
        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);

        // Clean up function: remove both online and offline listeners
        return () => {
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        };
    }, []);

    return { online };
}
