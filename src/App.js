import "./App.css";
import Header from "./Components/Header/Header";
import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(
	"pk_test_51KDo6IDH6bnLD3daajaTfihGqpjglAcuhIE9jbmZ7jarLE3TcIMWPRapnC6G4gupOBZCvkWXW1odwMH0eg5Rgy0j00iI9fM5JR"
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		//will only run once when the app component loads../

		auth.onAuthStateChanged((authUser) => {
			console.log("THE USER IS >>> ", authUser);

			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
				//the user just logged in / the user was logged in
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});

				// the user is logged out
			}
		});
	}, []);

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
					<Route path='/payment'>
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path='/orders'>
						<Header />
						<Orders />
					</Route>
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
