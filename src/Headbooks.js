import Carousel from "react-bootstrap/Carousel";
import React from "react";

function Headbooks() {
	return (
		<Carousel data-bs-theme="dark">
			<Carousel.Item>
				<img className="d-block w-100" src="Kindle.jpg" alt="First slide" />
				<Carousel.Caption>
					<h5
						style={{
							color: "ghostwhite",
							textShadow: "4px 4px 10px black",
						}}
					>
						Kindle
					</h5>
					<p
						style={{
							backgroundColor: "darkslategrey",
							color: "ghostwhite",
							fontFamily: "monospace",
						}}
					>
						Thousands of books at the tip of your fingers.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="libary.jpg" alt="Second slide" />
				<Carousel.Caption>
					<h5
						style={{
							color: "ghostwhite",
							textShadow: "4px 4px 10px black",
						}}
					>
						Hard Copies
					</h5>
					<p style={{ backgroundColor: "darkslategrey", color: "ghostwhite" }}>
						{" "}
						Thousands of used hardcopies ready for pickup.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="bookclub.jpg" alt="Third slide" />
				<Carousel.Caption>
					<h5
						style={{
							color: "ghostwhite",
							textShadow: "4px 4px 10px black",
						}}
					>
						Book Clubs
					</h5>
					<p style={{ backgroundColor: "darkslategrey", color: "ghostwhite" }}>
						Weekly book clubs for every book lover.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Headbooks;
