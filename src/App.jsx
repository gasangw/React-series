import data from './data.json'
import DisplayJokes from './Components/DisplayJokes'

function App() {
  return (
    <div className='flex bg-green-300 mx-auto gap-2 h-[100vh] items-center justify-center'>
      {data.map(joke => {
        return (
          <div key={joke.id}>
             <DisplayJokes  joke={joke}/>
          </div>
        )
      })}
    </div>
  )
}

export default App
