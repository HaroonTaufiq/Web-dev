
import io from "socket.io-client";
import { useEffect, useState } from "react";
import './App.css'
import { v4 as uuidv4 } from "uuid";

// Initialize the socket outside the component
const socket = io("http://localhost:3000");

function App() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    age: 0,
    phone: 0,
  });
  const [formData, setFormData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target; 
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const formHandler = () => {
    socket.emit("data", {...formInputs, id: uuidv4()});

    setFormInputs({
      name: "",
      age: 0,
      phone: 0,
    });
  };

  const getEditData = (index) => {
    setFormInputs(formData[index]);
    setIsEdit(true);
  }

  const handleDelete = (id) => {
    socket.emit("delData", id);
  }

  const handleEdit = () => {
    socket.emit("editdata", formInputs);
    setFormInputs({
      name: "",
      age: 0,
      phone: 0,
    });
    setIsEdit(false);
  }

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected: " + socket.id);
    });
  
    socket.on("crudData", (data) => {
      console.log("Received data:", data);
      setFormData(data);
    });
  
    return () => {
      socket.off("connect");
      socket.off("crudData");
    };
  }, [socket]);

  return ( 
    <>
      <h1>CRUD Operations with Socket.IO</h1>
      <div className='input-form'>
        <input type="text" value={formInputs.name} onChange={handleInput} name='name' className='input-field' placeholder="Enter your name" />
        <input type="number" value={formInputs.age} onChange={handleInput} name='age' className='input-field' placeholder="Enter your age" />
        <input type="number" value={formInputs.phone} onChange={handleInput} name='phone' className='input-field' placeholder="Enter your phone number" />
        <button onClick={isEdit ? handleEdit : formHandler} className="submit-button">
          {isEdit ? "Edit Data" : "Add Data"}
        </button>
      </div>
      { formData.length > 0 ? ( <div className='data-container'>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index} className="data-item">
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.phone}</td>
                <td>
                  <button className="edit-button" onClick={() => getEditData(index)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(data.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> ) :  (
        <p>No user yet.</p>
      )}

    </>
  )
}

export default App
