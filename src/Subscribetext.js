import Alert from "react-bootstrap/Alert";
import React from "react";

function Subscribetext() {
	return (
		<div className="subscribeh1">
			{[""].map((variant) => (
				<Alert key={variant} variant={variant}>
					Subscribe by email below and save 20% on your next purchase.
				</Alert>
			))}
		</div>
	);
}

export default Subscribetext;
