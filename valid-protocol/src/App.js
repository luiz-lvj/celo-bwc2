import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Valid from "./components/Valid";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Valid/>} />
        <Route path="/home" exact element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
