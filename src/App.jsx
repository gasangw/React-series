function App() {
 let data = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

 let myAnimals = data.map((animal, index) => (<li className='text-base list-disc' key={index}>{animal}</li>))
 
  return (
    <div className="grid justify-center align-middle mx-auto mt-9">
      <ul>
         {myAnimals}
      </ul>
    </div>
  )
}
export default App
