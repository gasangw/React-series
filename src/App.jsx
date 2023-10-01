import DisplayList from "./Components/DisplayList"

function App() {
  let data = ["dog", "cat", "chicken", "cow", "sheep", "horse"]
   return (
     <div className="grid justify-center align-middle mx-auto mt-9">
      {data.map((animal, index) => <DisplayList animal={animal} key={index}/>)}
     </div>
   )
 }
export default App