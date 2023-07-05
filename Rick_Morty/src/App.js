import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Home";
import { Conditions } from "./pages/Conditions";
import { NavBar } from "./components/NavBar";
import {FooterBar} from "./components/FooterBar"
import { CharacterInfo } from "./components/CharacterInfo";
function App() {
  

  return (
    <BrowserRouter>
    <header className="Header">
    <NavBar/>
    </header>
    <Routes>
      <Route>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="home" element={<Home />}/>
        <Route path="conditions" element={<Conditions />}/>
        <Route path="*" element={<Home/>} />
        <Route path="/character/:id" element={<CharacterInfo/>}/>
        </Route>
    </Routes>
    <footer className="Footer">
      <FooterBar/>
    </footer>
    </BrowserRouter>
  );
}

export default App;
//Funcionar el oton de logo






