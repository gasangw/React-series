import { useOutletContext } from "react-router-dom"

function SubVansPricing() {
    const [currentVan] = useOutletContext()
  return (
    <div className="pt-3 font-bold">${currentVan.price}/day</div>
  )
}

export default SubVansPricing