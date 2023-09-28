function App() {
 let data = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  return (
    <div className="grid justify-center align-middle mx-auto mt-9">
     {data.map(animal => {
      return (
        <ul>
           <li className='text-base list-disc'>{animal}</li>
        </ul>
      )
     })}
    </div>
  )
}

export default App
