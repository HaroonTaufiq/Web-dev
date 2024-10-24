

let count = 0

export const pure_components = () => {

    // now when the functions pure_components is rendered the counter gets updated, -> not pure component
    // if we move "let count inside the function it can be pure i.e. count is reinitialized to 0 evereytime
     
    count++;
    
    return (
    <div>Counter {count}</div>
  )
}
