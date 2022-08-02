import itemData from "./data/itemData";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Gear from "./Components/Gear";
import Merch from "./Components/Merch";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function RouteSwitch() {
  return (
    <div className="bodyContent">
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gear' element={<Gear />}/>
          <Route path='/merch' element={<Merch />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      
    </div>
  );
}


{/* <img src={item.images.static} onMouseOver={e => (e.currentTarget.src = item.images.hover)} onMouseOut={e => (e.currentTarget.src = item.images.static)} alt={item.name} className="tempimg"/> */}
export default RouteSwitch;
