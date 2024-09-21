import "./App.css";
import { Route, Routes } from "react-router-dom";
import { route } from "./Route/Index";
import PrivateContext from "./Commom/Context/Private";

function App() {
  return (
    <Routes>
      {route.map((item, index) => {
        return (
          <Route element={<PrivateContext Role={item.Role}/>}>
            <Route key={index} path={item.path} element={<item.element/>} />
          </Route>
        );
      })}
    </Routes>
  );
}

export default App;
