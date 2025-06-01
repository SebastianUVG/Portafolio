import { BrowserRouter,Router } from "react-router-dom"
import { Home } from "./pages/home"
import { NotFound } from "./pages/NotFound"


function App() {

  return (
    <>
      <BrowserRouter>
        <Router>
          <Router index element = {<Home/>}/>
          <Router path="*" element = {<NotFound/>}/>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
