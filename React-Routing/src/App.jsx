import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
import { Dashboard } from "./Components/Dashboard"
import { Landing } from "./Components/Landing"
import { useState } from "react";
export default function App() {
  const [Count, setCount] = useState(0);
  return (
    <>
      <CountRenderer Count={Count} />
      <Buttons Count={Count} setCount={setCount} />
    </>
  );
}

function CountRenderer({Count}) {
  return (
    <div>
    {Count}
    </div>
  )
}

function Buttons({ Count, setCount }) {
  return(
    <div>
      <button onClick={()=>setCount(Count+1)}>Increment</button>
    </div>
  )
}

