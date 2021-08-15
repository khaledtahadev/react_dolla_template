import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import Singin from "./pages/singin";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/sing-in" component={Singin} />
				<Route path="/" component={Home} exact />
			</Switch>
		</Router>
	);
}

export default App;
