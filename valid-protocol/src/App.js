import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Valid from "./pages/Valid/Valid";
import Home from "./pages/Home/Home";
import Verifier from "./pages/Verifier/Verifier";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Valid/>} />
        <Route path="/home" exact element={<Home/>} />
        <Route path="/verifier" exact element={<Verifier/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
