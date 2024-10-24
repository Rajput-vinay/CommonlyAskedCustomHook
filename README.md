<<<<<<< HEAD
=======
# Commonly Asked Custom Hooks in Interviews

This repository contains implementations of some commonly asked custom React hooks during interviews. These hooks demonstrate how to manage state, handle side effects, and add reusable logic in React.

## Custom Hooks Included

### 1. `useFetch(url)`
A hook for fetching data from an API.

**Features**:
- Automatically fetches data when the component mounts.
- Returns the fetched `data`, `loading` state, and `error` state.
- Example use case: Fetching user data or list of items from a server.

   ```javascript
   const { data, loading, error } = useFetch('https://api.example.com/data');

### 2. `useDebounce(value, delay)`
A hook that returns a debounced value after a specified delay.

**Features**:
- Delays the update of a value by a given delay (in milliseconds).
- Useful for reducing the frequency of function calls (e.g., API requests) during rapid changes (like typing).

   ```javascript
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

### 3. `usePrev(value)`
A hook to get the previous value of a state or prop.

**Features**:
- Stores the previous value across renders.
- Helpful in comparing the current value with the previous one.

  ```javascript
  const prevCount = usePrev(count);


## How to Use
1. Import the hooks into your project.
2. Use them within functional components as needed.
3. Customize the hooks as per the specific requirements of your project or interview scenario.

## License
This repository is MIT-licensed. Feel free to use and modify the code for educational or professional purposes.
>>>>>>> 3200b88eac5dfaa77660e731e605462c55f7c2d9
