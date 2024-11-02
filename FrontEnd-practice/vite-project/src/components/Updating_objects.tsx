import { useState } from "react"

export const Updating_objects = () => {
    const [ drink, setDrink ] = useState({
        name: "Fanta",
        price: 1.5,
        quantity: 10
    })

    const handleClick = () => {
        const newDrink = {...drink, price: drink.price * 2,quantity: drink.quantity - 1}
        setDrink(newDrink);
    }

  return (
    <div>
        <h1>{drink.name}</h1>
        <h2>{drink.price}</h2>
        <h2>{drink.quantity}</h2>
        <button onClick={handleClick}>
            Want a drink
        </button>
    </div>
  )
}
