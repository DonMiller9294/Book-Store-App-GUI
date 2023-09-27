import "./App.css";
import TheNav from "./TheNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Headbooks from "./Headbooks";
import Sign from "./Sign";
import Subscribetext from "./Subscribetext";
import Genre from "./Genre";
import Secondh from "./Secondh";

function App() {
	return (
		<div className="App">
			<TheNav />
			<Headbooks />
			<Secondh />
			<Genre />
			<Subscribetext />
			<Sign />
		</div>
	);
}

export default App;
