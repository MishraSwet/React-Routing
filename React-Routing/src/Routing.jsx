import React from 'react'

const Routing = () => {
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

export default Routing

