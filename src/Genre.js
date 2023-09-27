import Carousel from "react-bootstrap/Carousel";

function Genre() {
	return (
		<div className="genres">
			<Carousel data-bs-theme="dark">
				<Carousel.Item>
					<img className="d-block w-100" src="home.jpg" alt="First slide" />
					<Carousel.Caption>
						"
						<h5
							style={{
								color: "ghostwhite",
								textShadow: "4px 4px 10px black",
							}}
						>
							Home Improvement
						</h5>
						<p
							style={{
								color: "ghostwhite",
								backgroundColor: "darkslateblue",
								fontFamily: "monospace",
							}}
						>
							Books on home Improvement at your finger tips.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="marketing.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h5
							style={{
								color: "ghostwhite",
								textShadow: "4px 4px 10px black",
							}}
						>
							Marketing
						</h5>
						<p
							style={{
								color: "ghostwhite",
								backgroundColor: "darkslateblue",
								fontFamily: "monospace",
							}}
						>
							The best books on marketing one click away.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="history.jpg" alt="Third slide" />
					<Carousel.Caption>
						<h5
							style={{
								color: "ghostwhite",
								textShadow: "4px 4px 10px black",
							}}
						>
							History
						</h5>
						<p
							style={{
								color: "ghostwhite",
								backgroundColor: "darkslateblue",
								fontFamily: "monospace",
							}}
						>
							Discovery the history of the world.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Genre;
