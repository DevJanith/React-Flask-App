import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
