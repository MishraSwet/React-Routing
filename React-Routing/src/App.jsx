import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Dashboard } from "./Components/Dashboard"
import { Landing } from "./Components/Landing"
export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Landing} />
          <Route path="/Dashboard" element={Dashboard}/>
        </Routes>
      </BrowserRouter>  
    </>
  )
}
