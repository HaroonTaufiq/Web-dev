import { useState } from "react"


export const hooks = () => {

    // const [firstname, setFirstName] = useState("");
    // const [lastname, setLastName] = useState('')
  
    // avoiding redundant code
    const [ person, setPerson ] = useState({ firstname: '', lastname: '' })
    const [ isloading, setLoading ] = useState(false)

  return (
    <div>hooks</div>
  )
}
