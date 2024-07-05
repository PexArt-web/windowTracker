import { useState } from "react";
import WindowTracker from "./components/windowTracker";
const {log} = console

function App() {
  const[ show, setShow ] = useState(true)
  const toggleWindowWidth = () =>{
    setShow(prevState => !prevState)
    log(show)
  }
  
  return (
    <div className="container">
      <button onClick={toggleWindowWidth}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
