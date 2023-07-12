import NavigationBar from "./components/home";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import { Route,Routes } from "react-router-dom";
// import RegisterPage from "./components/register";
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/home" element={<NavigationBar/>}/>
      </Routes>
    </div>
  );
}

export default App;
