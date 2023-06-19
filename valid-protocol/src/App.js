import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Valid from "./pages/Valid/Valid";
import Home from "./pages/Home/Home";
import Verifier from "./pages/Verifier/Verifier";
import Validator from "./pages/Validator/Validator";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Valid/>} />
        <Route path="/home" exact element={<Home/>} />
        <Route path="/verifier" exact element={<Verifier/>} />
        <Route path="/validator" exact element={<Validator/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
