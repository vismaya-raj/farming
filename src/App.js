import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import FarmHeader from "./FarmSite/farmheader";
import Home from "./FarmSite/Home";
import Profile from "./FarmSite/Profile";
import Business from "./FarmSite/Business";
import ShopCart from "./FarmSite/ShopCart";
import Counter from "./FarmSite/Counter";


function App() {
  return (
    <div>
    
  
 
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <FarmHeader/>
                <Home/>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
              <FarmHeader/>
                <Profile />
              </>
            }
          />
           <Route
            path="/business"
            element={
              <>
              <FarmHeader/>
                <Business />
              </>
            }
          />
               <Route
            path="/cart"
            element={
              <>
              <FarmHeader/>
             <ShopCart/>
              </>
            }
          /> 
              <Route
            path="/counter"
            element={
              <>
              <Counter/>
          
              </>
            }
          /> 

        </Routes>
      </Router>  
   
 
    </div>
  );
}

export default App;

