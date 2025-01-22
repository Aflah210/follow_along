import { BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css' ;
import LoginPage from "./pages/Login";
function App (){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<LoginPage />} />
    
    </Routes>
    </BrowserRouter>
  )
}
export default App;
