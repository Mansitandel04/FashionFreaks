
// import './App.css';

// import Login from './customer/components/Login/Login';

//  import HomePage from './../src/customer/Pages/Homepage/HomePage'
// import Navigation from './../src/customer/components/Navigation/Navigation'

// import Footer from './../src/customer/components/Footer/Footer'
// import Signup from './customer/components/Signup/SignUp';
// import Product from './customer/components/Product/Product';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails';

// import Cart from './customer/components/Cart/Cart';
// import CheakOut from './customer/components/CheakOut/CheakOut';
// import Order from './customer/components/Order/Order';
// import OrderDetail from './customer/components/Order/OrderDetail';
// import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './customer/components/Routers/CustomerRouter';

// function App() {
//   return (
//     <div >
// <Footer/>
//       {/* <Routes>
//       <div>
//       <div>
//       <Navigation/>
//       </div>
//       <Routes>
//         <Route path='/' element={<HomePage/>}></Route>
//         <Route path='/cart' element={<Cart/>}></Route>
//         <Route path='/:lavelOne/:lavelTwo:/leavelThre' element={<Product/>}></Route>
        
//       </Routes>
     
      
     
//       <div> <Footer/></div>
//     </div>

//       </Routes>
     
//       <div>
//         {/* <HomePage/>
//         <Product/> */}
//         {/* <ProductDetails/> */}
//          {/* <Login/>    
//          <Signup/> */}
//          {/* <Cart/> */}
//          {/* <CheakOut/>
//           */}
//           {/* <Order/> */}
//           {/* <OrderDetail/> */}
//  {/* </div>  */}
//     </div>
//   );
// }

// export default App;


import './App.css'
import React from 'react';
// import Layout from './Layouts/Layout';

const App = () => {
  return (
    <div>
      <CustomerRouter/>
    </div>
  );
}

export default App;
