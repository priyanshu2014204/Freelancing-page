
import Headers from "./component/headers";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./component/home";
import Footer from "./component/footer"
import Contact from "./component/contact";
import Services from "./component/services";
import "./style/app.scss";


function App(){
  return(

    <>
<Router>
   <Headers></Headers>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route  path="/contact" element={<Contact></Contact>}/>
    <Route  path="/services" element={<Services></Services>}/>
  </Routes>
</Router>
<Footer></Footer>
    
    {/* <h1 name="hello"></h1> */}
    </>
  )
}

export default App