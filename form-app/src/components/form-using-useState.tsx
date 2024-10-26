// handling form iputs via useState

import React, { FormEvent, useState } from "react";

const Form = () => {
    const [person, setPerson] = useState({
        name: "",
        age: 0
    });

    const handleForm = (event: FormEvent) => {
        event.preventDefault();       // prevents page from reloading
        console.log("submitted");
    }
    

  return (
    <form onSubmit={handleForm}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input value = {person.name} onChange = {(event) => setPerson({...person, name: event.target.value})} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input value={person.age} onChange = {(event) => setPerson({...person, age: parseInt(event.target.value)})} id = "age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default Form;
