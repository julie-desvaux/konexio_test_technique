import NavBar from "./Components/Navbar";
import User from "./Views/User";

import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

function App() {
	return (
		<>
			<NavBar />
			<div className="container">
				<User />
			</div>
		</>
	);
}

export default App;
