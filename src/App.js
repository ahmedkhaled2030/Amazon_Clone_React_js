import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from './Orders';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const promise = loadStripe(
  "pk_test_51KyxTAHk8fNRg2Pg7b76zE22yViyr4rWucM7Y7hwuf2a2AC1c4tXdwvpufYMGfMwuLknUHKOCw34MKUeZOcnXZGq00IATEjE7T"
);

function App() {


  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THIS USER IS >>>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <Elements stripe={promise} element={[<Payment />]}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders"   element={<Orders />} />
        </Routes>
        </div>
        </Elements>
    </Router>
  );
}

export default App;
