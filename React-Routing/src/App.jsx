import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
import { Dashboard } from "./Components/Dashboard"
import { Landing } from "./Components/Landing"
import { useState } from "react";
export default function App() {
  const [Count, setCount] = useState(0);
  return (
    <>
      <CountRenderer Count={Count} setCount={setCount} />
    </>
  );
}


// Here CountRenderer Component doesnt need setCount as prop but its child does so we have to drill the setCount prop through the CountRenderComponent..
function CountRenderer({Count,setCount}) {
  return (
    <div>
      {Count}
      <Buttons Count={Count} setCount={setCount} />
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


//Using Context API

//in Another file...
//init the context the contesxt is responsible for teleporting state..
import { useContext } from "react";
CreatedContext = useContext(0);

//Since count rendered didnt need setCount but its child did we had do drill setCount but now,we can simply teleport it through by using context we provide it to the context provider..

<CreatedContext.provider value={setCount}>
<Count Count={Count}/>
</CreatedContext.provider>

//Now inside the function till which the prop was drilled

const count = useContext(CreatedContext);
