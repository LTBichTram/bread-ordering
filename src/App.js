import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/" element={<App />}></Route>
        <Route></Route>
      </Routes>
      
    </>
  );
}

export default App;
