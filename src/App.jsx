
import './App.css'
import Counter from './Counter'
import { useIsOnline } from './hooks/useIsOnline'

function App() {
  const {online} = useIsOnline()
  return (
    <>
      {/* <Counter /> */}

      <h1>Your status 
      {
        online ? (<div>Your are online</div>) : (<div>Your are offline</div>)
      }
      </h1>
    </>
  )
}

export default App
