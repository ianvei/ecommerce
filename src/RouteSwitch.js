import itemData from "./data/itemData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Gear from "./Components/Gear";
import Merch from "./Components/Merch";
import About from "./Components/About";
import Cart from "./Components/Cart";

function RouteSwitch() {
  return (
    <div className="bodyContent">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gear' element={<Gear />}/>
          <Route path='/merch' element={<Merch />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


{/* <img src={item.images.static} onMouseOver={e => (e.currentTarget.src = item.images.hover)} onMouseOut={e => (e.currentTarget.src = item.images.static)} alt={item.name} className="tempimg"/> */}
export default RouteSwitch;
