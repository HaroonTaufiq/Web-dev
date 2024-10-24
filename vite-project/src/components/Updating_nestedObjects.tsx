
import { useState } from "react"

export const Updating_nestedObjects = () => {
    const [ drink, setDrink ] = useState({
        description: {
            name: "Fanta",
            manufacturer: "Coca Cola",
        },
        update_objects: {
            price: 1.5,
            quantity: 10
        }
    })

    const handleClick = () => {
        const newDrink = {...drink, update_objects: {price: drink.update_objects.price * 2,quantity: drink.update_objects.quantity - 1}}
        setDrink(newDrink);
    }

  return (
        <div>
        <h1>{drink.description.name}</h1>
        <h2>{drink.update_objects.price}</h2>
        <h2>{drink.update_objects.quantity}</h2>
        <button onClick={handleClick}>
            Want a drink
        </button>
    </div>
  )
}
