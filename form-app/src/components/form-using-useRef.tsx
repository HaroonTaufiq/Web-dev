//accessing input fields using useRef

import React, { FormEvent, useRef } from "react";

const Form = () => {
    const nameref = useRef<HTMLInputElement>(null);
    const ageref = useRef<HTMLInputElement>(null);

    const person = {
        name: "",
        age: 0
    }

    const handleForm = (event: FormEvent) => {   
        event.preventDefault();      // to prevent page refresh
        if (nameref.current !== null){
            person.name = nameref.current.value;
        }
        if (ageref.current !== null){
            person.age = parseInt(ageref.current.value);
        }
        console.log(person);
    }

  return (
    <form onSubmit={handleForm}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameref} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input ref={ageref} id = "age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default Form;