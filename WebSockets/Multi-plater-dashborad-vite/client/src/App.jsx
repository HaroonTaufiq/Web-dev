import io from "socket.io-client";
import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [data, setData] = useState({ name: "", score: 0 });
  const [playerScores, setPlayerScores] = useState([]);

  const socket = io("localhost:3000");

  // function connectSocket() {
  //   socket.on('connect', (socket) => {
  //     console.log(socket.id);
  //   });
  // }

  function handleInput(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function sendScores() {
    socket.emit("data", data);
  }

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected: " + socket.id);
      socket.on("scores", (scores) => {
        setPlayerScores(scores);
      });
    });
    return () => {
      socket.off("connect");
      socket.off("scores");
    };
  }, [socket]);

  return (
    <>
      <h1>Multiplayer Dashboard App</h1>
      <Input
        name="name"
        className="input-field"
        placeholder="Enter your name"
        handleInput={handleInput}
      />
      <Input
        name="score"
        className="input-field"
        placeholder="Enter your score"
        handleInput={handleInput}
      />
      <button onClick={sendScores} className="submit-button">
        Publish Score
      </button>
      <div className='player-scores'>
        {playerScores.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {playerScores.map((playerScore, index) => (
                <tr key={index}>
                  <td>{playerScore?.name}</td>
                  <td>{playerScore?.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No scores yet</p>
        )}
      </div>
    </>
  );
}

export default App;
