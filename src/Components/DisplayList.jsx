import React from "react"

function DisplayList({animal}) {
  return (
    <div>
      <p className="text-base font-semibold font-sans list-disc">{animal}</p>
    </div>
  )
}

export default DisplayList