
import  { useState } from 'react'

export const Updating_arrarys = () => {
    const [ tags, setTags ] = useState(['happy', 'sad', 'angry'])  

        const handleClick = () => {
            // Adding in the end of the array
            setTags([...tags, 'exciting'])
            console.log(tags)

            // filter array
            setTags(tags.filter(tag => tag !== 'happy'))
            console.log(tags)

            // Updating
            setTags(tags.map(tag => tag === 'sad' ? 'anxious' : tag))
            console.log(tags)

        }
  return (
    <div>
        <button onClick={handleClick}>
            Array update
        </button>
    </div>
  )
}
