import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Dashboard } from "./Components/Dashboard"
import { Landing } from "./Components/Landing"
export default function App() {
  return (
    <>
      <div>
        <button onClick={() => { window.location.href = "/" }}>Go Home </button>
        <button onClick={()=>{window.location.href="/Dashboard"}}>Go DashBoard</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Landing} />
          <Route path="/Dashboard" element={Dashboard}/>
        </Routes>
      </BrowserRouter>  
    </>
  )
}
