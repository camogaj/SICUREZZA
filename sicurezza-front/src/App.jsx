import { useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { checkUser } from "./redux/auth/auth.actions";
import { useNavigate } from "react-router-dom";
// import Scroll from "./components/Scroll";3
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import MyAccount from "./pages/MyAccount";
import AuthRoute from "./components/AuthRoute";
import "./App.scss";
import Start from "./pages/Start";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";
import Spaces from "./pages/Spaces";
import EditRoom from "./pages/EditRoom";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null); 
function App() {
  // const [showScroll, setShowScroll] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    //Intentar recuperar el usuario, si es que estamos logueados
    dispatch(checkUser(navigate));
  }, [dispatch]);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((current)=>(current==="light" ? "dark" : "light")) 
  }
  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <div className="app" id={theme}>
        {/*Envía al navbar la función logoutUser que es la que desloguea el usuario, y también el usuario*/}
        {user && <Navbar />}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/*Envía al componente login la función loginUser, que es la que trata de loguear el usuario con la API, y también el error*/}
            <Route path="/login" element={<Login />} />
            {/*Envía al componente regiter la función registerUser, que es la que trata de registrar el usuario con la API, y también el error*/}
            <Route path="/register" element={<Register />} />
            <Route
              path="/my-account"
              element={<AuthRoute component={<MyAccount />} />}
            />
            <Route path="/start" element={<Start />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/spaces/edit/:id" element={<EditRoom />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <button onClick={() => setShowScroll(!showScroll)}>Mostrar Scroll</button>
        {showScroll && <Scroll />} */}
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
