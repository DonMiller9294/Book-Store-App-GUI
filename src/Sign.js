import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ButtonsExample() {
	return (
		<>
			<InputGroup className="mb-3">
				<Form.Control
					placeholder="Enter email to subscribe"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
				<Button
					style={{ backgroundColor: "ThreeDDarkShadow", color: "ghostwhite" }}
					variant="outline-secondary"
					id="button-addon2"
				>
					Button
				</Button>
			</InputGroup>
		</>
	);
}

export default ButtonsExample;
