import uuid from 'react-uuid';
function App() {
 let data = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

 let myAnimals = data.map(animal => (<li className="text-base list-disc" key={uuid()}>{animal}</li>))
 
  return (
    <div className="grid justify-center align-middle mx-auto mt-9">
      <ul>
         {myAnimals}
      </ul>
    </div>
  )
}
export default App
