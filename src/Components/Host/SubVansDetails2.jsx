import { useOutletContext } from "react-router-dom"

function SubVansDetails2() {
    const [currentVan] = useOutletContext()
  return (
    <div className="grid gap-3 pt-4 w-3/4">
        <h1><span className="text-base font-bold">Name: </span>{currentVan.name}</h1>
        <p><span className="text-base font-bold">Category: </span>{currentVan.type}</p>
        <p><span className="text-base font-bold">Description: </span>{currentVan.description}</p>
        <p><span className="text-base font-bold">Visibility: </span>Public</p>
    </div>
  )
}

export default SubVansDetails2