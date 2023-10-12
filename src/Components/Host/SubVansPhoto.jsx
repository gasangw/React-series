import { useOutletContext } from "react-router-dom"
function SubVansPhoto() {
    const [currentVan] = useOutletContext()
  return (
    <div className="pt-3">
        <img src={currentVan.imageUrl} alt={currentVan.name} className="h-32 rounded-3xl"/>
    </div>
  )
}

export default SubVansPhoto